import type { Metadata } from "next";
import Link from "next/link";
import { Accent } from "@/components/Accent";
import { FaqList } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { EnrolCta, PageHero, Section } from "@/components/Sections";
import { allFaqs, faqGroups } from "@/config/faq";
import { breadcrumbLd, faqLd, pageOpenGraph, webPageLd } from "@/config/seo";

const title = "Piano Lesson FAQs: Prices, Formats & Enrolment";
const description = "Answers about piano and keyboard lessons: what is covered, lesson formats, fees in rand, online requirements and how enrolment works.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/faq" },
  openGraph: pageOpenGraph("/faq", `${title} | Piano Nuggets`),
};

export default function FaqPage() {
  const trail = [{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }];
  return (
    <>
      <JsonLd data={webPageLd("/faq", `${title} | Piano Nuggets`, description)} />
      <JsonLd data={breadcrumbLd(trail)} />
      <JsonLd data={faqLd(allFaqs)} />
      <PageHero eyebrow="FAQ" crumbs={trail} title={<>Your questions, <Accent>answered.</Accent></>}>
        Everything about lessons, formats, fees and enrolling. Can&rsquo;t find what you need? <Link className="underline decoration-brand-honey decoration-[3px] underline-offset-4" href="/contact">Get in touch</Link>.
      </PageHero>
      {faqGroups.map((g, i) => (
        <Section key={g.id} id={g.id} tone={i % 2 ? "mist" : "white"} title={g.title}>
          <FaqList items={g.items} />
        </Section>
      ))}
      <EnrolCta />
    </>
  );
}
