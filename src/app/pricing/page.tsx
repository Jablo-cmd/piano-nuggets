import Link from "next/link";
import { breadcrumbLd, offersLd, pageOpenGraph, webPageLd } from "@/config/seo";
import { JsonLd } from "@/components/JsonLd";
import { Accent } from "@/components/Accent";
import { Typewriter } from "@/components/Typewriter";
import type { Metadata } from "next";
import { EnrolCta, PageHero, Section } from "@/components/Sections";
import { ExtrasPricing, GroupPricing, IndividualPricing, PricingNotes } from "@/components/PricingBlocks";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "Piano Lesson Prices",
  description: "Piano lesson fees in rand: R350 per individual lesson, R1,400 or R2,800 a month, R1,500 per studio group session, R350 per online student. Registration R250.",
  alternates: { canonical: "/pricing" },
  openGraph: pageOpenGraph("/pricing", "Piano Lesson Prices | Piano Nuggets"),
};

const HEADING_LENGTH = "Simple, transparent lesson fees.".length;
const HEADING_DELAY = 250;
const HEADING_SPEED = 38;
const INTRO = "Every lesson is 60 minutes. Each price below shows what it covers, so there are no surprises.";
const INTRO_SPEED = 16;
// The intro starts once the heading has finished typing.
const INTRO_DELAY = HEADING_DELAY + 250 + HEADING_LENGTH * HEADING_SPEED + 150;

export default function PricingPage() {
  return (
    <>
      <JsonLd data={webPageLd("/pricing", "Piano Lesson Prices | Piano Nuggets", metadata.description as string)} />
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }])} />
      <JsonLd data={offersLd()} />
      <PageHero
        eyebrow="Pricing"
        title={<Typewriter delay={HEADING_DELAY} speed={HEADING_SPEED} segments={[{ text: "Simple, transparent " }, { text: "lesson fees.", accent: true }]} />}
      >
        <Typewriter delay={INTRO_DELAY} speed={INTRO_SPEED} segments={[{ text: INTRO }]} />
      </PageHero>
      <Section id="individual" title={<>Individual <Accent>lessons</Accent></>} intro="One-to-one tuition. Monthly packages use a four-week month.">
        <IndividualPricing />
      </Section>
      <Section id="group" tone="mist" title={<>Group <Accent>lessons</Accent></>} intro="Pay attention to the unit: the studio price is for the whole group; the online price is per student.">
        <GroupPricing />
      </Section>
      <Section id="extras" title="Registration, materials and home lessons">
        <ExtrasPricing />
        <PricingNotes />
        <div className="mt-8"><ButtonLink href="/contact" variant="secondary">Request a home-lesson quotation</ButtonLink>
        <p className="mt-6 text-brand-ink/75">Questions about fees? See the <Link className="link" href="/faq#pricing">pricing FAQ</Link>.</p></div>
      </Section>
      <EnrolCta />
    </>
  );
}
