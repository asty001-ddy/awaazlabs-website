import type { Metadata } from "next";
import { Breadcrumbs, PageHero } from "@/components/subpage";

export const metadata: Metadata = {
  title: "Privacy Policy | Awaaz Labs",
  description: "How Awaaz Labs collects, uses and protects personal data.",
  alternates: { canonical: "/privacy" },
};

const SECTIONS = [
  {
    h: "What we collect",
    p: "When you request a leak audit, book a call or use our tools, we collect the details you provide: business name, contact details, industry and location. When Awaaz Labs operates as your front desk, we process conversation data on your behalf under your agreement.",
  },
  {
    h: "How we use it",
    p: "To fulfill what you asked for: delivering audits, scheduling calls, sending the communications you requested, and operating the service. We do not sell personal data.",
  },
  {
    h: "Where data lives",
    p: "Service data is stored with in-region residency as documented in your agreement. Website form submissions are processed by our operations tooling to fulfill your request.",
  },
  {
    h: "Analytics",
    p: "We use Google Analytics 4 to understand aggregate site usage: pages viewed, sources and conversion events. IP anonymization is enabled by default in GA4.",
  },
  {
    h: "Your rights",
    p: "You can request access to, correction of, or deletion of your personal data at any time by writing to hello@awaazlabs.io. We respond within 30 days.",
  },
  {
    h: "Contact",
    p: "Privacy questions: hello@awaazlabs.io. Awaaz Labs is a product of Finova Solutions.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: "Privacy", href: "/privacy" }]} />
      <PageHero label="Legal" title="Privacy policy" lede="Last updated August 2026." />
      <section className="mx-auto max-w-[760px] space-y-10 px-5 pb-24 lg:px-8">
        {SECTIONS.map((s) => (
          <div key={s.h}>
            <h2 className="text-lg font-semibold text-ink">{s.h}</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{s.p}</p>
          </div>
        ))}
      </section>
    </>
  );
}
