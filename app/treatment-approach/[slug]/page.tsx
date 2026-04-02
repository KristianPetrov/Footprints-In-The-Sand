import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopicPageShell } from "../../components/TopicPageShell";
import
  {
    getTreatmentApproachPage,
    treatmentApproachSlugsForNestedRoutes,
  } from "../../lib/topicContent";
import { buildPageMetadata, SITE_NAME } from "../../lib/seo";

export const dynamicParams = false;

export function generateStaticParams ()
{
  return treatmentApproachSlugsForNestedRoutes.map((slug) => ({ slug }));
}

export async function generateMetadata ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata>
{
  const { slug } = await params;
  const content = getTreatmentApproachPage(slug);
  if (!content) return {};
  return buildPageMetadata({
    title: `${content.title} | ${SITE_NAME}`,
    description: content.description,
    path: `/treatment-approach/${slug}`,
    ogType: "article",
  });
}

export default async function TreatmentApproachTopicPage ({
  params,
}: {
  params: Promise<{ slug: string }>;
})
{
  const { slug } = await params;
  const content = getTreatmentApproachPage(slug);
  if (!content) notFound();
  return <TopicPageShell content={content} />;
}


