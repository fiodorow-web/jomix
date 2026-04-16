import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/kasa", "/api/"],
    },
    sitemap: "https://jomix.pl/sitemap.xml",
  };
}
