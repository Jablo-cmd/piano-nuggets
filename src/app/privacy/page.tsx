import type { Metadata } from "next";
import Link from "next/link";
import { Accent } from "@/components/Accent";
import { JsonLd } from "@/components/JsonLd";
import { PageHero, Section } from "@/components/Sections";
import { breadcrumbLd, pageOpenGraph, webPageLd } from "@/config/seo";
import { site, whatsappDisplay } from "@/config/site";

const title = "Privacy Notice";
const description = "How Piano Nuggets uses the personal information you send when you enquire about piano lessons, including information about children, and your rights.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: pageOpenGraph("/privacy", `${title} | Piano Nuggets`),
};

export default function PrivacyPage() {
  const trail = [{ name: "Home", path: "/" }, { name: "Privacy notice", path: "/privacy" }];
  const contact = site.contactEmail ? <a className="link" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> : <>the contact details on our <Link className="link" href="/contact">Contact page</Link></>;
  return (
    <>
      <JsonLd data={webPageLd("/privacy", `${title} | Piano Nuggets`, description)} />
      <JsonLd data={breadcrumbLd(trail)} />
      <PageHero eyebrow="Privacy" crumbs={trail} title={<>Your details, <Accent>handled with care.</Accent></>}>
        What we collect when you enquire about lessons, why, who sees it, and the choices you have. Written to be read, not skimmed past.
      </PageHero>
      <Section id="notice">
        <div className="max-w-3xl space-y-10 text-lg leading-relaxed text-brand-ink/85">
          <section aria-labelledby="who">
            <h2 id="who" className="text-2xl font-extrabold text-brand-ink">Who we are</h2>
            <p className="mt-3">Piano Nuggets is a piano and keyboard music education initiative supported by {site.supportedBy}. The Piano Nuggets team decides how the information on this page is used. You can reach us at {contact}{whatsappDisplay ? <> or on WhatsApp at {whatsappDisplay}</> : null}.</p>
          </section>
          <section aria-labelledby="collect">
            <h2 id="collect" className="text-2xl font-extrabold text-brand-ink">What we collect</h2>
            <p className="mt-3">Only what the enrolment form asks for:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>the learner&rsquo;s name and age (we do not ask for a date of birth or any identity number);</li>
              <li>for learners under 18, a parent or guardian&rsquo;s name and contact number;</li>
              <li>a phone number and/or email address;</li>
              <li>lesson preferences: experience, instrument available, format (studio, home or online), individual or group, frequency, and your suburb or area if you choose home lessons.</li>
            </ul>
            <p className="mt-3">We do not ask for medical information, photographs or payment details through this website.</p>
          </section>
          <section aria-labelledby="why">
            <h2 id="why" className="text-2xl font-extrabold text-brand-ink">Why we use it</h2>
            <p className="mt-3">To contact you about your enquiry, discuss suitability, location, format, group placement and schedule, and arrange lessons. We do not use it for advertising and we do not sell or share it for marketing. An enquiry is not a confirmed booking.</p>
          </section>
          <section aria-labelledby="where">
            <h2 id="where" className="text-2xl font-extrabold text-brand-ink">Where it goes</h2>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>When you press send, your enquiry is delivered to the Piano Nuggets team by email. It is not published and is not kept in a database on this website.</li>
              <li>If automatic sending is unavailable, the form prepares a message for you to send yourself by WhatsApp or email. In that case your details travel through the service you choose (for example WhatsApp), under its own privacy terms.</li>
              <li>This website is hosted by Vercel, which processes technical request data (such as IP addresses) to deliver pages and protect against abuse. We use a limit on how many enquiries can be sent from one connection to prevent spam.</li>
              <li>This website sets no advertising or analytics cookies.</li>
            </ul>
          </section>
          <section aria-labelledby="children">
            <h2 id="children" className="text-2xl font-extrabold text-brand-ink">Children</h2>
            <p className="mt-3">A parent or legal guardian should submit or oversee an enquiry for anyone under 18, and the form asks for their details and confirmation. We do not publish the names, contact details or photographs of learners, and we will only use a learner&rsquo;s image or story in our marketing with explicit consent.</p>
          </section>
          <section aria-labelledby="keep">
            <h2 id="keep" className="text-2xl font-extrabold text-brand-ink">How long we keep it</h2>
            <p className="mt-3">Only for as long as we need it to respond to you and arrange lessons, or as the law requires. If you do not go ahead, ask us and we will delete your enquiry.</p>
          </section>
          <section aria-labelledby="rights">
            <h2 id="rights" className="text-2xl font-extrabold text-brand-ink">Your rights</h2>
            <p className="mt-3">You can ask to see the personal information we hold about you or your child, to have it corrected or deleted, or to object to us using it, by contacting {contact}. If you are not satisfied, you may complain to the Information Regulator of South Africa (<a className="link" href="https://inforegulator.org.za" rel="noopener">inforegulator.org.za</a>), which oversees the Protection of Personal Information Act (POPIA).</p>
          </section>
          <p className="text-base text-brand-ink/60">Last updated 26 November 2026. We will update this page if what we do with your information changes.</p>
        </div>
      </Section>
    </>
  );
}
