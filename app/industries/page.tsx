import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs, PageHero, CTABand, TrustStrip } from "@/components/subpage";
import ChannelOrchestra from "@/components/ChannelOrchestra";
import { INDUSTRIES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries | Awaaz Labs",
  description:
    "The AI front desk for appointment-based businesses: aesthetics, dental, real estate, restaurants and home services.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: "Industries", href: "/industries" }]} />
      <PageHero
        label="Who it's for"
        title="Built for businesses that live and die by the calendar."
        lede="If your revenue arrives as booked appointments, the leak arrives as missed inquiries. The front desk adapts to each vertical's intake, booking flow and follow-up rhythm."
      />
      <div className="mx-auto max-w-[1200px] px-5 pb-20 lg:px-8">
        <ul className="divide-y divide-hairline border-y border-hairline">
          {INDUSTRIES.map((ind, i) => (
            <li key={ind.slug}>
              {ind.live ? (
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group grid gap-2 px-2 py-7 transition-colors hover:bg-white sm:grid-cols-[56px_1fr_1.2fr] sm:items-baseline sm:gap-6"
                >
                  <span className="label text-faint transition-colors group-hover:text-signal">
                    0{i + 1}
                  </span>
                  <h2 className="flex items-center gap-3 font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                    {ind.name}
                    <ArrowUpRight
                      size={20}
                      aria-hidden
                      className="text-signal opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </h2>
                  <p className="text-[15px] leading-relaxed text-ink-soft sm:text-right">
                    {ind.text}
                  </p>
                </Link>
              ) : (
                <div className="grid gap-2 px-2 py-7 sm:grid-cols-[56px_1fr_1.2fr] sm:items-baseline sm:gap-6">
                  <span className="label text-faint">0{i + 1}</span>
                  <h2 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                    {ind.name}
                    <span className="label ml-3 text-faint">Page coming</span>
                  </h2>
                  <p className="text-[15px] leading-relaxed text-ink-soft sm:text-right">
                    {ind.text}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="card mx-auto mt-12 max-w-2xl overflow-hidden">
          <div className="chrome">
            <span className="chrome-dot" />
            <span className="chrome-dot" />
            <span className="chrome-dot" />
            <span className="label ml-2 text-faint">
              Same system, every vertical
            </span>
          </div>
          <div className="gridlines px-4 py-6">
            <ChannelOrchestra />
          </div>
        </div>
        <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          Not on the list? If your business books appointments, the system
          fits. Start with a{" "}
          <Link href="/leak-audit" className="font-semibold text-ink underline underline-offset-4">
            free leak audit
          </Link>{" "}
          and we will map your channels regardless of vertical.
        </p>
      </div>
      <TrustStrip />
      <CTABand />
    </>
  );
}
