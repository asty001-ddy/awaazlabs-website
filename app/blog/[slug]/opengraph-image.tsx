import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { POSTS } from "@/lib/posts";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Awaaz Labs guide";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  return ogImage(
    post?.title ?? "Guides and blog",
    post ? `${post.readMinutes} minute read, awaazlabs.io/blog` : "awaazlabs.io/blog",
  );
}
