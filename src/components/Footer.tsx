import Link from "next/link";
import { nav, site, whatsappDisplay, whatsappLink } from "@/config/site";
import { Logo } from "./Logo";
import { landings } from "@/config/landing";
import { KeyStrip } from "./PianoKeys";

export function FreshWindCredit({ className = "" }: { className?: string }) {
  return (
    <p className={className}>
      Music education powered by{" "}
      {site.freshWindUrl ? (
        <a href={site.freshWindUrl} className="font-semibold underline underline-offset-4" rel="noopener" target="_blank">{site.supportedBy}</a>
      ) : (
        <span className="font-semibold">{site.supportedBy}</span>
      )}
      .
    </p>
  );
}

export function Footer() {
  const wa = whatsappLink();
  return (
    <footer className="mt-24 bg-brand-ink text-white">
      <KeyStrip />
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1.2fr_1.2fr]">
        <div className="space-y-4">
          <Logo light />
          <p className="font-display text-lg font-bold text-brand-honey">{site.tagline}</p>
          <FreshWindCredit className="text-sm text-white/75" />
        </div>
        <nav aria-label="Footer" className="text-sm">
          <h2 className="font-display text-base font-bold text-white">Explore</h2>
          <ul className="mt-1">
            {[...nav, { href: "/enrol", label: "Enrol Now" }].map((n) => (
              <li key={n.href}><Link href={n.href} className="inline-flex min-h-11 items-center text-white/85 hover:text-brand-honey">{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Lessons" className="text-sm">
          <h2 className="font-display text-base font-bold text-white">Lessons</h2>
          <ul className="mt-1">
            {[...landings.map((l) => ({ href: l.path, label: l.navName })), { href: "/faq", label: "FAQ" }].map((n) => (
              <li key={n.href}><Link href={n.href} className="inline-flex min-h-11 items-center text-white/85 hover:text-brand-honey">{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div className="space-y-2 text-sm text-white/85">
          <h2 className="font-display text-base font-bold text-white">Get in touch</h2>
          {wa && whatsappDisplay ? <p>WhatsApp: <a className="inline-flex min-h-11 items-center font-semibold underline underline-offset-4 hover:text-brand-honey" href={wa}>{whatsappDisplay}</a></p> : <p>WhatsApp: to be confirmed</p>}
          {site.contactEmail ? <p>Email: <a className="inline-flex min-h-11 items-center font-semibold underline underline-offset-4 hover:text-brand-honey" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></p> : <p>Email: to be confirmed</p>}
          <p><Link className="inline-flex min-h-11 items-center underline underline-offset-4" href="/contact">Contact page</Link></p>
        </div>
      </div>
      <div className="border-t border-white/15 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Piano Nuggets. All prices in South African Rand (ZAR).
      </div>
    </footer>
  );
}
