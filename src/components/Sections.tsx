import type { ReactNode } from "react";
import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";
import { site, whatsappLink } from "@/config/site";
import { KeyStrip } from "./PianoKeys";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="bg-brand-mist">
      <div className="container-page py-14 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.1] sm:text-5xl">{title}</h1>
        {children && <div className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-ink/80">{children}</div>}
      </div>
      <KeyStrip />
    </section>
  );
}

export function Section({ id, title, intro, children, tone = "white" }: { id?: string; title?: string; intro?: ReactNode; children: ReactNode; tone?: "white" | "mist" | "lilac" }) {
  return (
    <section id={id} aria-labelledby={id ? `${id}-title` : undefined} className={tone === "mist" ? "bg-brand-mist" : tone === "lilac" ? "bg-brand-lilac/60" : ""}>
      <div className="container-page py-16 sm:py-20">
        {title && (
          <Reveal className="mb-10 max-w-2xl">
            <h2 id={id ? `${id}-title` : undefined} className="text-3xl font-extrabold sm:text-4xl">{title}</h2>
            {intro && <p className="mt-3 text-lg text-brand-ink/75">{intro}</p>}
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
      <div className="relative overflow-hidden rounded-xl3 bg-brand-teal p-8 sm:p-14">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-lilac/70" aria-hidden="true" />
        <div className="relative max-w-2xl">
          <h2 id="cta-title" className="text-3xl font-extrabold sm:text-4xl">{title}</h2>
          <p className="mt-3 text-lg text-brand-ink/85">
            Send an enrolment enquiry and our team will contact you to talk through lesson format, location and availability. An enquiry is not a confirmed booking.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href="/enrol" variant="secondary">Enrol Now</ButtonLink>
            {wa ? (
              <a href={wa} className="inline-flex min-h-12 items-center rounded-full border-2 border-brand-ink px-6 py-3 font-bold hover:bg-brand-ink hover:text-white">WhatsApp us</a>
            ) : (
              <ButtonLink href="/contact" variant="ghost">Contact us</ButtonLink>
            )}
          </div>
          <p className="mt-5 text-sm font-medium text-brand-ink/75">{site.tagline}</p>
        </div>
      </div>
    </section>
  );
}
