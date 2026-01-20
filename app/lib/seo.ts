import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://footprintsinthesand2recovery.com";

export const SITE_NAME = "Footprints";
export const LEGAL_NAME = "Footprints In The Sand 2 Recovery Center";

type PageMetaInput = {
  title: string;
  description: string;
  /** Canonical path, starting with `/` */
  path: string;
  ogType?: "website" | "article";
};

export function buildPageMetadata ({
  title,
  description,
  path,
  ogType = "website",
}: PageMetaInput): Metadata
{
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: ogType,
      locale: "en_US",
      siteName: SITE_NAME,
      title,
      description,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function absoluteUrl (path: string)
{
  return new URL(path, SITE_URL).toString();
}

