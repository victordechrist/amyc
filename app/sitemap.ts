import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amyc.vercel.app";

  // Auth-gated routes (/tracks, /showcase, /dashboard, /account) are excluded.
  const staticRoutes = [
    "",
    "/about",
    "/programs",
    "/impact",
    "/contact",
    "/get-involved",
    "/donate",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  return staticRoutes;
}
