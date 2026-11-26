import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { Accent } from "@/components/Accent";
import { ButtonLink } from "@/components/Button";
import { FaqList } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { EnrolCta, PageHero, Section } from "@/components/Sections";
import { images } from "@/config/images";
import { landingByPath, type Landing } from "@/config/landing";
import { breadcrumbLd, faqLd, pageOpenGraph, webPageLd } from "@/config/seo";

export function landingMetadata(l: Landing): Metadata {
  return {
    title: l.metaTitle,
    description: l.metaDescription,
    alternates: { canonical: l.path },
    openGraph: pageOpenGraph(l.path, `${l.metaTitle} | Piano Nuggets`),
  };
}

export function LandingPage({ l }: { l: Landing }) {
  const trail = [
    { name: "Home", path: "/" },
    { name: "Piano Lessons", path: "/piano-lessons" },
    { name: l.navName, path: l.path },
  ];
  const photo = l.image ? images[l.image] : null;
  return (
    <>
      <JsonLd data={webPageLd(l.path, `${l.metaTitle} | Piano Nuggets`, l.metaDescription)} />
      <JsonLd data={breadcrumbLd(trail)} />
      <JsonLd data={faqLd(l.faqs)} />
      <PageHero eyebrow={l.eyebrow} crumbs={trail} title={<>{l.titleLead} <Accent>{l.titleAccent}</Accent></>}>
        {l.intro}
      </PageHero>

      <Section id="who" title={l.whoTitle}>
        <div className={`grid items-center gap-10 ${photo ? "md:grid-cols-2" : ""}`}>
          <ul className="space-y-4">
            {l.who.map((w) => (
              <li key={w} className="flex gap-3 text-lg leading-relaxed text-brand-ink/85"><Check aria-hidden className="mt-1.5 h-5 w-5 shrink-0" />{w}</li>
            ))}
          </ul>
          {photo && <Reveal><Photo src={photo.src} alt={photo.alt} className="aspect-[4/3] w-full shadow-lift" sizes="(min-width:768px) 50vw, 100vw" /></Reveal>}
        </div>
      </Section>

      <Section id="learn" tone="mist" title={l.learnTitle}>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {l.learn.map((x, i) => (
            <Reveal as="li" key={x.title} delay={i * 0.04}>
              <article className="card h-full !rounded-[2rem]">
                <span className="font-display text-4xl font-extrabold text-brand-honey">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-extrabold">{x.title}</h3>
                <p className="mt-2 text-brand-ink/75">{x.text}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section id="how" title={l.howTitle}>
        <ol className="grid gap-4 md:grid-cols-2">
          {l.how.map((h, i) => (
            <li key={h} className="flex gap-4 rounded-[1.5rem] border-2 border-brand-ink bg-white p-5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-honey font-display font-extrabold" aria-hidden="true">{i + 1}</span>
              <span className="leading-relaxed text-brand-ink/85">{h}</span>
            </li>
          ))}
        </ol>
        <div className="mt-8 rounded-[1.5rem] bg-brand-mist p-6">
          <h3 className="text-xl font-extrabold">Fees</h3>
          <p className="mt-2 max-w-3xl text-brand-ink/80">{l.priceNote}</p>
          <div className="mt-4"><ButtonLink href="/pricing" variant="secondary" arrow>See all prices</ButtonLink></div>
        </div>
      </Section>

      <Section id="faq" tone="mist" title={<>Questions, <Accent>answered</Accent></>}>
        <FaqList items={l.faqs} />
        <p className="mt-6 text-brand-ink/75">More answers on the <Link className="link" href="/faq">full FAQ page</Link>.</p>
      </Section>

      <Section id="related" title="More ways to learn">
        <ul className="grid gap-4 md:grid-cols-3">
          {l.related.map((path) => {
            const r = landingByPath(path);
            return (
              <li key={path}><Link href={path} className="group flex items-center justify-between gap-3 rounded-[1.5rem] border-2 border-brand-ink bg-white p-5 font-bold transition hover:-translate-y-1 hover:bg-brand-honey">
                {r.navName}
                <ArrowRight aria-hidden className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link></li>
            );
          })}
        </ul>
      </Section>
      <EnrolCta />
    </>
  );
}
