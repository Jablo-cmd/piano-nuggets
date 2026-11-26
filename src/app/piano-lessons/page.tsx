import Link from "next/link";
import { breadcrumbLd, pageOpenGraph, webPageLd } from "@/config/seo";
import { Accent } from "@/components/Accent";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { EnrolCta, PageHero, Section } from "@/components/Sections";
import { LearningAreaIcon } from "@/components/LearningAreaIcon";
import { ButtonLink } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { learningAreas } from "@/config/pricing";
import { site } from "@/config/site";
import { Photo } from "@/components/Photo";
import { landings } from "@/config/landing";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "Piano & Keyboard Lessons for All Ages",
  description: "Practical piano, music theory, harmony and technique in 60-minute individual or group lessons for children, teenagers and adults. Studio, home or online.",
  alternates: { canonical: "/piano-lessons" },
  openGraph: pageOpenGraph("/piano-lessons", "Piano & Keyboard Lessons for All Ages | Piano Nuggets"),
};

export default function PianoLessonsPage() {
  return (
    <>
      <JsonLd data={webPageLd("/piano-lessons", "Piano & Keyboard Lessons for All Ages | Piano Nuggets", metadata.description as string)} />
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Piano Lessons", path: "/piano-lessons" }])} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: "Piano and keyboard lessons", serviceType: "Music education", provider: { "@type": "Organization", name: site.name, url: site.url }, audience: { "@type": "Audience", audienceType: "Children, teenagers and adults" } }} />
      <PageHero eyebrow="Piano Lessons" title={<>Learn to play, and understand <Accent>why it works.</Accent></>}>
        Lessons are designed to develop musical understanding, practical ability and confidence, for beginners and for learners who already have some experience.
      </PageHero>
      <Section id="areas" title={<>Four connected <Accent>learning areas</Accent></>} intro="Each area supports the others, so you grow as a complete musician.">
        <div className="mb-10 grid gap-5 md:grid-cols-2">
          <Reveal><Photo src={images.handsOn.src} alt={images.handsOn.alt} className="aspect-[16/9] w-full shadow-soft" sizes="(min-width:768px) 50vw, 100vw" /></Reveal>
          <Reveal delay={0.05}><Photo src={images.theoryOneToOne.src} alt={images.theoryOneToOne.alt} className="aspect-[16/9] w-full shadow-soft" sizes="(min-width:768px) 50vw, 100vw" /></Reveal>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {learningAreas.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05} className="card flex h-full gap-5">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-honey"><LearningAreaIcon name={a.icon} /></span>
              <div><h3 className="text-xl font-bold">{a.title}</h3><p className="mt-2 text-brand-ink/75">{a.text}</p></div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section id="find" title={<>Find the lessons <Accent>for you</Accent></>} intro="Pick the page that sounds most like you for a closer look.">
        <div className="grid gap-4 sm:grid-cols-2">
          {landings.map((l) => (
            <Link key={l.path} href={l.path} className="group flex items-center justify-between gap-3 rounded-[1.5rem] border-2 border-brand-ink bg-white p-5 text-lg font-bold transition hover:-translate-y-1 hover:bg-brand-honey">
              {l.navName}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </Section>
      <Section id="who" tone="mist" title={<>Who the lessons <Accent>are for</Accent></>}>
        <ul className="grid gap-4 text-lg md:grid-cols-3">
          <li className="card">Children beginning their musical journey, with a parent or guardian handling enrolment.</li>
          <li className="card">Teenagers who want to build practical skill and understanding.</li>
          <li className="card">Adults learning for the first time or returning to the piano.</li>
        </ul>
        <p className="mt-6 max-w-2xl text-brand-ink/75">Lessons take place on piano or keyboard. Everyone starts from where they are; we do not promise particular grades, exam results or timelines.</p>
      </Section>
      <Section id="formats" title={<>Individual <Accent>or group</Accent></>}>
        <Reveal className="mb-8"><Photo src={images.theoryGroup.src} alt={images.theoryGroup.alt} focus="center 28%" className="aspect-[2/1] w-full shadow-soft" sizes="(min-width:1152px) 1100px, 100vw" /></Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="card"><h3 className="text-xl font-bold">Individual lessons</h3><p className="mt-2 text-brand-ink/75">One-to-one attention, 60 minutes at a time, once or twice a week.</p></div>
          <div className="card"><h3 className="text-xl font-bold">Group lessons</h3><p className="mt-2 text-brand-ink/75">Learn alongside others in the studio (4–6 students) or online. Group placement is arranged after we speak with you.</p></div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3"><ButtonLink href="/pricing" variant="secondary">View pricing</ButtonLink><ButtonLink href="/how-it-works" variant="ghost">How it works</ButtonLink></div>
      </Section>
      <EnrolCta />
    </>
  );
}
