import { Reveal } from "./Reveal";

const stats = [
  { big: "4", label: "learning areas", note: "Playing, theory, harmony, technique" },
  { big: "60", label: "minute lessons", note: "Every lesson, every format" },
  { big: "3", label: "places to learn", note: "Studio, at home or online" },
  { big: "All", label: "ages welcome", note: "Children, teens and adults" },
];

/** Big-number facts, all taken from the programme documents. */
export function StatStrip() {
  return (
    <section aria-label="Lessons at a glance" className="container-page py-14 sm:py-20">
      <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.05}>
            <div className="border-t-4 border-brand-ink pt-4">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-display text-6xl font-extrabold leading-none tracking-[-0.05em] sm:text-7xl">
                  <span className="bg-[linear-gradient(transparent_62%,#E9A71C_62%,#E9A71C_90%,transparent_90%)] px-1">{s.big}</span>
                </span>
                <span className="mt-3 block text-lg font-bold">{s.label}</span>
                <span className="mt-1 block text-sm text-brand-ink/65">{s.note}</span>
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
