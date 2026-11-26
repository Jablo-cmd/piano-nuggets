import type { EnquiryErrors, Enquiry } from "@/lib/enquiry";

export type SubmitResult =
  | { status: "sent" }
  | { status: "invalid"; errors: EnquiryErrors }
  | { status: "rate-limited" }
  | { status: "fallback" }; // delivery is not available right now: offer WhatsApp or email instead

/** Sends a validated enquiry to /api/enquiry. Only reports "sent" when the server confirms delivery. */
export async function submitEnquiry(data: Enquiry): Promise<SubmitResult> {
  try {
    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      signal: AbortSignal.timeout(20_000),
    });
    if (res.ok) return { status: "sent" };
    if (res.status === 422) {
      const j = (await res.json().catch(() => ({}))) as { errors?: EnquiryErrors };
      return { status: "invalid", errors: j.errors ?? {} };
    }
    if (res.status === 429) return { status: "rate-limited" };
    return { status: "fallback" };
  } catch {
    return { status: "fallback" };
  }
}
