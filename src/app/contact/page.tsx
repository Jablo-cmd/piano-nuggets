import { Accent } from "@/components/Accent";
import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { EnrolCta, PageHero, Section } from "@/components/Sections";
import { site, whatsappLink } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Piano Nuggets",
  description: "Get in touch about piano and keyboard lessons, home-lesson quotations or enrolment.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: "Contact Piano Nuggets" },
};

function Pending() {
  return <span className="font-semibold text-brand-ink/60">To be confirmed</span>;
}

export default function ContactPage() {
  const wa = whatsappLink();
  return (
    <>
      <PageHero eyebrow="Contact" title={<>Let&rsquo;s talk about <Accent>piano lessons.</Accent></>}>
        Questions about lessons, formats or home-lesson quotations? Send an enrolment enquiry and our team will be in touch.
      </PageHero>
      <Section id="details">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="card"><MessageCircle aria-hidden className="h-7 w-7 text-brand-teal-deep" /><h2 className="mt-3 text-lg font-bold">WhatsApp</h2>
            <p className="mt-2">{wa ? <a className="link" href={wa}>Message us on WhatsApp</a> : <Pending />}</p></div>
          <div className="card"><Mail aria-hidden className="h-7 w-7 text-brand-teal-deep" /><h2 className="mt-3 text-lg font-bold">Email</h2>
            <p className="mt-2">{site.contactEmail ? <a className="link" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> : <Pending />}</p></div>
          <div className="card"><MapPin aria-hidden className="h-7 w-7 text-brand-teal-deep" /><h2 className="mt-3 text-lg font-bold">Studio</h2>
            <p className="mt-2">{site.studioLocation ?? <Pending />}</p></div>
        </div>
        <div className="mt-8 rounded-xl2 bg-brand-mist p-6">
          <h2 className="text-xl font-bold">Ready to enrol?</h2>
          <p className="mt-2 text-brand-ink/80">Use the <Link className="link" href="/enrol">enrolment enquiry form</Link>. Home lessons? Mention your suburb and ask for a quotation.</p>
        </div>
      </Section>
      <EnrolCta />
    </>
  );
}
