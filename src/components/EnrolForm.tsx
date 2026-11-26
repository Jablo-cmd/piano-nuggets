"use client";
import { useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { CheckCircle2, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "./Button";
import { buildEnquiryText, parseEnquiry, type Enquiry, type EnquiryErrors } from "@/lib/enquiry";
import { submitEnquiry } from "@/lib/submitEnquiry";
import { site, whatsappLink } from "@/config/site";

function Field({ id, label, hint, error, group = false, children }: { id: string; label: string; hint?: string; error?: string; group?: boolean; children: ReactNode }) {
  const hintEl = hint ? <p id={`${id}-hint`} className="mb-1.5 text-sm text-brand-ink/65">{hint}</p> : null;
  const errorEl = error ? <p id={`${id}-error`} className="field-error" role="alert">{error}</p> : null;
  if (group) {
    // A set of radio buttons is a group, so it gets a fieldset and legend rather than a label pointing at nothing.
    return (
      <fieldset className="m-0 min-w-0 border-0 p-0" aria-describedby={[hint ? `${id}-hint` : "", error ? `${id}-error` : ""].filter(Boolean).join(" ") || undefined}>
        <legend className="mb-1.5 block p-0 font-semibold">{label}</legend>
        {hintEl}
        {children}
        {errorEl}
      </fieldset>
    );
  }
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-semibold">{label}</label>
      {hintEl}
      {children}
      {errorEl}
    </div>
  );
}

const describe = (id: string, hint: boolean, error?: string) => [hint ? `${id}-hint` : "", error ? `${id}-error` : ""].filter(Boolean).join(" ") || undefined;

function Radio({ name, options }: { name: string; options: [string, string][] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(([v, l]) => (
        <label key={v} className="cursor-pointer">
          <input type="radio" name={name} value={v} className="peer sr-only" />
          <span className="inline-flex min-h-11 items-center rounded-full border border-brand-ink/25 px-5 py-2 font-semibold peer-checked:border-brand-ink peer-checked:bg-brand-honey peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-2">{l}</span>
        </label>
      ))}
    </div>
  );
}

export function EnrolForm() {
  const ref = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [format, setFormat] = useState("");
  const [age, setAge] = useState<number | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "received" | "fallback" | "rate-limited">("idle");
  const [pending, setPending] = useState<Enquiry | null>(null);
  const minor = age !== null && age < 18;

  function focusFirst(errs: EnquiryErrors) {
    const first = Object.keys(errs)[0];
    requestAnimationFrame(() => (ref.current?.elements.namedItem(first) as HTMLElement | null)?.focus?.());
  }

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (status === "sending") return;
    const fd = new FormData(ev.currentTarget);
    const raw: Record<string, unknown> = Object.fromEntries(fd.entries());
    raw.guardianConfirm = fd.get("guardianConfirm") === "on";
    raw.consent = fd.get("consent") === "on";
    const parsed = parseEnquiry(raw);
    setStatus("idle");
    if (!parsed.ok) {
      setErrors(parsed.errors);
      focusFirst(parsed.errors);
      return;
    }
    setErrors({});
    setPending(parsed.data);
    setStatus("sending");
    const r = await submitEnquiry(parsed.data);
    if (r.status === "sent") setStatus("received");
    else if (r.status === "invalid") { setErrors(r.errors); setStatus("idle"); focusFirst(r.errors); }
    else setStatus(r.status);
  }

  /** Fallback when automatic delivery is unavailable: the visitor sends the prepared enquiry themselves. */
  const message = pending ? `Hello Piano Nuggets, I would like to enquire about piano lessons.\n\n${buildEnquiryText(pending)}` : "";
  const waHref = pending ? whatsappLink(message) : null;
  const mailHref = pending && site.contactEmail ? `mailto:${site.contactEmail}?subject=${encodeURIComponent("Piano lessons enquiry")}&body=${encodeURIComponent(message)}` : null;

  const e = errors;
  const count = Object.keys(e).length;

  if (status === "received") {
    return (
      <div className="card text-center" role="status">
        <CheckCircle2 aria-hidden className="mx-auto h-12 w-12 text-brand-ink" />
        <h2 className="mt-3 text-2xl font-extrabold">Thank you, your enquiry has been received</h2>
        <p className="mx-auto mt-3 max-w-xl text-brand-ink/80">Our team will contact you to discuss lesson arrangements. This is an enquiry only: it is not a confirmed booking or guaranteed place.</p>
      </div>
    );
  }

  const fallbackPanel = status === "fallback" ? (
      <div className="card !rounded-[2rem] !p-8" role="status">
        <h2 className="text-2xl font-extrabold">One more step: send your enquiry to us</h2>
        <p className="mt-3 text-brand-ink/80">We could not send your enquiry automatically just now. <strong>Nothing has been sent yet.</strong> Your details are ready: tap a button below and press send, and our team will take it from there.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {waHref && (
            <a href={waHref} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-honey px-6 py-3 font-bold text-brand-ink shadow-soft transition hover:bg-[#D9970F]"><MessageCircle aria-hidden className="h-5 w-5" /> Send on WhatsApp</a>
          )}
          {mailHref && (
            <a href={mailHref} className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-brand-ink px-6 py-3 font-bold transition hover:bg-brand-ink hover:text-white"><Mail aria-hidden className="h-5 w-5" /> Send by email</a>
          )}
          {!waHref && !mailHref && <Link href="/contact" className="link">See how to contact us</Link>}
        </div>
        <button type="button" onClick={() => setStatus("idle")} className="mt-6 text-sm font-semibold underline underline-offset-4">Go back and edit my details</button>
      </div>
  ) : null;

  return (
    <>
    {fallbackPanel}
    <form ref={ref} onSubmit={onSubmit} noValidate hidden={status === "fallback"} className="space-y-8">
      <div className="flex gap-3 rounded-xl2 border border-brand-honey bg-brand-mist p-5 text-sm sm:text-base">
        <ShieldCheck aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-brand-ink" />
        <p>An enquiry is <strong>not a confirmed booking</strong>. Our team will contact you to discuss arrangements. We only use these details to respond to you: see our <Link className="link" href="/privacy">privacy notice</Link>.</p>
      </div>

      {/* Honeypot: hidden from people, filled by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Company <input type="text" name="company" tabIndex={-1} autoComplete="off" /></label>
      </div>

      {status === "rate-limited" && (
        <div role="alert" className="rounded-xl2 border-2 border-red-700 bg-red-50 p-4 font-semibold text-red-800">You have sent several enquiries in a short time. Please wait a few minutes and try again, or contact us on WhatsApp.</div>
      )}

      {count > 0 && (
        <div role="alert" className="rounded-xl2 border-2 border-red-700 bg-red-50 p-4 text-red-800">
          <p className="font-bold">Please fix {count} {count === 1 ? "item" : "items"} below.</p>
        </div>
      )}

      <fieldset className="space-y-5">
        <legend className="mb-3 font-display text-xl font-extrabold">About the learner</legend>
        <Field id="learnerName" label="Learner's full name" error={e.learnerName}>
          <input id="learnerName" name="learnerName" type="text" autoComplete="off" className="field-input" aria-invalid={!!e.learnerName} aria-describedby={describe("learnerName", false, e.learnerName)} />
        </Field>
        <Field id="age" label="Learner's age" hint="We only need age, not a full date of birth." error={e.age}>
          <input id="age" name="age" type="number" inputMode="numeric" min={3} max={110} className="field-input max-w-[10rem]" onChange={(ev) => setAge(ev.target.value === "" ? null : Number(ev.target.value))} aria-invalid={!!e.age} aria-describedby={describe("age", true, e.age)} />
        </Field>
        <Field group id="experience" label="Previous piano experience" error={e.experience}>
          <Radio name="experience" options={[["beginner", "Complete beginner"], ["some", "Some experience"], ["returning", "Returning player"]]} />
        </Field>
        <Field group id="instrument" label="Instrument available to the learner" error={e.instrument}>
          <Radio name="instrument" options={[["piano", "Piano"], ["keyboard", "Keyboard"], ["none", "None yet"], ["other", "Other"]]} />
        </Field>
      </fieldset>

      {minor && (
        <fieldset className="space-y-5 rounded-xl2 bg-brand-mist p-5">
          <legend className="px-2 font-display text-xl font-extrabold">Parent or guardian</legend>
          <p className="text-sm">Learners under 18 must be enrolled by, or with the oversight of, a parent or legal guardian.</p>
          <Field id="guardianName" label="Parent or guardian's full name" error={e.guardianName}>
            <input id="guardianName" name="guardianName" type="text" className="field-input" aria-invalid={!!e.guardianName} aria-describedby={describe("guardianName", false, e.guardianName)} />
          </Field>
          <Field id="guardianPhone" label="Parent or guardian's contact number" error={e.guardianPhone}>
            <input id="guardianPhone" name="guardianPhone" type="tel" autoComplete="off" className="field-input" aria-invalid={!!e.guardianPhone} aria-describedby={describe("guardianPhone", false, e.guardianPhone)} />
          </Field>
          <div>
            <label className="flex items-start gap-3">
              <input type="checkbox" name="guardianConfirm" className="mt-1 h-5 w-5 accent-[#170D0B]" aria-invalid={!!e.guardianConfirm} />
              <span>I am the parent or legal guardian, or I am overseeing this enquiry on their behalf.</span>
            </label>
            {e.guardianConfirm && <p className="field-error" role="alert">{e.guardianConfirm}</p>}
          </div>
        </fieldset>
      )}

      <fieldset className="space-y-5">
        <legend className="mb-3 font-display text-xl font-extrabold">{minor ? "Learner contact (optional)" : "Contact details"}</legend>
        <Field id="phone" label="Phone number" error={e.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="off" className="field-input" aria-invalid={!!e.phone} aria-describedby={describe("phone", false, e.phone)} />
        </Field>
        <Field id="email" label="Email address" error={e.email}>
          <input id="email" name="email" type="email" autoComplete="off" className="field-input" aria-invalid={!!e.email} aria-describedby={describe("email", false, e.email)} />
        </Field>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="mb-3 font-display text-xl font-extrabold">Lesson preferences</legend>
        <Field group id="format" label="Preferred lesson format" error={e.format}>
          <div className="flex flex-wrap gap-2" onChange={(ev) => setFormat((ev.target as HTMLInputElement).value)}>
            {([["studio", "At the studio"], ["home", "At home"], ["online", "Online"]] as const).map(([v, l]) => (
              <label key={v} className="cursor-pointer">
                <input type="radio" name="format" value={v} className="peer sr-only" />
                <span className="inline-flex min-h-11 items-center rounded-full border border-brand-ink/25 px-5 py-2 font-semibold peer-checked:border-brand-ink peer-checked:bg-brand-honey peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-2">{l}</span>
              </label>
            ))}
          </div>
        </Field>
        {format === "home" && (
          <Field id="suburb" label="Home suburb or area" hint="Travel charges depend on location. We only need your general area for now." error={e.suburb}>
            <input id="suburb" name="suburb" type="text" className="field-input" aria-invalid={!!e.suburb} aria-describedby={describe("suburb", true, e.suburb)} />
          </Field>
        )}
        {format === "online" && (
          <Field group id="platform" label="Preferred online platform (optional)">
            <Radio name="platform" options={[["zoom", "Zoom (preferred)"], ["other", "Another platform"], ["unsure", "Not sure"]]} />
          </Field>
        )}
        <Field group id="lessonType" label="Individual or group lessons" error={e.lessonType}>
          <Radio name="lessonType" options={[["individual", "Individual"], ["group", "Group"]]} />
        </Field>
        <Field group id="frequency" label="Preferred lesson frequency" hint="Lessons are available up to twice a week." error={e.frequency}>
          <Radio name="frequency" options={[["once", "Once a week"], ["twice", "Twice a week"]]} />
        </Field>
        <Field group id="materials" label="Instructional material pack (optional)" hint="An optional R850 once-off pack.">
          <Radio name="materials" options={[["yes", "Interested"], ["no", "Not interested"], ["more-info", "Tell me more"]]} />
        </Field>
      </fieldset>

      <div>
        <label className="flex items-start gap-3">
          <input type="checkbox" name="consent" className="mt-1 h-5 w-5 accent-[#170D0B]" aria-invalid={!!e.consent} aria-describedby={e.consent ? "consent-error" : undefined} />
          <span>I agree that Piano Nuggets may use these details to contact me about piano lessons. I have read the <Link className="link" href="/privacy">privacy notice</Link>.</span>
        </label>
        {e.consent && <p id="consent-error" className="field-error" role="alert">{e.consent}</p>}
      </div>

      <Button type="submit" disabled={status === "sending"} aria-live="polite">{status === "sending" ? "Sending…" : "Send my enquiry"}</Button>
    </form>
    </>
  );
}
