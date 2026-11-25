"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/config/site";
import { Logo } from "./Logo";
import { ButtonLink } from "./Button";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const link = (href: string, label: string) => {
    const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
    return (
      <Link
        key={href}
        href={href}
        aria-current={active ? "page" : undefined}
        className={`rounded-full px-4 py-2 text-[15px] font-semibold transition-colors ${active ? "bg-brand-cream text-brand-ink" : "text-brand-ink/80 hover:bg-brand-cream"}`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-40 border-b border-brand-ink/10 bg-white/95 backdrop-blur">
      <div className="container-page flex h-[72px] items-center justify-between gap-4">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => link(n.href, n.label))}
        </nav>
        <div className="flex items-center gap-2">
          <ButtonLink href="/enrol" className="hidden !min-h-11 !px-5 !py-2 sm:inline-flex">Enrol Now</ButtonLink>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-brand-ink/20 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-brand-ink/10 bg-white lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {nav.map((n) => link(n.href, n.label))}
            <ButtonLink href="/enrol" className="mt-3">Enrol Now</ButtonLink>
          </div>
        </nav>
      )}
    </header>
  );
}
