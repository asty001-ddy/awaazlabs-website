import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs, PageHero, CTABand } from "@/components/subpage";
import { POSTS } from "@/lib/posts";

export const metadata = pageMeta({
  title: "Guides and Blog | Awaaz Labs",
  description:
    "Practical guides on missed calls, speed to lead and front desk coverage for appointment-based businesses.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: "Blog", href: "/blog" }]} />
      <PageHero
        label="Guides"
        title="The numbers behind the front desk."
        lede="Short, useful reads on missed calls, response times and coverage math. No filler, no news."
      />
      <div className="mx-auto grid max-w-[1200px] gap-5 px-5 pb-20 md:grid-cols-2 lg:px-8">
        {POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="card card-lift group flex flex-col p-7"
          >
            <p className="label text-faint">
              {post.readMinutes} minute read
            </p>
            <h2 className="mt-4 flex-1 font-display text-2xl leading-snug font-medium tracking-tight text-ink">
              {post.title}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              {post.description}
            </p>
            <span className="label mt-5 flex items-center gap-2 text-signal">
              Read the guide
              <ArrowUpRight size={14} aria-hidden className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        ))}
      </div>
      <CTABand />
    </>
  );
}
