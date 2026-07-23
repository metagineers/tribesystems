import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/platform", "/solutions", "/about", "/privacy", "/privacy-eu", "/privacy-uk"];
  return routes.map((path) => ({
    url: `${site.domain}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/privacy") ? 0.3 : 0.8,
  }));
}
