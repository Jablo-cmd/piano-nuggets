/**
 * Central, configurable site details. Anything unconfirmed is null and the UI
 * shows a "to be confirmed" state. Never invent values here.
 */
const clean = (v: string | undefined) => (v && v.trim() ? v.trim() : null);

const siteUrl = (clean(process.env.NEXT_PUBLIC_SITE_URL) ?? "https://piano-nuggets.aurisnexus.co.za").replace(/\/$/, "");

export const site = {
  name: "Piano Nuggets",
  tagline: "Every Note Counts. Every Musician Matters.",
  description:
    "Piano and keyboard lessons for children, teenagers and adults. Practical playing, music theory, harmony and technique, at the studio, at home or online.",
  url: siteUrl,
  supportedBy: "Fresh Wind Music",
  /** Fresh Wind Music link: TBC. Falls back to plain text when unset. */
  freshWindUrl: clean(process.env.NEXT_PUBLIC_FRESH_WIND_URL),
  whatsappNumber: clean(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER)?.replace(/\D/g, "") ?? null,
  contactEmail: clean(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
  studioLocation: clean(process.env.NEXT_PUBLIC_STUDIO_LOCATION),
  /** Studio and web credit shown in the footer. */
  credit: { text: "Website by Auris Technologies", url: "https://aurisnexus.co.za" },
} as const;

export const whatsappLink = (message = "Hello Piano Nuggets, I would like to enquire about piano lessons.") =>
  site.whatsappNumber
    ? `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
    : null;

/** "27735181740" -> "+27 73 518 1740" (South African mobile format); other numbers are shown as +digits. */
export const whatsappDisplay = site.whatsappNumber
  ? /^27\d{9}$/.test(site.whatsappNumber)
    ? `+27 ${site.whatsappNumber.slice(2, 4)} ${site.whatsappNumber.slice(4, 7)} ${site.whatsappNumber.slice(7)}`
    : `+${site.whatsappNumber}`
  : null;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/piano-lessons", label: "Piano Lessons" },
  { href: "/pricing", label: "Pricing" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
