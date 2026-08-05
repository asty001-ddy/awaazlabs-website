import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, PageHero, CTABand, JsonLd } from "@/components/subpage";
import { LEARN_PAGES } from "@/lib/learn";
import type { Block } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return LEARN_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = LEARN_PAGES.find((p) => p.slug === slug);
  if (!page) return {};
  return pageMeta({
    title: `${page.title} | Awaaz Labs`,
    description: page.description,
    path: `/learn/${page.slug}`,
  });
}

function InlineText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!m) return <span key={i}>{part}</span>;
        return (
          <Link key={i} href={m[2]} className="font-semibold text-ink underline decoration-hairline underline-offset-4 transition-colors hover:decoration-ink">
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
            <span><InlineText text={item} /></span>
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

export default async function LearnPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = LEARN_PAGES.find((p) => p.slug === slug);
  if (!page) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.body
      .map((b, i) => ({ b, next: page.body[i + 1] }))
      .filter((x) => x.b.type === "h2" && x.next?.type === "p")
      .map((x) => ({
        "@type": "Question",
        name: (x.b as { text: string }).text,
        acceptedAnswer: {
          "@type": "Answer",
          text: (x.next as { text: string }).text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").slice(0, 300),
        },
      })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: page.title,
          description: page.description,
          author: { "@type": "Organization", name: "Awaaz Labs" },
          mainEntityOfPage: `${SITE_URL}/learn/${page.slug}`,
        }}
      />
      <Breadcrumbs
        trail={[
          { label: "Learn", href: "/learn" },
          { label: page.term, href: `/learn/${page.slug}` },
        ]}
      />
      <PageHero label="Learn" title={page.title} lede={page.description} />
      <article className="mx-auto max-w-[760px] px-5 pb-20 lg:px-8">
        {page.body.map((block, i) => (
          <BlockView key={i} block={block} />
        ))}
      </article>
      <CTABand />
    </>
  );
}
