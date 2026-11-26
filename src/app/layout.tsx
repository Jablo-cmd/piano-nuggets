import type { Metadata, Viewport } from "next";
import { Outfit, Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/config/site";
import { ogImage, siteGraph } from "@/config/seo";

const display = Outfit({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-display", display: "swap" });
const accent = Fraunces({ subsets: ["latin"], style: ["italic"], axes: ["SOFT", "opsz"], variable: "--font-accent", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Piano Nuggets — Piano & Keyboard Lessons", template: "%s | Piano Nuggets" },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/", languages: { "en-ZA": "/" } },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: site.name,
    title: "Piano Nuggets — Piano & Keyboard Lessons",
    description: site.description,
    url: "/",
    images: [ogImage],
  },
  twitter: { card: "summary_large_image", title: "Piano Nuggets", description: site.description, images: [ogImage.url] },
};

export const viewport: Viewport = { themeColor: "#E9A71C", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" className={`${display.variable} ${accent.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="sr-only z-50 rounded-full bg-brand-ink px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
        <JsonLd data={siteGraph()} />
        <Header />
        <main id="main" tabIndex={-1} className="outline-none">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
