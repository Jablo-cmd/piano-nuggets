import { Plus } from "lucide-react";
import type { Faq } from "@/config/faq";

/** Accessible accordion using native <details>: works without JavaScript and is fully indexable. */
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-brand-ink/15 rounded-[1.5rem] border-2 border-brand-ink bg-white">
      {items.map((f) => (
        <details key={f.q} className="group px-5 py-1 sm:px-7">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 text-lg font-bold [&::-webkit-details-marker]:hidden">
            {f.q}
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-honey transition-transform duration-200 group-open:rotate-45" aria-hidden="true"><Plus className="h-4 w-4" /></span>
          </summary>
          <p className="pb-5 pr-10 leading-relaxed text-brand-ink/80">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
