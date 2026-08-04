import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHero, CTABand } from "@/components/subpage";

/* Signed off by Sirius Solutions Global, Aug 2026. Figures from the approved proof list. */

export const metadata: Metadata = {
  title: "Sirius Solutions Global Case Study | Awaaz Labs",
  description:
    "Sirius Solutions Global runs Awaaz Labs live in production in the United States, handling around 50 calls a day.",
  alternates: { canonical: "/customers/sirius-solutions" },
};

export default function SiriusPage() {
  return (
    <>
      <Breadcrumbs
        trail={[
          { label: "Customers", href: "/customers" },
          { label: "Sirius Solutions Global", href: "/customers/sirius-solutions" },
        ]}
      />
      <PageHero
        label="Customer story, United States"
        title="Around 50 calls a day, live in production."
        lede="Sirius Solutions Global, a US medical billing company, runs its call operation on Awaaz Labs, in production, every working day."
      />
      <section className="mx-auto max-w-[760px] px-5 pb-16 lg:px-8">
        <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
          <p>
            Medical billing is a volume business built on phone calls that must
            be handled correctly, documented completely, and followed up
            reliably. That is precisely the work fronts desks drop when volume
            spikes.
          </p>
          <p>
            Sirius Solutions Global deployed Awaaz Labs into that workflow. The
            system now places and handles around 50 calls a day in production,
            with every conversation transcribed and scored by Qualicall for
            compliance-grade visibility.
          </p>
          <p>
            A US deployment matters for one more reason: it anchors the three
            continents the platform runs on, alongside the United Arab Emirates
            and Pakistan.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 border-y border-hairline py-8">
          <div>
            <p className="font-display text-5xl font-medium tracking-tight text-ink">~50</p>
            <p className="mt-2 text-sm text-ink-soft">calls a day in production</p>
          </div>
          <div>
            <p className="font-display text-5xl font-medium tracking-tight text-ink">3</p>
            <p className="mt-2 text-sm text-ink-soft">continents running the platform</p>
          </div>
        </div>
        <p className="mt-8 text-[15px] leading-relaxed text-ink-soft">
          Curious how call quality stays visible at that volume? The{" "}
          <Link href="/security" className="font-semibold text-ink underline underline-offset-4">
            security page
          </Link>{" "}
          covers transcription, scoring and the audit trail.
        </p>
      </section>
      <CTABand />
    </>
  );
}
