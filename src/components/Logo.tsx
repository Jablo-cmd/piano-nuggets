import Link from "next/link";
import { site } from "@/config/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-orange" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
          <rect x="3" y="4" width="18" height="16" rx="3" fill="#fff" stroke="#171717" strokeWidth="1.8" />
          <rect x="8" y="4" width="2.6" height="9" rx="1" fill="#171717" />
          <rect x="13.4" y="4" width="2.6" height="9" rx="1" fill="#171717" />
        </svg>
      </span>
      <span className={`font-display text-xl font-extrabold ${light ? "text-white" : "text-brand-ink"}`}>
        Piano <span className={light ? "text-brand-orange" : "text-brand-orange-deep"}>Nuggets</span>
      </span>
    </Link>
  );
}
