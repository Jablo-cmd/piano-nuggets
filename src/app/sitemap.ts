import type { MetadataRoute } from "next";
import { site } from "@/config/site";
const paths = ["", "/piano-lessons", "/pricing", "/how-it-works", "/about", "/contact", "/enrol"];
export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}
