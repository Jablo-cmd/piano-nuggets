import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { EnrolCta, PageHero, Section } from "@/components/Sections";
import { LearningAreaIcon } from "@/components/LearningAreaIcon";
import { ButtonLink } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { learningAreas } from "@/config/pricing";
import { site } from "@/config/site";
import { Photo } from "@/components/Photo";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "Piano & Keyboard Lessons for All Ages",
  description: "Learn practical piano, music theory, harmony and technique in individual or group lessons for children, teenagers and adults.",
  alternates: { canonical: "/piano-lessons" },
  openGraph: { url: "/piano-lessons", title: "Piano & Keyboard Lessons for All Ages | Piano Nuggets" },
};

export default function PianoLessonsPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: "Piano and keyboard lessons", serviceType: "Music education", provider: { "@type": "Organization", name: site.name, url: site.url }, audience: { "@type": "Audience", audienceType: "Children, teenagers and adults" } }} />
      <PageHero eyebrow="Piano Lessons" title="Learn to play, and understand why it works.">
        Lessons are designed to develop musical understanding, practical ability and confidence, for beginners and for learners who already have some experience.
      </PageHero>
      <Section id="areas" title="Four connected learning areas" intro="Each area supports the others, so you grow as a complete musician.">
        <div className="mb-10 grid gap-5 md:grid-cols-2">
          <Reveal><Photo src={images.handsOn.src} alt={images.handsOn.alt} className="aspect-[16/10] w-full shadow-soft" sizes="(min-width:768px) 50vw, 100vw" /></Reveal>
          <Reveal delay={0.05}><Photo src={images.theoryOneToOne.src} alt={images.theoryOneToOne.alt} className="aspect-[16/10] w-full shadow-soft" sizes="(min-width:768px) 50vw, 100vw" /></Reveal>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {learningAreas.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05} className="card flex h-full gap-5">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-teal"><LearningAreaIcon name={a.icon} /></span>
              <div><h3 className="text-xl font-bold">{a.title}</h3><p className="mt-2 text-brand-ink/75">{a.text}</p></div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section id="who" tone="lilac" title="Who the lessons are for">
        <ul className="grid gap-4 text-lg md:grid-cols-3">
          <li className="card">Children beginning their musical journey, with a parent or guardian handling enrolment.</li>
          <li className="card">Teenagers who want to build practical skill and understanding.</li>
          <li className="card">Adults learning for the first time or returning to the piano.</li>
        </ul>
        <p className="mt-6 max-w-2xl text-brand-ink/75">Lessons take place on piano or keyboard. Everyone starts from where they are; we do not promise particular grades, exam results or timelines.</p>
      </Section>
      <Section id="formats" title="Individual or group">
        <Reveal className="mb-8"><Photo src={images.theoryGroup.src} alt={images.theoryGroup.alt} className="aspect-[21/9] w-full shadow-soft" sizes="(min-width:1152px) 1100px, 100vw" /></Reveal>
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
