import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calculator, Bot } from "lucide-react";
import { Breadcrumbs, PageHero, CTABand } from "@/components/subpage";

export const metadata: Metadata = {
  title: "Free Tools | Awaaz Labs",
  description:
    "Free tools for appointment-based businesses: estimate your missed revenue, and soon, build a demo AI agent from your own website.",
  alternates: { canonical: "/tools" },
};

export default function ToolsPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: "Tools", href: "/tools" }]} />
      <PageHero
        label="Free tools"
        title="See the leak before you fix it."
        lede="Built for owners who want the numbers first. No email gates on results."
      />
      <div className="mx-auto grid max-w-[1200px] gap-5 px-5 pb-20 sm:grid-cols-2 lg:px-8">
        <Link
          href="/tools/missed-revenue-calculator"
          className="card card-lift group p-7"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-100 text-fuchsia-700">
            <Calculator size={18} aria-hidden />
          </span>
          <h2 className="mt-5 flex items-center gap-2 font-display text-2xl font-medium tracking-tight text-ink">
            Missed revenue calculator
            <ArrowUpRight size={18} className="text-signal opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
            Estimate what missed calls and unread messages cost you monthly.
            On-screen result, no email required.
          </p>
        </Link>
        <div className="card p-7 opacity-80">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
            <Bot size={18} aria-hidden />
          </span>
          <h2 className="mt-5 font-display text-2xl font-medium tracking-tight text-ink">
            Build your agent
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
            Paste your website, get a demo AI agent trained on it, and talk to
            it in your browser. Coming soon.
          </p>
          <p className="label mt-4 text-faint">In development</p>
        </div>
      </div>
      <CTABand />
    </>
  );
}
