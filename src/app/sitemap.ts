import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fatukhin.ru";
  
  const routes = [
    "",
    "/catalog",
    "/catalog/1",
    "/catalog/4",
    "/catalog/7",
    "/new-buildings",
    "/abroad",
    "/rent",
    "/about",
    "/contacts",
    "/blog",
    "/services/buy",
    "/services/sell"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route.startsWith("/catalog") ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
