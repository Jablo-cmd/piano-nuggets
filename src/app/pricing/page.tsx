import type { Metadata } from "next";
import { EnrolCta, PageHero, Section } from "@/components/Sections";
import { ExtrasPricing, GroupPricing, IndividualPricing, PricingNotes } from "@/components/PricingBlocks";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "Piano Lesson Prices",
  description: "Clear piano lesson fees in rand, with each price shown against exactly what it covers: per lesson, per month, per group or per student.",
  alternates: { canonical: "/pricing" },
  openGraph: { url: "/pricing", title: "Piano Lesson Prices | Piano Nuggets" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Simple, transparent lesson fees.">
        Every lesson is 60 minutes. Each price below shows what it covers, so there are no surprises.
      </PageHero>
      <Section id="individual" title="Individual lessons" intro="One-to-one tuition. Monthly packages use a four-week month.">
        <IndividualPricing />
      </Section>
      <Section id="group" tone="mist" title="Group lessons" intro="Pay attention to the unit: the studio price is for the whole group; the online price is per student.">
        <GroupPricing />
      </Section>
      <Section id="extras" title="Registration, materials and home lessons">
        <ExtrasPricing />
        <PricingNotes />
        <div className="mt-8"><ButtonLink href="/contact" variant="secondary">Request a home-lesson quotation</ButtonLink></div>
      </Section>
      <EnrolCta />
    </>
  );
}
