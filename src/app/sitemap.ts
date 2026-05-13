import type { MetadataRoute } from "next";

const BASE_URL = "https://nah.sa";
const locales = ["ar", "en"];

const pages = [
  "",
  "/about",
  "/companies",
  "/vision",
  "/chairman",
  "/services",
  "/portfolio",
  "/contact",
  "/careers",
  "/news",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE_URL}/${l}${page}`])
          ),
        },
      });
    }
  }

  return entries;
}
