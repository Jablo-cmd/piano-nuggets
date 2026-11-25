import { Accent } from "@/components/Accent";
import type { Metadata } from "next";
import { Building2, Globe, Home as HomeIcon, Check } from "lucide-react";
import { EnrolCta, PageHero, Section } from "@/components/Sections";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "How Piano Lessons Work",
  description: "Studio, home or online piano lessons, and how enrolment works from your first enquiry to your first lesson.",
  alternates: { canonical: "/how-it-works" },
  openGraph: { url: "/how-it-works", title: "How Piano Lessons Work | Piano Nuggets" },
};

const steps = [
  ["Explore", "Look through the lessons, formats and pricing."],
  ["Send an enquiry", "Complete the enrolment enquiry or contact us."],
  ["We get in touch", "Our team contacts you to discuss suitability, location, format, group placement and schedule."],
  ["Arrangements confirmed", "Fees, any home-lesson travel charge and payment arrangements are explained, and next steps confirmed directly with you."],
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero eyebrow="How It Works" title={<>From first enquiry to <Accent>first lesson.</Accent></>}>
        Choose where you would like to learn, tell us a little about the learner, and we will take it from there.
      </PageHero>
      <Section id="formats" title={<>Three ways <Accent>to learn</Accent></>}>
        <div className="grid gap-5 md:grid-cols-3">
          <Reveal className="card h-full"><Building2 aria-hidden className="h-8 w-8 text-brand-teal-deep" /><h3 className="mt-4 text-xl font-bold">Studio lessons</h3><p className="mt-2 text-brand-ink/75">Attend the Fresh Wind Music studio. Public location details are to be confirmed.</p></Reveal>
          <Reveal delay={0.05} className="card h-full"><HomeIcon aria-hidden className="h-8 w-8 text-brand-teal-deep" /><h3 className="mt-4 text-xl font-bold">Home lessons</h3><p className="mt-2 text-brand-ink/75">An instructor can be deployed to your residence, subject to location. Additional travel charges depend on where you live; request a quotation.</p></Reveal>
          <Reveal delay={0.1} className="card h-full"><Globe aria-hidden className="h-8 w-8 text-brand-teal-deep" /><h3 className="mt-4 text-xl font-bold">Online lessons</h3><p className="mt-2 text-brand-ink/75">Zoom is preferred. Another platform can be used if the sound quality is good enough for lessons to run smoothly.</p></Reveal>
        </div>
      </Section>
      <div className="container-page"><Reveal><Photo src={images.handsOn.src} alt={images.handsOn.alt} className="aspect-[21/9] w-full shadow-soft" sizes="(min-width:1152px) 1100px, 100vw" /></Reveal></div>
      <Section id="online" tone="mist" title="What you need for online lessons">
        <ul className="grid gap-3 text-lg md:grid-cols-2">
          {[
            "Reliable internet",
            "A piano or keyboard",
            "A full-size piano or electronic keyboard is recommended, although any usable keyboard can be used",
            "Adequate audio quality, so your instructor can hear the notes you play",
          ].map((t) => (
            <li key={t} className="card flex gap-3 !p-5"><Check aria-hidden className="mt-1 h-5 w-5 shrink-0 text-brand-teal-deep" />{t}</li>
          ))}
        </ul>
      </Section>
      <Section id="steps" title="The enrolment journey">
        <ol className="grid gap-5 md:grid-cols-2">
          {steps.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.04}>
              <li className="card flex h-full gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-teal font-display text-lg font-extrabold" aria-hidden="true">{i + 1}</span>
                <div><h3 className="text-lg font-bold">{t}</h3><p className="mt-1 text-brand-ink/75">{d}</p></div>
              </li>
            </Reveal>
          ))}
        </ol>
        <p className="mt-6 rounded-xl2 bg-brand-mist p-5 font-semibold">An enquiry is not a confirmed booking or guaranteed place. Lessons are confirmed only when our team has spoken with you.</p>
      </Section>
      <EnrolCta />
    </>
  );
}
