import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopicPageShell } from "../../components/TopicPageShell";
import { getMentalHealthPage, mentalHealthSlugs } from "../../lib/topicContent";
import { buildPageMetadata, SITE_NAME } from "../../lib/seo";

export const dynamicParams = false;

export function generateStaticParams ()
{
  return mentalHealthSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata>
{
  const { slug } = await params;
  const content = getMentalHealthPage(slug);
  if (!content) return {};
  return buildPageMetadata({
    title: `${content.title} | ${SITE_NAME}`,
    description: content.description,
    path: `/mental-health/${slug}`,
    ogType: "article",
  });
}

export default async function MentalHealthTopicPage ({
  params,
}: {
  params: Promise<{ slug: string }>;
})
{
  const { slug } = await params;
  const content = getMentalHealthPage(slug);
  if (!content) notFound();
  return <TopicPageShell content={content} />;
}


