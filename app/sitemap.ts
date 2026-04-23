import type { MetadataRoute } from "next";
import
  {
    mentalHealthSlugs,
    substanceAbuseSeoPathBySlug,
    substanceAbuseSlugs,
    treatmentApproachSeoPathBySlug,
    treatmentApproachSlugs,
  } from "./lib/topicContent";
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
      url: `${baseUrl}/SoundBridge`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${baseUrl}/partial-hospitalization-program-costa-mesa-ca`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/intensive-outpatient-program-costa-mesa-ca`,
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
      url: `${baseUrl}${treatmentApproachSeoPathBySlug[slug] ?? `/treatment-approach/${slug}`}`,
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
      url: `${baseUrl}${substanceAbuseSeoPathBySlug[slug] ?? `/substance-abuse/${slug}`}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.55,
    })),
  ];
}
















