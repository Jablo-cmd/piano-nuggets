import type { MetadataRoute } from "next";
import { landings } from "@/config/landing";
import { site } from "@/config/site";

/** Indexable pages only. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const core = [
    { path: "", priority: 1 },
    { path: "/piano-lessons", priority: 0.9 },
    { path: "/pricing", priority: 0.9 },
    { path: "/how-it-works", priority: 0.8 },
    ...landings.map((l) => ({ path: l.path, priority: 0.8 })),
    { path: "/faq", priority: 0.7 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.7 },
    { path: "/enrol", priority: 0.8 },
    { path: "/privacy", priority: 0.3 },
  ];
  return core.map((p) => ({ url: `${site.url}${p.path}`, lastModified: now, changeFrequency: "monthly", priority: p.priority }));
}
