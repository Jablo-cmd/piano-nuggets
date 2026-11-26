import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { buildEnquiryText, parseEnquiry } from "@/lib/enquiry";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Receives a validated enrolment enquiry and delivers it to the team by email.
 * Privacy: the payload is never logged or stored here; only delivery status codes are logged.
 * Delivery is configured with server-side environment variables (never NEXT_PUBLIC_*):
 *   Resend:  RESEND_API_KEY + ENQUIRY_FROM_EMAIL
 *   or SMTP: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS (+ optional SMTP_SECURE, ENQUIRY_FROM_EMAIL)
 *   Recipient: ENQUIRY_TO_EMAIL (falls back to the public contact email).
 */

const MAX_BYTES = 12_000;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 2000) for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  return false;
}

function sameOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return true; // non-browser clients; still rate limited and validated
  try {
    return new URL(origin).host === (req.headers.get("x-forwarded-host") ?? req.headers.get("host"));
  } catch {
    return false;
  }
}

type Delivery = "sent" | "not-configured" | "failed";

async function deliver(text: string, subject: string, replyTo?: string): Promise<Delivery> {
  const to = process.env.ENQUIRY_TO_EMAIL?.trim() || process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
  if (!to) return "not-configured";
  const from = process.env.ENQUIRY_FROM_EMAIL?.trim();

  if (process.env.RESEND_API_KEY && from) {
    try {
      const res = await fetch(process.env.RESEND_API_URL || "https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from, to: [to], subject, text, ...(replyTo ? { reply_to: replyTo } : {}) }),
        signal: AbortSignal.timeout(10_000),
      });
      if (!res.ok) console.error("enquiry delivery failed: resend status", res.status);
      return res.ok ? "sent" : "failed";
    } catch {
      console.error("enquiry delivery failed: resend unreachable");
      return "failed";
    }
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
    try {
      const port = Number(SMTP_PORT) || 465;
      const transport = nodemailer.createTransport({
        host: SMTP_HOST,
        port,
        secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
        connectionTimeout: 10_000,
        socketTimeout: 15_000,
      });
      await transport.sendMail({ from: from || SMTP_USER, to, subject, text, ...(replyTo ? { replyTo } : {}) });
      return "sent";
    } catch {
      console.error("enquiry delivery failed: smtp error");
      return "failed";
    }
  }
  return "not-configured";
}

export async function POST(req: Request) {
  if (!sameOrigin(req)) return NextResponse.json({ error: "forbidden" }, { status: 403 });
  if (Number(req.headers.get("content-length") ?? 0) > MAX_BYTES) return NextResponse.json({ error: "too-large" }, { status: 413 });

  let body: unknown;
  try {
    const raw = await req.text();
    if (raw.length > MAX_BYTES) return NextResponse.json({ error: "too-large" }, { status: 413 });
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "bad-request" }, { status: 400 });
  }

  // Honeypot: bots fill the hidden field. Pretend success and do nothing.
  if (body && typeof body === "object" && typeof (body as Record<string, unknown>).company === "string" && (body as Record<string, string>).company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) return NextResponse.json({ error: "rate-limited" }, { status: 429 });

  const parsed = parseEnquiry(body);
  if (!parsed.ok) return NextResponse.json({ error: "invalid", errors: parsed.errors }, { status: 422 });

  const d = parsed.data;
  const result = await deliver(buildEnquiryText(d), `New Piano Nuggets enquiry: ${d.learnerName}`.slice(0, 120), d.email || undefined);
  if (result === "sent") return NextResponse.json({ ok: true });
  return NextResponse.json({ error: result }, { status: result === "not-configured" ? 503 : 502 });
}
