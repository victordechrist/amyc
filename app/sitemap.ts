import { MetadataRoute } from "next";
import { SKILL_TRACKS } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amyc.vercel.app";

  const staticRoutes = [
    "",
    "/about",
    "/programs",
    "/tracks",
    "/impact",
    "/showcase",
    "/resources",
    "/contact",
    "/get-involved",
    "/donate",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const trackRoutes = SKILL_TRACKS.map((track) => ({
    url: `${baseUrl}/tracks/${track.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...trackRoutes];
}
