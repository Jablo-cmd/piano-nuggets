import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "ghostLight";
const styles: Record<Variant, string> = {
  primary: "bg-brand-honey text-brand-ink hover:bg-[#D9970F] shadow-soft",
  secondary: "bg-brand-ink text-white hover:bg-[#2B1A16]",
  ghost: "border-2 border-brand-ink text-brand-ink hover:bg-brand-ink hover:text-white",
  ghostLight: "border-2 border-white/80 text-white hover:bg-white hover:text-brand-ink",
};
const base =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-bold transition-all duration-200 active:scale-[0.98]";

export function ButtonLink({ variant = "primary", arrow = false, className = "", children, ...props }: ComponentProps<typeof Link> & { variant?: Variant; arrow?: boolean; children: ReactNode }) {
  return (
    <Link className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
      {arrow && <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />}
    </Link>
  );
}

export function Button({ variant = "primary", className = "", ...props }: ComponentProps<"button"> & { variant?: Variant }) {
  return <button className={`${base} ${styles[variant]} disabled:opacity-60 ${className}`} {...props} />;
}
