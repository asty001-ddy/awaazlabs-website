import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import { Check } from "lucide-react";
import { Breadcrumbs } from "@/components/subpage";
import { LINKS } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Audit Requested | Awaaz Labs",
    description: "Your free leak audit is in the queue.",
    path: "/leak-audit/thanks",
  }),
  robots: { index: false },
};

export default function ThanksPage() {
  return (
    <>
      <Breadcrumbs
        trail={[
          { label: "Free leak audit", href: "/leak-audit" },
          { label: "Requested", href: "/leak-audit/thanks" },
        ]}
      />
      <section className="mx-auto max-w-[760px] px-5 pt-10 pb-24 lg:px-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-signal text-white">
          <Check size={22} strokeWidth={3} aria-hidden />
        </span>
        <h1 className="mt-8 font-display text-4xl leading-[1.05] font-medium tracking-tight text-ink sm:text-5xl">
          Your audit is in the queue.
        </h1>
        <div className="mt-7 space-y-4 text-lg leading-relaxed text-ink-soft">
          <p>
            Here is what happens next. Over the coming days we will call and
            message your business at the hours your customers actually use,
            including after hours. Do not brief your team: the audit only works
            if it catches your front desk as it really runs.
          </p>
          <p>
            You will receive a confirmation email now, and your one-page
            findings report within 2 business days. It stays confidential:
            never shared with competitors.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href={LINKS.bookCall}
            className="label inline-flex cursor-pointer items-center justify-center rounded-full bg-ink px-7 py-4 text-paper transition-opacity hover:opacity-85"
          >
            Book a free sales call
          </Link>
          <Link
            href={LINKS.demo}
            className="label inline-flex cursor-pointer items-center justify-center rounded-full border border-ink px-7 py-4 text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Hear the AI take a call
          </Link>
        </div>
      </section>
    </>
  );
}
