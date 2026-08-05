import type { Metadata } from "next";
import HealthScoreQuiz from "@/components/HealthScoreQuiz";
import { Breadcrumbs, PageHero, CTABand, JsonLd } from "@/components/subpage";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Front Desk Health Score (Free) | Awaaz Labs",
  description:
    "Eight questions, scored out of 100: how much of the week does your front desk actually cover? Instant diagnosis, no email required.",
  alternates: { canonical: "/tools/front-desk-health-score" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Front Desk Health Score",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: `${SITE_URL}/tools/front-desk-health-score`,
  offers: { "@type": "Offer", price: "0" },
  publisher: { "@type": "Organization", name: "Awaaz Labs" },
};

export default function HealthScorePage() {
  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs
        trail={[
          { label: "Tools", href: "/tools" },
          { label: "Front desk health score", href: "/tools/front-desk-health-score" },
        ]}
      />
      <PageHero
        label="Free diagnostic, no email gate"
        title="How healthy is your front desk, really?"
        lede="Eight honest questions about what happens to your calls, messages, no-shows and reviews. Scored out of 100, diagnosed instantly, on screen."
      />
      <div className="mx-auto max-w-[860px] px-5 pb-20 lg:px-8">
        <HealthScoreQuiz />
      </div>
      <CTABand
        title="The score is a symptom. The audit is the diagnosis."
        body="We contact your business like a customer would, at realistic hours, and send you the exact leaks on one page. Free, within 2 business days."
      />
    </>
  );
}
