import type { MetadataRoute } from "next";
import { properties } from "@/data/properties";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fatukhin.ru";
  
  const staticRoutes = [
    "",
    "/catalog",
    "/new-buildings",
    "/abroad",
    "/rent",
    "/about",
    "/contacts",
    "/blog",
    "/services/buy",
    "/services/sell",
    "/services/fast-buy",
    "/services/finance",
    "/services/countryside",
    "/services/commercial",
  ];

  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" || route === "/catalog") ? "daily" as const : "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const dynamicUrls = properties.map((property) => ({
    url: `${baseUrl}/catalog/${property.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticUrls, ...dynamicUrls];
}
