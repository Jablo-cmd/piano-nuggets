import { Check, Home, Info } from "lucide-react";
import { fmt, pricing } from "@/config/pricing";
import { Reveal } from "./Reveal";

function Amount({ value, unit }: { value: number; unit: string }) {
  return (
    <p>
      <span className="font-display text-5xl font-extrabold">{fmt(value)}</span>
      <span className="mt-1 block text-sm font-semibold text-brand-ink/70">{unit}</span>
    </p>
  );
}

function Badge({ children, tone = "cream" }: { children: React.ReactNode; tone?: "cream" | "orange" | "ink" }) {
  const t = { cream: "bg-brand-cream text-brand-ink", orange: "bg-brand-orange text-brand-ink", ink: "bg-brand-ink text-white" }[tone];
  return <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${t}`}>{children}</span>;
}

export function IndividualPricing() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      <Reveal className="card">
        <Badge>Single lesson</Badge>
        <h3 className="mt-3 text-xl font-bold">Individual lesson</h3>
        <div className="mt-4"><Amount value={pricing.individual.amount} unit={pricing.individual.unit} /></div>
        <p className="mt-4 text-sm text-brand-ink/75">One-to-one, 60 minutes.</p>
      </Reveal>
      <Reveal delay={0.05} className="card">
        <Badge tone="orange">Once weekly</Badge>
        <h3 className="mt-3 text-xl font-bold">4 lessons a month</h3>
        <div className="mt-4"><Amount value={pricing.onceWeekly.amount} unit={pricing.onceWeekly.unit} /></div>
        <p className="mt-4 text-sm text-brand-ink/75">Four 60-minute lessons in a four-week month.</p>
      </Reveal>
      <Reveal delay={0.1} className="card">
        <Badge tone="orange">Twice weekly</Badge>
        <h3 className="mt-3 text-xl font-bold">8 lessons a month</h3>
        <div className="mt-4"><Amount value={pricing.twiceWeekly.amount} unit={pricing.twiceWeekly.unit} /></div>
        <p className="mt-4 text-sm text-brand-ink/75">Eight 60-minute lessons in a four-week month. Twice weekly is the maximum frequency.</p>
      </Reveal>
    </div>
  );
}

export function GroupPricing() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <Reveal className="card border-2 border-brand-ink">
        <Badge tone="ink">Studio group · whole-group price</Badge>
        <h3 className="mt-3 text-xl font-bold">Studio group lesson</h3>
        <div className="mt-4"><Amount value={pricing.studioGroup.amount} unit="per 60-minute session" /></div>
        <p className="mt-4 rounded-xl bg-brand-cream p-3 text-sm font-semibold">
          This is the total for the whole group of {pricing.studioGroup.size}. It is not a per-student fee.
        </p>
      </Reveal>
      <Reveal delay={0.05} className="card border-2 border-brand-orange">
        <Badge tone="orange">Online group · per-student price</Badge>
        <h3 className="mt-3 text-xl font-bold">Online group lesson</h3>
        <div className="mt-4"><Amount value={pricing.onlineGroup.amount} unit="per student, per 60-minute lesson" /></div>
        <p className="mt-4 rounded-xl bg-brand-cream p-3 text-sm font-semibold">Each student pays this amount for each lesson they attend.</p>
      </Reveal>
    </div>
  );
}

export function ExtrasPricing() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      <Reveal className="card">
        <Badge>Registration</Badge>
        <div className="mt-4"><Amount value={pricing.registration.amount} unit="once-off registration fee" /></div>
      </Reveal>
      <Reveal delay={0.05} className="card">
        <Badge>Optional</Badge>
        <h3 className="mt-3 text-lg font-bold">Instructional material pack</h3>
        <div className="mt-3"><Amount value={pricing.materials.amount} unit="once-off · optional" /></div>
        <p className="mt-3 text-sm text-brand-ink/75">Learning resources covering theory, harmony, technique and course content. Purchase is your choice.</p>
      </Reveal>
      <Reveal delay={0.1} className="card">
        <Badge>Home lessons</Badge>
        <h3 className="mt-3 text-lg font-bold">Instructor comes to you</h3>
        <p className="mt-3 flex gap-2 text-sm text-brand-ink/80"><Home aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange-deep" />
          Available on request. Additional travel charges depend on your location. Enquire for a quotation.</p>
      </Reveal>
    </div>
  );
}

export function PricingNotes() {
  return (
    <ul className="mt-8 space-y-2 text-sm text-brand-ink/75">
      <li className="flex gap-2"><Info aria-hidden className="mt-0.5 h-4 w-4 shrink-0" /> All lessons are 60 minutes. Prices are in South African Rand (ZAR).</li>
      <li className="flex gap-2"><Info aria-hidden className="mt-0.5 h-4 w-4 shrink-0" /> Monthly individual packages are calculated on a four-week month.</li>
      <li className="flex gap-2"><Info aria-hidden className="mt-0.5 h-4 w-4 shrink-0" /> Payment arrangements are discussed when our team contacts you after your enquiry.</li>
    </ul>
  );
}

export function PricingPreview() {
  const rows = [
    ["Individual lesson", fmt(pricing.individual.amount), "per 60-minute lesson"],
    ["Once weekly (4 lessons)", fmt(pricing.onceWeekly.amount), "per four-week month"],
    ["Twice weekly (8 lessons)", fmt(pricing.twiceWeekly.amount), "per four-week month"],
    ["Studio group (4–6 students)", fmt(pricing.studioGroup.amount), "per session, whole group"],
    ["Online group", fmt(pricing.onlineGroup.amount), "per student, per lesson"],
  ];
  return (
    <div className="card overflow-hidden !p-0">
      <ul className="divide-y divide-brand-ink/10">
        {rows.map(([name, price, unit]) => (
          <li key={name} className="flex items-center justify-between gap-4 px-6 py-4">
            <span className="font-semibold">{name}</span>
            <span className="text-right"><span className="font-display text-xl font-extrabold">{price}</span><span className="block text-xs text-brand-ink/65">{unit}</span></span>
          </li>
        ))}
      </ul>
      <p className="flex items-center gap-2 bg-brand-cream px-6 py-3 text-sm"><Check aria-hidden className="h-4 w-4" /> Plus a once-off {fmt(pricing.registration.amount)} registration fee.</p>
    </div>
  );
}
