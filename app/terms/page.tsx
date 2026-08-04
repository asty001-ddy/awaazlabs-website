import type { Metadata } from "next";
import { Breadcrumbs, PageHero } from "@/components/subpage";

export const metadata: Metadata = {
  title: "Terms of Service | Awaaz Labs",
  description: "Terms governing the use of the Awaaz Labs website and tools.",
  alternates: { canonical: "/terms" },
};

const SECTIONS = [
  {
    h: "The website and tools",
    p: "This website, the free leak audit and the free tools are provided as-is for evaluation. Tool outputs, including the missed revenue calculator, are estimates based on the numbers you enter and industry benchmarks, not guarantees of results.",
  },
  {
    h: "The service",
    p: "The Awaaz Labs managed service is governed by a separate written agreement signed with your business, which covers scope, data processing, residency, service levels and fees. Nothing on this website constitutes an offer of specific pricing or performance.",
  },
  {
    h: "Acceptable use",
    p: "Do not misuse the site or tools: no scraping at scale, no attempting to access other users' data, no using the tools to harass or defraud.",
  },
  {
    h: "Intellectual property",
    p: "All content, branding and software on this site belong to Awaaz Labs and Finova Solutions. Benchmarks cited as industry data remain the property of their sources.",
  },
  {
    h: "Liability",
    p: "To the maximum extent permitted by law, Awaaz Labs is not liable for decisions made on the basis of free tools or audit findings. The paid service's liability terms live in the signed agreement.",
  },
  {
    h: "Contact",
    p: "Questions about these terms: hello@awaazlabs.io.",
  },
];

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: "Terms", href: "/terms" }]} />
      <PageHero label="Legal" title="Terms of service" lede="Last updated August 2026." />
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
