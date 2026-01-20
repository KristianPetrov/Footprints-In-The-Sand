import type { MetadataRoute } from "next";
import { mentalHealthSlugs, substanceAbuseSlugs, treatmentApproachSlugs } from "./lib/topicContent";
import { SITE_URL } from "./lib/seo";

const baseUrl = SITE_URL;

export default function sitemap (): MetadataRoute.Sitemap
{
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/programs`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/php`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/iop`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/admissions`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/insurance`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${baseUrl}/team`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...treatmentApproachSlugs.map((slug) => ({
      url: `${baseUrl}/treatment-approach/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.55,
    })),
    ...mentalHealthSlugs.map((slug) => ({
      url: `${baseUrl}/mental-health/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.55,
    })),
    ...substanceAbuseSlugs.map((slug) => ({
      url: `${baseUrl}/substance-abuse/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.55,
    })),
  ];
}
















