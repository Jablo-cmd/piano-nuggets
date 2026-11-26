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
