import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs, PageHero, CTABand } from "@/components/subpage";
import { CASE_STUDIES_LIVE } from "@/lib/flags";

export const metadata = pageMeta({
  title: "Customers | Awaaz Labs",
  description:
    "Deployed in production across three continents: the United States, the United Arab Emirates and Pakistan.",
  path: "/customers",
});

const CASES = [
  {
    slug: "advanzatech",
    company: "Advanzatech",
    region: "United Arab Emirates",
    stat: "70",
    statLabel: "meetings booked in month two, one deployment",
  },
  {
    slug: "sirius-solutions",
    company: "Sirius Solutions Global",
    region: "United States",
    stat: "~50",
    statLabel: "calls a day, live in production",
  },
];

export default function CustomersPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: "Customers", href: "/customers" }]} />
      <PageHero
        label="Proof"
        title="Running in production on three continents."
        lede="Not a pitch deck. Named deployments in the United States, the United Arab Emirates and Pakistan, with more converting from pilots."
      />
      <div className="mx-auto max-w-[1200px] px-5 pb-14 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {CASES.map((c) =>
            CASE_STUDIES_LIVE ? (
              <Link
                key={c.slug}
                href={`/customers/${c.slug}`}
                className="card card-lift group p-8"
              >
                <p className="label text-faint">{c.region}</p>
                <p className="mt-5 font-display text-6xl font-medium tracking-tight text-ink">
                  {c.stat}
                </p>
                <p className="mt-2 text-[15px] text-ink-soft">{c.statLabel}</p>
                <p className="mt-6 flex items-center gap-2 font-display text-2xl font-medium tracking-tight text-ink">
                  {c.company}
                  <ArrowUpRight
                    size={18}
                    aria-hidden
                    className="text-signal opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </p>
              </Link>
            ) : (
              <div key={c.slug} className="card p-8">
                <p className="label text-faint">{c.region}</p>
                <p className="mt-5 font-display text-6xl font-medium tracking-tight text-ink">
                  {c.stat}
                </p>
                <p className="mt-2 text-[15px] text-ink-soft">{c.statLabel}</p>
                <p className="mt-6 font-display text-2xl font-medium tracking-tight text-ink">
                  {c.company}
                </p>
                <p className="label mt-3 text-faint">Case study coming soon</p>
              </div>
            ),
          )}
        </div>
        <div className="card mt-5 p-8">
          <p className="label text-faint">Pakistan</p>
          <p className="mt-4 font-display text-2xl font-medium tracking-tight text-ink">
            Telecom Foundation
          </p>
          <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            A subsidiary of the Government of Pakistan's Ministry of IT, running
            Urdu inbound customer service in production on the Awaaz Labs
            platform. Case study in progress.
          </p>
        </div>
      </div>
      <CTABand
        title="The next case study could be your calendar."
        body="Every deployment starts the same way: a free leak audit that shows exactly what your front desk is missing."
      />
    </>
  );
}
