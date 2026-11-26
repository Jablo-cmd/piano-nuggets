import type { ReactNode } from "react";
import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";
import { site, whatsappLink } from "@/config/site";
import { Breadcrumbs } from "./Breadcrumbs";

/** Dark page header used on every inner page. */
export function PageHero({ eyebrow, title, children, crumbs }: { eyebrow: string; title: ReactNode; children?: ReactNode; crumbs?: { name: string; path: string }[] }) {
  return (
    <section className="hero-bg on-dark relative overflow-hidden text-white">
      <div className="dots absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="container-page relative py-16 sm:py-24">
        {crumbs && <Breadcrumbs trail={crumbs} />}
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">{title}</h1>
        {children && <div className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">{children}</div>}
      </div>
    </section>
  );
}

export function Section({ id, title, intro, children, tone = "white" }: { id?: string; title?: ReactNode; intro?: ReactNode; children: ReactNode; tone?: "white" | "mist" | "dark" }) {
  const dark = tone === "dark";
  return (
    <section id={id} aria-labelledby={id ? `${id}-title` : undefined} className={dark ? "on-dark bg-brand-ink text-white" : tone === "mist" ? "bg-brand-mist" : ""}>
      <div className="container-page py-16 sm:py-24">
        {title && (
          <Reveal className="mb-12 max-w-3xl">
            <h2 id={id ? `${id}-title` : undefined} className="text-4xl font-extrabold leading-[1.05] sm:text-5xl">{title}</h2>
            {intro && <p className={`mt-4 text-lg sm:text-xl ${dark ? "text-white/70" : "text-brand-ink/70"}`}>{intro}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

export function EnrolCta({ title = "Ready to start your piano journey?" }: { title?: string }) {
  const wa = whatsappLink();
  return (
    <section aria-labelledby="cta-title" className="container-page mt-4">
      <div className="hero-bg on-dark relative overflow-hidden rounded-[2.5rem] p-8 text-white sm:p-16">
        <div className="dots absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative max-w-2xl">
          <h2 id="cta-title" className="text-4xl font-extrabold leading-[1.05] sm:text-6xl">{title}</h2>
          <p className="mt-5 text-lg text-white/75 sm:text-xl">
            Send an enrolment enquiry and our team will contact you to talk through lesson format, location and availability. An enquiry is not a confirmed booking.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/enrol" arrow>Enrol Now</ButtonLink>
            {wa ? (
              <a href={wa} className="inline-flex min-h-12 items-center rounded-full border-2 border-white/80 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-brand-ink">WhatsApp us</a>
            ) : (
              <ButtonLink href="/contact" variant="ghostLight">Contact us</ButtonLink>
            )}
          </div>
          <p className="mt-6 font-accent text-lg italic text-brand-honey">{site.tagline}</p>
        </div>
      </div>
    </section>
  );
}
