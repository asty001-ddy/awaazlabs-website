import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHero, CTABand } from "@/components/subpage";

/* Signed off by Advanzatech, Aug 2026. Figures from the approved proof list. */

export const metadata: Metadata = {
  title: "Advanzatech Case Study | Awaaz Labs",
  description:
    "How Advanzatech booked 70 meetings in month two with one Awaaz Labs deployment in the UAE.",
  alternates: { canonical: "/customers/advanzatech" },
};

export default function AdvanzatechPage() {
  return (
    <>
      <Breadcrumbs
        trail={[
          { label: "Customers", href: "/customers" },
          { label: "Advanzatech", href: "/customers/advanzatech" },
        ]}
      />
      <PageHero
        label="Customer story, United Arab Emirates"
        title="70 meetings booked in month two. One deployment."
        lede="Advanzatech put Awaaz Labs in front of its inbound and outbound motion. By the second month, the system had booked 70 meetings."
      />
      <section className="mx-auto max-w-[760px] px-5 pb-16 lg:px-8">
        <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
          <p>
            Advanzatech is a UAE technology company whose pipeline depends on
            conversations: inquiries answered fast, prospects qualified
            properly, and meetings landing on the right calendar.
          </p>
          <p>
            The deployment followed the standard Awaaz Labs playbook. Scripts
            built around Advanzatech's offer, wired into their calendar, piloted
            on live traffic side by side with the team, then scaled to full
            coverage.
          </p>
          <p>
            The result on the board by month two: 70 meetings booked by one
            deployment, with every conversation transcribed and scored by
            Qualicall so the team could see exactly what was working.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 border-y border-hairline py-8">
          <div>
            <p className="font-display text-5xl font-medium tracking-tight text-ink">70</p>
            <p className="mt-2 text-sm text-ink-soft">meetings booked in month two</p>
          </div>
          <div>
            <p className="font-display text-5xl font-medium tracking-tight text-ink">1</p>
            <p className="mt-2 text-sm text-ink-soft">deployment, live in weeks</p>
          </div>
        </div>
        <p className="mt-8 text-[15px] leading-relaxed text-ink-soft">
          Operating in the UAE? See what the same system does for{" "}
          <Link href="/industries/aesthetics/dubai" className="font-semibold text-ink underline underline-offset-4">
            Dubai clinics
          </Link>{" "}
          and{" "}
          <Link href="/industries/real-estate/dubai" className="font-semibold text-ink underline underline-offset-4">
            Dubai real estate
          </Link>
          .
        </p>
      </section>
      <CTABand />
    </>
  );
}
