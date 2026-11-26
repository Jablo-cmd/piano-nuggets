"use client";
import { useRef, useState, type ReactNode } from "react";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "./Button";
import { validateEnquiry, type EnquiryErrors } from "@/lib/enquiry";
import { submitEnquiry } from "@/lib/submitEnquiry";
import { site, whatsappLink } from "@/config/site";

function Field({ id, label, hint, error, children }: { id: string; label: string; hint?: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-semibold">{label}</label>
      {hint && <p id={`${id}-hint`} className="mb-1.5 text-sm text-brand-ink/65">{hint}</p>}
      {children}
      {error && <p id={`${id}-error`} className="field-error" role="alert">{error}</p>}
    </div>
  );
}

const describe = (id: string, hint: boolean, error?: string) => [hint ? `${id}-hint` : "", error ? `${id}-error` : ""].filter(Boolean).join(" ") || undefined;

function Radio({ name, options, error }: { name: string; options: [string, string][]; error?: string }) {
  return (
    <div role="radiogroup" aria-describedby={error ? `${name}-error` : undefined} aria-invalid={!!error} className="flex flex-wrap gap-2">
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
  const [status, setStatus] = useState<"idle" | "not-configured" | "received">("idle");
  const [busy, setBusy] = useState(false);
  const minor = age !== null && age < 18;
  const wa = whatsappLink();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data: Record<string, unknown> = Object.fromEntries(fd.entries());
    data.guardianConfirm = fd.get("guardianConfirm") === "on";
    const result = validateEnquiry(data);
    setStatus("idle");
    if (!result.ok) {
      setErrors(result.errors);
      const first = Object.keys(result.errors)[0];
      requestAnimationFrame(() => (ref.current?.elements.namedItem(first) as HTMLElement | null)?.focus?.());
      return;
    }
    setErrors({});
    if (!site.enquiriesEnabled) { setStatus("not-configured"); return; }
    setBusy(true);
    const r = await submitEnquiry();
    setBusy(false);
    setStatus(r.ok ? "received" : "not-configured");
  }

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

  return (
    <form ref={ref} onSubmit={onSubmit} noValidate className="space-y-8" aria-describedby="form-notice">
      <div id="form-notice" className="flex gap-3 rounded-xl2 border border-brand-honey bg-brand-mist p-5 text-sm sm:text-base">
        <AlertTriangle aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-brand-ink" />
        <p>
          <strong>Online enquiries are not open yet.</strong> This form is a preview: nothing you type is sent, saved or logged. An enquiry is not a confirmed booking. Please{" "}
          {wa ? <a className="link" href={wa}>message us on WhatsApp</a> : <a className="link" href="/contact">see how to contact us</a>} in the meantime.
        </p>
      </div>

      {count > 0 && (
        <div role="alert" className="rounded-xl2 border-2 border-red-700 bg-red-50 p-4 text-red-800">
          <p className="font-bold">Please fix {count} {count === 1 ? "item" : "items"} below.</p>
        </div>
      )}

      <fieldset className="space-y-5">
        <legend className="mb-3 font-display text-xl font-extrabold">About the learner</legend>
        <Field id="learnerName" label="Learner's full name" error={e.learnerName}>
          <input id="learnerName" name="learnerName" autoComplete="off" className="field-input" aria-invalid={!!e.learnerName} aria-describedby={describe("learnerName", false, e.learnerName)} />
        </Field>
        <Field id="age" label="Learner's age" hint="We only need age, not a full date of birth." error={e.age}>
          <input id="age" name="age" type="number" inputMode="numeric" min={3} max={110} className="field-input max-w-[10rem]" onChange={(ev) => setAge(ev.target.value === "" ? null : Number(ev.target.value))} aria-invalid={!!e.age} aria-describedby={describe("age", true, e.age)} />
        </Field>
        <Field id="experience" label="Previous piano experience" error={e.experience}>
          <Radio name="experience" error={e.experience} options={[["beginner", "Complete beginner"], ["some", "Some experience"], ["returning", "Returning player"]]} />
        </Field>
        <Field id="instrument" label="Instrument available to the learner" error={e.instrument}>
          <Radio name="instrument" error={e.instrument} options={[["piano", "Piano"], ["keyboard", "Keyboard"], ["none", "None yet"], ["other", "Other"]]} />
        </Field>
      </fieldset>

      {minor && (
        <fieldset className="space-y-5 rounded-xl2 bg-brand-mist p-5">
          <legend className="px-2 font-display text-xl font-extrabold">Parent or guardian</legend>
          <p className="text-sm">Learners under 18 must be enrolled by, or with the oversight of, a parent or legal guardian.</p>
          <Field id="guardianName" label="Parent or guardian's full name" error={e.guardianName}>
            <input id="guardianName" name="guardianName" className="field-input" aria-invalid={!!e.guardianName} aria-describedby={describe("guardianName", false, e.guardianName)} />
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
        <Field id="format" label="Preferred lesson format" error={e.format}>
          <div role="radiogroup" className="flex flex-wrap gap-2" onChange={(ev) => setFormat((ev.target as HTMLInputElement).value)}>
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
            <input id="suburb" name="suburb" className="field-input" aria-invalid={!!e.suburb} aria-describedby={describe("suburb", true, e.suburb)} />
          </Field>
        )}
        {format === "online" && (
          <Field id="platform" label="Preferred online platform (optional)">
            <Radio name="platform" options={[["zoom", "Zoom (preferred)"], ["other", "Another platform"], ["unsure", "Not sure"]]} />
          </Field>
        )}
        <Field id="lessonType" label="Individual or group lessons" error={e.lessonType}>
          <Radio name="lessonType" error={e.lessonType} options={[["individual", "Individual"], ["group", "Group"]]} />
        </Field>
        <Field id="frequency" label="Preferred lesson frequency" hint="Lessons are available up to twice a week." error={e.frequency}>
          <Radio name="frequency" error={e.frequency} options={[["once", "Once a week"], ["twice", "Twice a week"]]} />
        </Field>
        <Field id="materials" label="Instructional material pack (optional)" hint="An optional R850 once-off pack.">
          <Radio name="materials" options={[["yes", "Interested"], ["no", "Not interested"], ["more-info", "Tell me more"]]} />
        </Field>
      </fieldset>

      <p className="text-sm text-brand-ink/70">Privacy notice: to be confirmed before online enquiries open. Please do not enter anything you would not want kept private until then.</p>

      <Button type="submit" disabled={busy}>Check my enquiry</Button>

      {status === "not-configured" && (
        <div role="status" className="rounded-xl2 border-2 border-brand-ink p-5">
          <p className="font-bold">Your details look complete, but nothing has been sent.</p>
          <p className="mt-1 text-brand-ink/80">Online enquiries are not open yet. Please contact us directly so our team can help you arrange lessons.</p>
        </div>
      )}
    </form>
  );
}
