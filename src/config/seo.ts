import type { Metadata } from "next";
import { site } from "@/config/site";

/** Social-share image (1200x630) used by every page. */
export const ogImage = {
  url: "/images/og-share.jpg",
  width: 1200,
  height: 630,
  alt: "A grand piano in a wood-panelled studio, with the Piano Nuggets logo",
};

/** Per-page Open Graph block. A page-level openGraph replaces the layout's entirely, so every field is repeated here. */
export function pageOpenGraph(path: string, title: string): NonNullable<Metadata["openGraph"]> {
  return { type: "website", locale: "en_ZA", siteName: site.name, url: path, title, images: [ogImage] };
}

/* ------------------------------------------------------------------ */
/* Structured data (JSON-LD) builders. Every value comes from config or */
/* the programme documents; nothing here is invented.                   */
/* ------------------------------------------------------------------ */

export const orgId = `${site.url}/#organization`;
export const websiteId = `${site.url}/#website`;
const abs = (path: string) => `${site.url}${path === "/" ? "" : path}`;

/** Site-wide graph: the organisation (with confirmed contact points only) and the website. */
export function siteGraph() {
  const contactPoint = [
    ...(site.contactEmail ? [{ "@type": "ContactPoint", contactType: "customer service", email: site.contactEmail, availableLanguage: "English" }] : []),
    ...(site.whatsappNumber ? [{ "@type": "ContactPoint", contactType: "customer service", telephone: `+${site.whatsappNumber}`, availableLanguage: "English" }] : []),
  ];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "EducationalOrganization"],
        "@id": orgId,
        name: site.name,
        url: site.url,
        slogan: site.tagline,
        description: site.description,
        logo: { "@type": "ImageObject", url: `${site.url}/images/logo-lockup.png`, width: 960, height: 300 },
        image: `${site.url}${ogImage.url}`,
        parentOrganization: { "@type": "Organization", name: site.supportedBy, ...(site.freshWindUrl ? { url: site.freshWindUrl } : {}) },
        ...(contactPoint.length ? { contactPoint } : {}),
      },
      { "@type": "WebSite", "@id": websiteId, url: site.url, name: site.name, inLanguage: "en-ZA", publisher: { "@id": orgId } },
    ],
  };
}

export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, item: abs(t.path) })),
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
  };
}

/** Per-page WebPage node linked to the site graph. */
export function webPageLd(path: string, name: string, description: string) {
  return { "@context": "https://schema.org", "@type": "WebPage", "@id": `${abs(path)}#webpage`, url: abs(path), name, description, inLanguage: "en-ZA", isPartOf: { "@id": websiteId }, about: { "@id": orgId } };
}

/** Fees as schema.org offers, with the unit stated exactly as on the pricing page. */
export function offersLd() {
  const offer = (name: string, price: number, unitText: string, description: string) => ({
    "@type": "Offer",
    name,
    description,
    price: String(price),
    priceCurrency: "ZAR",
    priceSpecification: { "@type": "UnitPriceSpecification", price, priceCurrency: "ZAR", unitText },
  });
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${abs("/pricing")}#service`,
    name: "Piano and keyboard lessons",
    serviceType: "Music lessons",
    url: abs("/pricing"),
    provider: { "@id": orgId },
    audience: { "@type": "Audience", audienceType: "Children, teenagers and adults" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Piano Nuggets lesson fees",
      itemListElement: [
        offer("Registration", 250, "once-off", "Once-off registration fee."),
        offer("Individual lesson", 350, "per 60-minute lesson", "One-to-one piano or keyboard lesson of 60 minutes."),
        offer("Individual lessons, once weekly", 1400, "per four-week month", "Four 60-minute lessons in a four-week month."),
        offer("Individual lessons, twice weekly", 2800, "per four-week month", "Eight 60-minute lessons in a four-week month."),
        offer("Studio group lesson", 1500, "per 60-minute session, total for the whole group", "Group of 4 to 6 students. The fee covers the whole group, not each student."),
        offer("Online group lesson", 350, "per student, per 60-minute lesson", "Charged to each student for each lesson attended."),
        offer("Instructional material pack (optional)", 850, "once-off", "Optional pack covering theory, harmony, technique and course resources."),
      ],
    },
  };
}
