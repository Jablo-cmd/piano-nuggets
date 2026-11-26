const items = ["Practical Piano", "Music Theory", "Harmony", "Piano Technique", "Individual or group", "Studio · Home · Online", "Every age welcome", "Beginners welcome"];

/** Slow yellow ribbon of lesson themes. Decorative: the same facts appear in the page content. */
export function Marquee() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <li key={t} className="flex items-center gap-10 whitespace-nowrap font-display text-lg font-extrabold uppercase tracking-[0.08em] sm:text-xl">
          {t}
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true"><path d="M9 18V5l11-2v13" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="6" cy="18" r="3.2" fill="currentColor" /><circle cx="17" cy="16" r="3.2" fill="currentColor" /></svg>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee overflow-hidden border-y-2 border-brand-ink bg-brand-honey py-4 text-brand-ink" role="presentation">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
