/** Decorative piano-key motif. Purely visual (aria-hidden). */
export function PianoKeys({ className = "" }: { className?: string }) {
  const black = [0, 1, 3, 4, 5, 7, 8, 10, 11, 12];
  return (
    <svg viewBox="0 0 140 60" className={className} aria-hidden="true" focusable="false" preserveAspectRatio="none">
      {Array.from({ length: 14 }).map((_, i) => (
        <rect key={i} x={i * 10 + 0.5} y={0.5} width={9} height={59} rx={2.5} fill="#fff" stroke="#170D0B22" />
      ))}
      {black.map((i) => (
        <rect key={i} x={i * 10 + 7} y={0} width={6} height={36} rx={2} fill="#170D0B" />
      ))}
    </svg>
  );
}

/** Thin strip of keys for section dividers. */
export function KeyStrip() {
  return (
    <div className="flex h-3 w-full overflow-hidden" aria-hidden="true">
      {Array.from({ length: 48 }).map((_, i) => (
        <span key={i} className={`flex-1 border-r border-brand-ink/10 ${[1, 3, 4, 6, 8, 9, 11].includes(i % 12) ? "bg-brand-honey" : "bg-white/90"}`} />
      ))}
    </div>
  );
}
