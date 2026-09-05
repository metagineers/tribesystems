import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/platform", "/solutions", "/about", "/privacy", "/privacy-eu", "/privacy-uk", "/prize_draw", "/prize_draw/results"];
  return routes.map((path) => ({
    url: `${site.domain}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/privacy") || path === "/prize_draw" ? 0.3 : 0.8,
  }));
}
