import { ArrowUpRight, MapPin } from "lucide-react";
import { Accent } from "@/components/Accent";
import { Reveal } from "@/components/Reveal";
import { site } from "@/config/site";

/** Prominent "supported by Fresh Wind Music" band. Uses only confirmed facts. */
export function FreshWindSection() {
  return (
    <section aria-labelledby="freshwind-title" className="container-page mt-4 mb-4">
      <Reveal>
        <div className="hero-bg on-dark relative overflow-hidden rounded-[2.5rem] p-8 text-white sm:p-14">
          <div className="dots absolute inset-0 opacity-40" aria-hidden="true" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="eyebrow">Our studio partner</p>
              <h2 id="freshwind-title" className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl">
                Proudly supported by <Accent>{site.supportedBy}.</Accent>
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
                Piano Nuggets is a music education initiative supported by {site.supportedBy}. Studio lessons take place at the {site.supportedBy} studio.
              </p>
            </div>
            <div className="space-y-5 lg:justify-self-end">
              {site.studioLocation && (
                <p className="flex items-start gap-3 text-lg text-white/90">
                  <MapPin aria-hidden className="mt-1 h-5 w-5 shrink-0 text-brand-honey" />
                  <span>{site.supportedBy} studio<br />{site.studioLocation}</span>
                </p>
              )}
              {site.freshWindUrl && (
                <a
                  href={site.freshWindUrl}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-honey px-6 py-3 font-bold text-brand-ink transition hover:bg-[#D9970F]"
                >
                  Visit {site.supportedBy}
                  <ArrowUpRight aria-hidden className="h-5 w-5" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
