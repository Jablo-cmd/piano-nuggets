import { Accent } from "@/components/Accent";
import type { Metadata } from "next";
import { EnrolForm } from "@/components/EnrolForm";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Enrol for Piano Lessons",
  description: "Start an enrolment enquiry for piano or keyboard lessons. Our team will contact you to arrange lessons.",
  alternates: { canonical: "/enrol" },
  openGraph: { url: "/enrol", title: "Enrol for Piano Lessons | Piano Nuggets" },
};

export default function EnrolPage() {
  return (
    <>
      <PageHero eyebrow="Enrol Now" title={<>Start your <Accent>enrolment enquiry.</Accent></>}>
        Tell us a little about the learner and how you would like to learn. Our team will contact you to discuss arrangements. An enquiry is not a confirmed booking.
      </PageHero>
      <div className="container-page max-w-3xl py-14"><EnrolForm /></div>
    </>
  );
}
