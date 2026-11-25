import Link from "next/link";
import type { Metadata } from "next";
import { Building2, Globe, Home as HomeIcon, Users, UserRound, Sparkles, Heart, Layers } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { EnrolCta, Section } from "@/components/Sections";
import { PricingPreview } from "@/components/PricingBlocks";
import { LearningAreaIcon } from "@/components/LearningAreaIcon";
import { PianoKeys } from "@/components/PianoKeys";
import { FreshWindCredit } from "@/components/Footer";
import { learningAreas } from "@/config/pricing";
import { images } from "@/config/images";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: "Piano Nuggets — Piano & Keyboard Lessons" },
  description: "Friendly piano and keyboard lessons for children, teenagers and adults. Studio, home and online options, supported by Fresh Wind Music.",
  alternates: { canonical: "/" },
};

const formats = [
  { icon: Building2, title: "At the studio", text: "Learn at the Fresh Wind Music studio. Location details to be confirmed." },
  { icon: HomeIcon, title: "At your home", text: "An instructor can come to you, subject to location and additional travel charges." },
  { icon: Globe, title: "Online", text: "Learn by Zoom (preferred) or another platform with good sound quality." },
];

const ages = [
  { title: "Children", text: "A patient, encouraging start for young learners, with a parent or guardian involved in enrolment." },
  { title: "Teenagers", text: "Build real playing ability and musical understanding at your own pace." },
  { title: "Adults", text: "Starting out or coming back to music? It is never too late to begin." },
];

const why = [
  { icon: Sparkles, title: "Playing and understanding together", text: "Practical playing is taught alongside theory, harmony and technique." },
  { icon: Users, title: "Individual or group", text: "Choose one-to-one lessons or learn alongside others." },
  { icon: Layers, title: "Flexible places to learn", text: "Studio, home or online, whichever suits your life." },
  { icon: Heart, title: "Welcoming to every level", text: "Complete beginners and returning players are equally at home." },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-mist">
        <div className="container-page grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow"><Sparkles aria-hidden className="h-4 w-4" /> Piano &amp; keyboard lessons</p>
            <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] sm:text-6xl">Every great musician starts somewhere.</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-ink/80">
              Discover the joy of music through piano and keyboard lessons designed to inspire, teach and develop confident musicians.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/enrol">Enrol Now</ButtonLink>
              <ButtonLink href="/piano-lessons" variant="ghost">Explore the lessons</ButtonLink>
            </div>
            <p className="mt-6 font-display text-base font-bold text-brand-teal-deep">{site.tagline}</p>
          </div>
          <Photo src={images.studio.src} alt={images.studio.alt} className="aspect-[16/11] w-full shadow-soft" priority />
        </div>
      </section>

      <Section id="intro" title="Welcome to Piano Nuggets" intro="A welcoming place to learn piano and keyboard, whatever your age or experience.">
        <Reveal className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-5">
            <p className="text-lg leading-relaxed text-brand-ink/80">
              Piano Nuggets is a music education initiative with a simple belief: every note counts and every musician matters. Our lessons help learners play with confidence, understand the music behind what they play, and enjoy the process.
            </p>
            <FreshWindCredit className="rounded-xl2 bg-brand-mist p-5 text-base" />
          </div>
          <Photo src={images.theoryGroup.src} alt={images.theoryGroup.alt} className="aspect-[16/10] w-full shadow-soft" sizes="(min-width:768px) 50vw, 100vw" />
        </Reveal>
      </Section>

      <Section id="lessons" tone="mist" title="Piano and keyboard lessons" intro="Four connected learning areas build musical understanding, practical ability and confidence.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {learningAreas.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05} className="card h-full">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-teal"><LearningAreaIcon name={a.icon} /></span>
              <h3 className="mt-4 text-lg font-bold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink/75">{a.text}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-8"><ButtonLink href="/piano-lessons" variant="secondary">More about the lessons</ButtonLink></div>
      </Section>

      <Section id="formats" title="Learn the way that suits you" intro="Individual or group lessons, in the studio, at home or online.">
        <div className="grid gap-5 md:grid-cols-3">
          {formats.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05} className="card h-full">
              <f.icon aria-hidden className="h-8 w-8 text-brand-teal-deep" />
              <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-brand-ink/75">{f.text}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 flex items-center gap-2 text-brand-ink/75"><UserRound aria-hidden className="h-5 w-5" /> All lessons are 60 minutes. <Link className="link" href="/how-it-works">See how it works</Link></p>
      </Section>

      <Section id="pricing" tone="mist" title="Clear, simple pricing" intro="Every price shows exactly what it covers, so you always know what you are paying for.">
        <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <PricingPreview />
          <div className="space-y-4 text-brand-ink/80">
            <p><strong>Studio group:</strong> R1,500 is the total for the whole group per session, not per student.</p>
            <p><strong>Online group:</strong> R350 is charged per student.</p>
            <ButtonLink href="/pricing" variant="secondary">See full pricing</ButtonLink>
          </div>
        </div>
      </Section>

      <Section id="why" title="Why choose Piano Nuggets">
        <div className="grid gap-6 sm:grid-cols-2">
          {why.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.04} className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-mist"><w.icon aria-hidden className="h-6 w-6 text-brand-teal-deep" /></span>
              <div><h3 className="text-lg font-bold">{w.title}</h3><p className="mt-1 text-brand-ink/75">{w.text}</p></div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="ages" tone="lilac" title="Lessons for every age" intro="Piano Nuggets is for children, teenagers and adults, from first-time beginners to returning players.">
        <div className="grid gap-5 md:grid-cols-3">
          {ages.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05} className="card h-full">
              <PianoKeys className="mb-4 h-8 w-20" />
              <h3 className="text-xl font-bold">{a.title}</h3>
              <p className="mt-2 text-brand-ink/75">{a.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <EnrolCta />
    </>
  );
}
