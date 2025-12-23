import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopicPageShell } from "../../components/TopicPageShell";
import {
  getSubstanceAbusePage,
  substanceAbuseSlugs,
} from "../../lib/topicContent";

export const dynamicParams = false;

export function generateStaticParams() {
  return substanceAbuseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = getSubstanceAbusePage(slug);
  if (!content) return {};
  return {
    title: content.title,
    description: content.description,
    openGraph: {
      title: `${content.title} | Footprints In The Sand 2 Recovery`,
      description: content.description,
    },
  };
}

export default async function SubstanceAbuseTopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = getSubstanceAbusePage(slug);
  if (!content) notFound();
  return <TopicPageShell content={content} />;
}


