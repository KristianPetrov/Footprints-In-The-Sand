import type { Metadata } from "next";
import type { ReactElement } from "react";
import { TopicPageShell } from "../components/TopicPageShell";
import {
  getSubstanceAbusePage,
  getTreatmentApproachPage,
  substanceAbuseSeoPathBySlug,
  treatmentApproachSeoPathBySlug,
} from "./topicContent";
import { buildPageMetadata, SITE_NAME } from "./seo";

export function buildTreatmentApproachSeoPage (slug: "cbt" | "dbt"): {
  metadata: Metadata;
  Page: () => ReactElement;
}
{
  const path = treatmentApproachSeoPathBySlug[slug];
  const content = getTreatmentApproachPage(slug)!;
  return {
    metadata: buildPageMetadata({
      title: `${content.title} | ${SITE_NAME}`,
      description: content.description,
      path,
      ogType: "article",
    }),
    Page: function TreatmentApproachSeo ()
    {
      return <TopicPageShell content={content} />;
    },
  };
}

export function buildSubstanceAbuseSeoPage (slug: string): {
  metadata: Metadata;
  Page: () => ReactElement;
}
{
  const path = substanceAbuseSeoPathBySlug[slug];
  if (!path) {
    throw new Error(`Missing SEO path for substance slug: ${slug}`);
  }
  const content = getSubstanceAbusePage(slug)!;
  return {
    metadata: buildPageMetadata({
      title: `${content.title} | ${SITE_NAME}`,
      description: content.description,
      path,
      ogType: "article",
    }),
    Page: function SubstanceAbuseSeo ()
    {
      return <TopicPageShell content={content} />;
    },
  };
}
