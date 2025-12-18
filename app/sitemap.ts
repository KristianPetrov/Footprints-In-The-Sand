import type { MetadataRoute } from "next";

const baseUrl = "https://footprintsinthesand.org";

export default function sitemap (): MetadataRoute.Sitemap
{
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}






