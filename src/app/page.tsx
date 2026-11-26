import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Globe, Home as HomeIcon, Users, Sparkles, Heart, Layers } from "lucide-react";
import { Accent } from "@/components/Accent";
import { ButtonLink } from "@/components/Button";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { EnrolCta, Section } from "@/components/Sections";
import { PricingPreview } from "@/components/PricingBlocks";
import { LearningAreaIcon } from "@/components/LearningAreaIcon";
import { FreshWindCredit } from "@/components/Footer";
import { StatStrip } from "@/components/StatStrip";
import { PlayablePiano } from "@/components/PlayablePiano";
import { images } from "@/config/images";
import { learningAreas } from "@/config/pricing";

export const metadata: Metadata = {
  title: { absolute: "Piano & Keyboard Lessons: Studio, Home & Online | Piano Nuggets" },
  description: "Piano and keyboard lessons for children, teenagers and adults: practical playing, theory, harmony and technique. Individual or group, from R350 a lesson.",
  alternates: { canonical: "/" },
};

const formats = [
  { icon: Building2, title: "At the studio", text: "Learn at the Fresh Wind Music studio. Location details to be confirmed." },
  { icon: HomeIcon, title: "At your home", text: "An instructor can come to you, subject to location and additional travel charges." },
  { icon: Globe, title: "Online", text: "Learn by Zoom (preferred) or another platform with good sound quality." },
];

const ages = [
  { title: "Children", href: "/kids-and-teens-piano-lessons", text: "A patient, encouraging start for young learners, with a parent or guardian involved in enrolment." },
  { title: "Teenagers", href: "/kids-and-teens-piano-lessons", text: "Build real playing ability and musical understanding at your own pace." },
  { title: "Adults", href: "/adult-piano-lessons", text: "Starting out or coming back to music? It is never too late to begin." },
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
      <section className="hero-bg on-dark relative overflow-hidden text-white">
        <div className="dots absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="container-page relative grid items-center gap-12 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
          <div>
            <p className="eyebrow"><Sparkles aria-hidden className="h-4 w-4" /> Piano &amp; keyboard lessons</p>
            <h1 className="mt-6 text-[3.25rem] font-extrabold leading-[0.98] sm:text-7xl lg:text-[5.5rem]">
              Every great musician starts <Accent>somewhere.</Accent>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
              Discover the joy of music through piano and keyboard lessons designed to inspire, teach and develop confident musicians.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/enrol" arrow>Enrol Now</ButtonLink>
              <ButtonLink href="/piano-lessons" variant="ghostLight">Explore the lessons</ButtonLink>
            </div>
            <ul className="mt-9 flex flex-wrap gap-2 text-sm font-semibold">
              {["Individual or group", "Studio · Home · Online", "All ages"].map((c) => (
                <li key={c} className="rounded-full border border-white/25 bg-white/5 px-4 py-1.5 text-white/90">{c}</li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <Photo src={images.studioRoom.src} alt={images.studioRoom.alt} focus="60% center" className="relative aspect-[4/3] w-full !rounded-[2.5rem] shadow-lift" sizes="(min-width:1024px) 48vw, 100vw" priority />
          </div>
        </div>
      </section>

      <StatStrip />

      <Section id="intro" tone="mist" title={<>Welcome to <Accent>Piano Nuggets</Accent></>} intro="A welcoming place to learn piano and keyboard, whatever your age or experience.">
        <Reveal className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-brand-ink/80 sm:text-xl">
              Piano Nuggets is a music education initiative with a simple belief: every note counts and every musician matters. Our lessons help learners play with confidence, understand the music behind what they play, and enjoy the process.
            </p>
            <FreshWindCredit className="inline-block rounded-full bg-white px-5 py-2.5 text-base shadow-soft" />
          </div>
          <div className="relative">
            <Photo src={images.theoryGroup.src} alt={images.theoryGroup.alt} className="relative aspect-[16/9] w-full shadow-lift" sizes="(min-width:768px) 50vw, 100vw" />
          </div>
        </Reveal>
      </Section>

      <Section id="lessons" title={<>Piano and keyboard <Accent>lessons</Accent></>} intro="Four connected learning areas build musical understanding, practical ability and confidence.">
        <div className="grid gap-5 sm:grid-cols-2">
          {learningAreas.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <article className="group relative h-full overflow-hidden rounded-[2rem] border-2 border-brand-ink bg-white p-7 transition duration-300 hover:-translate-y-1 hover:bg-brand-honey sm:p-9">
                <span className="absolute right-6 top-4 font-display text-7xl font-extrabold leading-none tracking-[-0.06em] text-brand-ink/10 transition group-hover:text-brand-ink/20" aria-hidden="true">0{i + 1}</span>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-ink text-brand-honey transition group-hover:bg-white group-hover:text-brand-ink"><LearningAreaIcon name={a.icon} /></span>
                <h3 className="mt-6 text-2xl font-extrabold">{a.title}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-brand-ink/75 group-hover:text-brand-ink/90">{a.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10"><ButtonLink href="/piano-lessons" variant="secondary" arrow>More about the lessons</ButtonLink>
          <p className="mt-5 text-brand-ink/75">New to piano? See <Link className="link" href="/beginner-piano-lessons">beginner piano lessons</Link>, or <Link className="link" href="/online-piano-lessons">learn online</Link>.</p></div>
      </Section>

      <Section id="try" tone="dark" title={<>Go on, <Accent>play a note.</Accent></>} intro="Two octaves from middle C. Tap the keys. This is just for fun, nothing is recorded.">
        <Reveal><PlayablePiano /></Reveal>
      </Section>

      <Section id="formats" title={<>Learn the way that <Accent>suits you</Accent></>} intro="Individual or group lessons, in the studio, at home or online.">
        <div className="grid gap-5 md:grid-cols-3">
          {formats.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="card h-full !rounded-[2rem] !p-8">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-honey"><f.icon aria-hidden className="h-7 w-7" /></span>
                <h3 className="mt-6 text-2xl font-extrabold">{f.title}</h3>
                <p className="mt-3 leading-relaxed text-brand-ink/75">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-brand-ink/75">All lessons are 60 minutes. <Link className="link" href="/how-it-works">See how it works</Link></p>
      </Section>

      <Section id="pricing" tone="mist" title={<>Clear, simple <Accent>pricing</Accent></>} intro="Every price shows exactly what it covers, so you always know what you are paying for.">
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <PricingPreview />
          <div className="space-y-5 text-lg text-brand-ink/80">
            <p><strong>Studio group:</strong> R1,500 is the total for the whole group per session, not per student.</p>
            <p><strong>Online group:</strong> R350 is charged per student.</p>
            <ButtonLink href="/pricing" variant="secondary" arrow>See full pricing</ButtonLink>
          </div>
        </div>
      </Section>

      <Section id="why" title={<>Why choose <Accent>Piano Nuggets</Accent></>}>
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {why.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.04} className="flex gap-5">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-honey"><w.icon aria-hidden className="h-7 w-7" /></span>
              <div><h3 className="text-xl font-extrabold">{w.title}</h3><p className="mt-2 text-brand-ink/75">{w.text}</p></div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="ages" tone="mist" title={<>Lessons for <Accent>every age</Accent></>} intro="Piano Nuggets is for children, teenagers and adults, from first-time beginners to returning players.">
        <div className="grid gap-5 md:grid-cols-3">
          {ages.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <Link href={a.href} className="group block h-full rounded-[2rem] bg-brand-plum p-8 text-white transition duration-300 hover:-translate-y-1">
                <span className="font-display text-6xl font-extrabold leading-none text-brand-rose">0{i + 1}</span>
                <h3 className="mt-6 text-2xl font-extrabold">{a.title}</h3>
                <p className="mt-3 leading-relaxed text-white/70">{a.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-bold text-brand-honey">Lessons for {a.title.toLowerCase()} <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <EnrolCta />
    </>
  );
}
