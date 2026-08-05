import type { Metadata } from "next";
import Link from "next/link";
import MissedRevenueCalculator from "@/components/MissedRevenueCalculator";
import { Breadcrumbs, PageHero, JsonLd, CTABand, RelatedGuides } from "@/components/subpage";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Missed Call Cost Calculator (Free) | Awaaz Labs",
  description:
    "Estimate what missed calls and unread messages cost your appointment-based business every month. On-screen result, no email required.",
  alternates: { canonical: "/tools/missed-call-cost-calculator" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Missed Call Cost Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: `${SITE_URL}/tools/missed-call-cost-calculator`,
  offers: { "@type": "Offer", price: "0" },
  publisher: { "@type": "Organization", name: "Awaaz Labs" },
};

export default function CalculatorPage() {
  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs
        trail={[
          { label: "Tools", href: "/tools" },
          { label: "Missed revenue calculator", href: "/tools/missed-call-cost-calculator" },
        ]}
      />
      <PageHero
        label="Free tool, no email gate"
        title="What are missed inquiries costing you every month?"
        lede="Put in your own numbers. The benchmark defaults come from industry data on appointment-based businesses. The result stays on your screen."
      />
      <div className="mx-auto max-w-[1200px] px-5 pb-16 lg:px-8">
        <MissedRevenueCalculator />
        <p className="mt-10 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          Estimates only. Your real leak depends on when inquiries arrive, how
          fast they are answered, and what happens after. Aesthetics clinics
          can see how this plays out on the{" "}
          <Link href="/industries/aesthetics" className="font-semibold text-ink underline underline-offset-4">
            aesthetics industry page
          </Link>
          .
        </p>
      </div>
      <RelatedGuides
        slugs={[
          "calculate-revenue-lost-to-missed-calls",
          "missed-call-statistics",
          "ai-receptionist-vs-hiring-receptionist",
        ]}
      />
      <CTABand />
    </>
  );
}
