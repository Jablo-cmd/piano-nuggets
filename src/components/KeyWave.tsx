/** Decorative row of keys that gently ripple. */
export function KeyWave() {
  return (
    <div className="key-wave flex h-10 w-full items-end gap-[3px] overflow-hidden" aria-hidden="true">
      {Array.from({ length: 56 }).map((_, i) => (
        <span key={i} className={`h-full flex-1 rounded-b-md ${[1, 3, 4, 6, 8, 9, 11].includes(i % 12) ? "bg-brand-honey" : "bg-white"}`} style={{ animationDelay: `${(i % 14) * 0.18}s` }} />
      ))}
    </div>
  );
}
