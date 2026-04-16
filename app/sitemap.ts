import type { MetadataRoute } from "next";
import { products, categories } from "@/data/products";

const BASE = "https://jomix.pl";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/o-nas`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/tabela-rozmiarow`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/dostawa-i-platnosci`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/zwroty-i-reklamacje`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/regulamin`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/polityka-prywatnosci`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${BASE}/kategoria/${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE}/produkt/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
