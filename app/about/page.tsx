import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHero, CTABand, TrustStrip } from "@/components/subpage";
import { FounderBlock } from "@/components/home-cro";

export const metadata: Metadata = {
  title: "About | Awaaz Labs",
  description:
    "Awaaz Labs builds the AI front desk for appointment-based businesses. A Finova Solutions product, running in production on three continents.",
  alternates: { canonical: "/about" },
};

const FACTS = [
  { stat: "3", label: "continents running the platform in production" },
  { stat: "168", label: "hours a week the front desk covers" },
  { stat: "4", label: "languages, switched mid-conversation" },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: "About", href: "/about" }]} />
      <PageHero
        label="About"
        title="Awaaz means voice. We make sure yours answers."
        lede="Awaaz Labs exists because good businesses lose customers for the dumbest reason: nobody picked up. We build the front desk that never leaves the phone ringing."
      />
      <section className="mx-auto max-w-[760px] px-5 pb-14 lg:px-8">
        <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
          <p>
            We are a product of{" "}
            <a
              href="https://finovasolutions.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ink underline underline-offset-4"
            >
              Finova Solutions
            </a>
            , built by a team that has shipped conversational AI into
            production for a US medical billing operation, a UAE technology
            company, and a Government of Pakistan Ministry of IT subsidiary.
            Three continents, three very different phone lines, one lesson:
            the businesses that answer, win.
          </p>
          <p>
            We sell outcomes, not technology. No invented numbers, no borrowed
            logos, benchmarks always labeled as benchmarks. The first thing we
            offer any business is a free audit of what they are already
            losing, because the honest starting point is the leak, not the
            pitch.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6 border-y border-hairline py-8">
          {FACTS.map((f) => (
            <div key={f.label}>
              <p className="font-display text-5xl font-medium tracking-tight text-ink">
                {f.stat}
              </p>
              <p className="mt-2 text-sm text-ink-soft">{f.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-[15px] leading-relaxed text-ink-soft">
          The named deployments are on the{" "}
          <Link href="/customers" className="font-semibold text-ink underline underline-offset-4">
            customers page
          </Link>
          . The security posture is on{" "}
          <Link href="/security" className="font-semibold text-ink underline underline-offset-4">
            /security
          </Link>
          .
        </p>
      </section>
      <TrustStrip />
      <FounderBlock />
      <CTABand />
    </>
  );
}
