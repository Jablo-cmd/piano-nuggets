import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
const styles: Record<Variant, string> = {
  primary: "bg-brand-peach text-brand-ink hover:bg-[#FFA283] shadow-soft",
  secondary: "bg-brand-ink text-white hover:bg-black",
  ghost: "border-2 border-brand-ink/80 text-brand-ink hover:bg-brand-ink hover:text-white",
};
const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-bold transition-colors duration-200";

export function ButtonLink({ variant = "primary", className = "", children, ...props }: ComponentProps<typeof Link> & { variant?: Variant; children: ReactNode }) {
  return <Link className={`${base} ${styles[variant]} ${className}`} {...props}>{children}</Link>;
}

export function Button({ variant = "primary", className = "", ...props }: ComponentProps<"button"> & { variant?: Variant }) {
  return <button className={`${base} ${styles[variant]} disabled:opacity-60 ${className}`} {...props} />;
}
