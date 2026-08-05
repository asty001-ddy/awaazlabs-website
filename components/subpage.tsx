import Link from "next/link";
import { Radar, ShieldCheck } from "lucide-react";
import { LINKS, TRUST_CLAIMS, SITE_URL } from "@/lib/site";
import { MaskReveal, Reveal, Stagger, StaggerItem } from "./motion-primitives";

/**
 * Shared building blocks for every interior page. Server components:
 * no motion here, per the performance budget. Pages stay static.
 */

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export type Crumb = { label: string; href: string };

/** Breadcrumb trail mirroring the URL, with BreadcrumbList schema. */
export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ label: "Home", href: "/" }, ...trail].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${SITE_URL}${c.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-[1200px] px-5 lg:px-8">
      <JsonLd data={schema} />
      <ol className="flex flex-wrap items-center gap-2 pt-28 lg:pt-32">
        <li>
          <Link href="/" className="label text-faint transition-colors hover:text-ink">
            Home
          </Link>
        </li>
        {trail.map((c, i) => (
          <li key={c.href} className="flex items-center gap-2">
            <span aria-hidden className="text-faint">
              /
            </span>
            {i === trail.length - 1 ? (
              <span aria-current="page" className="label text-ink">
                {c.label}
              </span>
            ) : (
              <Link
                href={c.href}
                className="label text-faint transition-colors hover:text-ink"
              >
                {c.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  label,
  title,
  lede,
}: {
  label: string;
  title: React.ReactNode;
  lede?: string;
}) {
  /*
   * CSS entrances, not framer: PageHero is the LCP element on every
   * interior page and must paint before hydration.
   */
  return (
    <header className="mx-auto max-w-[1200px] px-5 pt-10 pb-14 lg:px-8 lg:pt-14 lg:pb-20">
      <p className="anim-fade-up label text-faint">{label}</p>
      <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.03] font-medium tracking-tight text-ink sm:text-5xl lg:text-6xl">
        <span className="anim-mask-wrap block">
          <span className="anim-mask-up block">{title}</span>
        </span>
      </h1>
      {lede && (
        <p className="anim-fade-up anim-d2 mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {lede}
        </p>
      )}
    </header>
  );
}

/** Sitewide CTA pair band. Primary: leak audit. Secondary: sales call. */
export function CTABand({
  title = "Find out what you're leaking. Free.",
  body = "We call and message your business like a customer, log where every inquiry dies, and send you the numbers on one page. No pitch.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="px-3 py-8 sm:px-5 lg:px-6">
      <div className="panel-void dots mx-auto max-w-[1360px] px-6 py-16 text-paper sm:px-12 lg:px-20 lg:py-20">
        <h2 className="max-w-3xl font-display text-4xl leading-[1.05] font-medium tracking-tight sm:text-5xl">
          <MaskReveal>{title}</MaskReveal>
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-void-muted">
          {body}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={LINKS.leakAudit}
            className="btn-shimmer btn-shimmer-dark label inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-paper py-3 pr-7 pl-3 text-ink transition-opacity duration-200 hover:opacity-90"
          >
            <span className="chip-amber" aria-hidden>
              <Radar size={15} strokeWidth={2.2} />
            </span>
            Get your free leak audit
          </Link>
          <Link
            href={LINKS.bookCall}
            className="label inline-flex cursor-pointer items-center justify-center rounded-full border border-void-line px-7 py-4 text-paper transition-colors duration-200 hover:bg-paper hover:text-ink"
          >
            Book a free sales call
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Universal trust strip: confirmed claims only. Substance on /security. */
export function TrustStrip() {
  return (
    <section
      aria-label="Security and compliance"
      className="border-y border-hairline"
    >
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-8 gap-y-3 px-5 py-6 lg:px-8">
        <ShieldCheck size={16} className="text-signal" aria-hidden />
        {TRUST_CLAIMS.map((claim) => (
          <span key={claim} className="label text-faint">
            {claim}
          </span>
        ))}
        <Link
          href="/security"
          className="label text-ink underline decoration-hairline underline-offset-4 transition-colors hover:decoration-ink"
        >
          Security details
        </Link>
      </div>
    </section>
  );
}

export type Faq = { question: string; answer: string };

/** FAQ block with FAQPage schema. Answers stay under 50 words (AEO). */
export function FaqBlock({ faqs, title = "Questions" }: { faqs: Faq[]; title?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section className="mx-auto max-w-[1200px] px-5 py-16 lg:px-8 lg:py-20">
      <JsonLd data={schema} />
      <p className="label text-faint">{title}</p>
      <div className="mt-8 grid gap-x-12 gap-y-10 md:grid-cols-2">
        {faqs.map((f) => (
          <div key={f.question}>
            <h3 className="text-lg font-semibold text-ink">{f.question}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              {f.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

import { POSTS } from "@/lib/posts";

/**
 * Guides that rank the tool (owner directive): each tool page carries
 * the posts targeting its query cluster, passing relevance and links
 * both ways between the tool and the blog.
 */
export function RelatedGuides({ slugs }: { slugs: string[] }) {
  const posts = POSTS.filter((p) => slugs.includes(p.slug));
  if (!posts.length) return null;

  return (
    <section className="mx-auto max-w-[1200px] border-t border-hairline px-5 py-14 lg:px-8">
      <p className="label text-faint">Guides for this tool</p>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="card card-lift flex flex-col p-6"
          >
            <p className="font-display text-lg leading-snug font-medium tracking-tight text-ink">
              {p.title}
            </p>
            <p className="mt-2 flex-1 text-[13px] leading-relaxed text-ink-soft">
              {p.description}
            </p>
            <p className="label mt-4 text-signal">{p.readMinutes} minute read</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

/**
 * Text-over-photo editorial block: display typography laid over the
 * image with a bottom-up ink scrim for guaranteed contrast. Below the
 * fold, lazy, fixed aspect to prevent CLS.
 */
export function PhotoOverlay({
  src,
  alt,
  label,
  children,
}: {
  src: string;
  alt: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-[1200px] px-5 pb-16 lg:px-8">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-hairline sm:aspect-[16/9] lg:aspect-[21/10]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${src}?auto=format&fit=crop&w=1600&q=70`}
          alt={alt}
          loading="lazy"
          decoding="async"
          width={1600}
          height={762}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Two-layer scrim: a base tint for long text plus a bottom-up
            gradient, so copy stays legible over bright image regions */}
        <div aria-hidden className="absolute inset-0 bg-void/30" />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-void/95 via-void/60 to-void/15"
        />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-12">
          <p className="label text-paper/70">{label}</p>
          <p className="mt-4 max-w-3xl font-display text-2xl leading-snug font-medium tracking-tight text-paper sm:text-3xl lg:text-4xl">
            {children}
          </p>
        </div>
      </div>
    </section>
  );
}

/**
 * Editorial photo band: full-width rounded image with a mono caption.
 * Always below the fold, always lazy, explicit aspect to prevent CLS.
 */
export function PhotoBand({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="mx-auto max-w-[1200px] px-5 pb-16 lg:px-8">
      <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border border-hairline">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${src}?auto=format&fit=crop&w=1600&q=70`}
          alt={alt}
          loading="lazy"
          decoding="async"
          width={1600}
          height={686}
          className="h-full w-full object-cover"
        />
      </div>
      <figcaption className="label mt-3 text-faint">{caption}</figcaption>
    </figure>
  );
}

/** Ruled feature list used across industry pages. */
export function RuledList({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <Stagger className="divide-y divide-hairline border-y border-hairline">
      {items.map((item, i) => (
        <StaggerItem
          key={item.title}
          className="grid gap-2 py-6 sm:grid-cols-[56px_1fr_1.2fr] sm:items-baseline sm:gap-6"
        >
          <span className="label text-faint">0{i + 1}</span>
          <h3 className="font-display text-xl font-medium tracking-tight text-ink">
            {item.title}
          </h3>
          <p className="text-[15px] leading-relaxed text-ink-soft">{item.body}</p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
