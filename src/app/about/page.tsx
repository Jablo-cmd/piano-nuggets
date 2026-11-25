import type { Metadata } from "next";
import { EnrolCta, PageHero, Section } from "@/components/Sections";
import { FreshWindCredit } from "@/components/Footer";
import { site } from "@/config/site";
import { Photo } from "@/components/Photo";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "About Piano Nuggets",
  description: "Piano Nuggets is a welcoming piano and keyboard education initiative supported by Fresh Wind Music.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "About Piano Nuggets" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" title="Every note counts. Every musician matters.">
        Piano Nuggets is a music education initiative supported by {site.supportedBy}.
      </PageHero>
      <Section id="approach" title="Our approach">
        <Photo src={images.theoryOneToOne.src} alt={images.theoryOneToOne.alt} className="mb-10 aspect-[21/9] w-full shadow-soft" sizes="(min-width:1152px) 1100px, 100vw" />
        <div className="grid gap-6 text-lg leading-relaxed text-brand-ink/80 md:grid-cols-2">
          <p>We believe learning piano should feel approachable, rewarding and exciting. Piano Nuggets is a place where any learner can begin, grow and feel valued, whether they are seven or seventy.</p>
          <p>Our lessons combine practical playing with the music theory, harmony and technique behind it, so learners build confidence step by step and understand what they play.</p>
        </div>
      </Section>
      <Section id="fwm" tone="mist" title="Supported by Fresh Wind Music">
        <p className="max-w-2xl text-lg text-brand-ink/80">Piano Nuggets has its own identity as an education brand, and draws on the support of Fresh Wind Music, whose studio hosts our studio lessons.</p>
        <FreshWindCredit className="mt-4 text-lg" />
      </Section>
      <Section id="team" title="Our instructors">
        <p className="max-w-2xl rounded-xl2 border-2 border-dashed border-brand-ink/25 p-6 text-brand-ink/75">
          Instructor profiles will be added here once they have been confirmed. {/* TBC: instructor identity, biographies and credentials */}
        </p>
      </Section>
      <EnrolCta />
    </>
  );
}
