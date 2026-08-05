import type { Metadata } from "next";

/**
 * A2: per-page metadata in one call. Canonical, OpenGraph and Twitter
 * all derive from the same title/description/path, resolved against
 * layout metadataBase (SITE_URL), so og:title always equals the page
 * title and no two routes share a card.
 */
export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Awaaz Labs",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
