import { Accent } from "@/components/Accent";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { EnrolCta, PageHero, Section } from "@/components/Sections";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { site, whatsappDisplay, whatsappLink } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Piano Nuggets",
  description: "Get in touch about piano and keyboard lessons, home-lesson quotations or enrolment. Message us on WhatsApp or send an email.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: "Contact Piano Nuggets" },
};

function Pending() {
  return <span className="font-semibold text-brand-ink/60">To be confirmed</span>;
}

export default function ContactPage() {
  const wa = whatsappLink();
  const points = [
    ...(site.contactEmail ? [{ "@type": "ContactPoint", contactType: "customer service", email: site.contactEmail, availableLanguage: "English" }] : []),
    ...(site.whatsappNumber ? [{ "@type": "ContactPoint", contactType: "customer service", telephone: `+${site.whatsappNumber}`, availableLanguage: "English" }] : []),
  ];
  return (
    <>
      {points.length > 0 && <JsonLd data={{ "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.url, contactPoint: points }} />}
      <PageHero eyebrow="Contact" title={<>Let&rsquo;s talk about <Accent>piano lessons.</Accent></>}>
        Questions about lessons, formats or home-lesson quotations? Message us or send an enrolment enquiry and our team will be in touch.
      </PageHero>
      <Section id="details" title={<>Reach us <Accent>directly</Accent></>} intro="Pick whichever is easiest for you. Lesson days, times and place are agreed after we have spoken.">
        <div className="grid gap-5 md:grid-cols-3">
          <Reveal>
            <div className="flex h-full flex-col rounded-[2rem] border-2 border-brand-ink bg-brand-honey p-8">
              <MessageCircle aria-hidden className="h-8 w-8" />
              <h2 className="mt-5 text-2xl font-extrabold">WhatsApp</h2>
              {wa && whatsappDisplay ? (
                <>
                  <p className="mt-2 text-2xl font-extrabold tabular-nums tracking-[-0.02em]">{whatsappDisplay}</p>
                  <a href={wa} className="mt-6 inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-brand-ink px-6 py-3 font-bold text-white transition hover:bg-[#2B1A16]">
                    Chat on WhatsApp <ArrowUpRight aria-hidden className="h-4 w-4" />
                  </a>
                </>
              ) : (
                <p className="mt-2"><Pending /></p>
              )}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="flex h-full flex-col rounded-[2rem] border-2 border-brand-ink bg-white p-8">
              <Mail aria-hidden className="h-8 w-8" />
              <h2 className="mt-5 text-2xl font-extrabold">Email</h2>
              {site.contactEmail ? (
                <>
                  <p className="mt-2 break-all text-xl font-bold">{site.contactEmail}</p>
                  <a href={`mailto:${site.contactEmail}`} className="mt-6 inline-flex min-h-12 w-fit items-center gap-2 rounded-full border-2 border-brand-ink px-6 py-3 font-bold transition hover:bg-brand-ink hover:text-white">
                    Send an email <ArrowUpRight aria-hidden className="h-4 w-4" />
                  </a>
                </>
              ) : (
                <p className="mt-2"><Pending /></p>
              )}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-[2rem] border-2 border-brand-ink bg-white p-8">
              <MapPin aria-hidden className="h-8 w-8" />
              <h2 className="mt-5 text-2xl font-extrabold">Studio</h2>
              <p className="mt-2 text-lg">{site.studioLocation ?? <Pending />}</p>
              <p className="mt-3 text-sm text-brand-ink/65">Lessons also take place at your home (travel charges apply) or online.</p>
            </div>
          </Reveal>
        </div>
        <div className="mt-8 rounded-[2rem] bg-brand-mist p-7">
          <h2 className="text-xl font-extrabold">Ready to enrol?</h2>
          <p className="mt-2 text-brand-ink/80">Use the <Link className="link" href="/enrol">enrolment enquiry form</Link>. Home lessons? Mention your suburb and ask for a quotation.</p>
        </div>
      </Section>
      <EnrolCta />
    </>
  );
}
