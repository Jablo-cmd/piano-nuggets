import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-3 text-sm text-white/70">
      <ol className="flex flex-wrap items-center gap-1.5">
        {trail.map((t, i) => (
          <li key={t.path} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight aria-hidden className="h-3.5 w-3.5" />}
            {i === trail.length - 1 ? <span aria-current="page" className="inline-flex min-h-10 items-center font-semibold text-white">{t.name}</span> : <Link href={t.path} className="inline-flex min-h-10 items-center hover:text-brand-honey hover:underline">{t.name}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
