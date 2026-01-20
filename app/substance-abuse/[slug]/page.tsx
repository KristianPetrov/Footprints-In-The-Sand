import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopicPageShell } from "../../components/TopicPageShell";
import
  {
    getSubstanceAbusePage,
    substanceAbuseSlugs,
  } from "../../lib/topicContent";
import { buildPageMetadata, SITE_NAME } from "../../lib/seo";

export const dynamicParams = false;

export function generateStaticParams ()
{
  return substanceAbuseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata>
{
  const { slug } = await params;
  const content = getSubstanceAbusePage(slug);
  if (!content) return {};
  return buildPageMetadata({
    title: `${content.title} | ${SITE_NAME}`,
    description: content.description,
    path: `/substance-abuse/${slug}`,
    ogType: "article",
  });
}

export default async function SubstanceAbuseTopicPage ({
  params,
}: {
  params: Promise<{ slug: string }>;
})
{
  const { slug } = await params;
  const content = getSubstanceAbusePage(slug);
  if (!content) notFound();
  return <TopicPageShell content={content} />;
}


