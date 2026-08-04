import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, PageHero, CTABand, JsonLd } from "@/components/subpage";
import { POSTS, type Block } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Awaaz Labs`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

/** Renders body text with [label](href) inline links. */
function InlineText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!m) return <span key={i}>{part}</span>;
        return (
          <Link
            key={i}
            href={m[2]}
            className="font-semibold text-ink underline decoration-hairline underline-offset-4 transition-colors hover:decoration-ink"
          >
            {m[1]}
          </Link>
        );
      })}
    </>
  );
}

function BlockView({ block }: { block: Block }) {
  if (block.type === "h2") {
    return (
      <h2 className="mt-10 font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
        {block.text}
      </h2>
    );
  }
  if (block.type === "ul") {
    return (
      <ul className="mt-4 space-y-2.5">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 text-lg leading-relaxed text-ink-soft">
            <span aria-hidden className="mt-[13px] h-1.5 w-1.5 shrink-0 rounded-full bg-signal-bright" />
            <span>
              <InlineText text={item} />
            </span>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <p className="mt-4 text-lg leading-relaxed text-ink-soft">
      <InlineText text={block.text} />
    </p>
  );
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Awaaz Labs" },
    publisher: { "@type": "Organization", name: "Awaaz Labs" },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs
        trail={[
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />
      <PageHero
        label={`${post.readMinutes} minute read`}
        title={post.title}
        lede={post.description}
      />
      <article className="mx-auto max-w-[760px] px-5 pb-16 lg:px-8">
        {post.body.map((block, i) => (
          <BlockView key={i} block={block} />
        ))}
      </article>
      <aside className="mx-auto max-w-[1200px] border-t border-hairline px-5 py-12 lg:px-8">
        <p className="label text-faint">Keep reading</p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              href={`/blog/${r.slug}`}
              className="card card-lift p-6"
            >
              <p className="font-display text-lg leading-snug font-medium tracking-tight text-ink">
                {r.title}
              </p>
              <p className="label mt-3 text-faint">{r.readMinutes} minute read</p>
            </Link>
          ))}
        </div>
      </aside>
      <CTABand />
    </>
  );
}
