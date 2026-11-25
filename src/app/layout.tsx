import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/config/site";

const display = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Piano Nuggets — Piano & Keyboard Lessons", template: "%s | Piano Nuggets" },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: site.name,
    title: "Piano Nuggets — Piano & Keyboard Lessons",
    description: site.description,
    url: "/",
    images: [{ url: "/images/piano-lesson-studio.webp", width: 1672, height: 941, alt: "A learner and instructor at the piano" }],
  },
  twitter: { card: "summary_large_image", title: "Piano Nuggets", description: site.description, images: ["/images/piano-lesson-studio.webp"] },
};

export const viewport: Viewport = { themeColor: "#8FD3CB", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="sr-only z-50 rounded-full bg-brand-ink px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: site.name,
            slogan: site.tagline,
            url: site.url,
            description: site.description,
            parentOrganization: { "@type": "Organization", name: site.supportedBy },
          }}
        />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
