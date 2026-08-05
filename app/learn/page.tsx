import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs, PageHero, CTABand } from "@/components/subpage";
import { LEARN_PAGES } from "@/lib/learn";

export const metadata = pageMeta({
  title: "Learn: Plain Answers on AI Front Desks | Awaaz Labs",
  description:
    "Plain-language definitions and honest comparisons: AI receptionists, what they cost, and the metrics that decide who gets the booking.",
  path: "/learn",
});

export default function LearnHub() {
  return (
    <>
      <Breadcrumbs trail={[{ label: "Learn", href: "/learn" }]} />
      <PageHero
        label="Learn"
        title="Plain answers, no jargon."
        lede="Definitions and comparisons written to be quoted: first-sentence answers, honest trade-offs, your own numbers one click away."
      />
      <div className="mx-auto grid max-w-[1200px] gap-5 px-5 pb-20 md:grid-cols-2 lg:px-8">
        {LEARN_PAGES.map((p) => (
          <Link key={p.slug} href={`/learn/${p.slug}`} className="card card-lift group flex flex-col p-7">
            <p className="label text-faint">{p.term}</p>
            <h2 className="mt-3 flex-1 font-display text-2xl leading-snug font-medium tracking-tight text-ink">
              {p.title}
            </h2>
            <span className="label mt-5 flex items-center gap-2 text-signal">
              Read
              <ArrowUpRight size={14} aria-hidden className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        ))}
      </div>
      <CTABand />
    </>
  );
}
