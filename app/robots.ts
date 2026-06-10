import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://studiobarberia.es/sitemap.xml",
    host: "https://studiobarberia.es",
  };
}
