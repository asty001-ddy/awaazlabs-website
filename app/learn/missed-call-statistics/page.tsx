import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import { Breadcrumbs, PageHero, CTABand, FaqBlock, JsonLd } from "@/components/subpage";
import { SITE_URL } from "@/lib/site";

/*
 * Part D (Brief 5): the citation-engine reference page. Written like a
 * reference, not a pitch: one-sentence answer first, sourced benchmark
 * table, methodology note. No fabricated precision, no invented Awaaz
 * numbers.
 */

export const metadata = pageMeta({
  title: "Missed Call Statistics: How Many Calls Do Businesses Miss? | Awaaz Labs",
  description:
    "Businesses miss 23 to 42 percent of inbound calls, and 78 percent of after-hours callers never leave a voicemail. The benchmark statistics, sourced and explained.",
  path: "/learn/missed-call-statistics",
});

const STATS = [
  {
    stat: "23 to 42%",
    what: "of inbound calls to appointment-based businesses go unanswered",
    framing: "Industry benchmark across published call-handling studies. The spread reflects staffing levels, opening hours and simultaneous-call collisions.",
  },
  {
    stat: "78%",
    what: "of after-hours callers never leave a voicemail",
    framing: "Industry benchmark on caller behavior. Unanswered callers overwhelmingly move to the next search result rather than waiting for a callback.",
  },
  {
    stat: "40 to 60%",
    what: "of aesthetic clinic inquiries arrive outside opening hours",
    framing: "Industry benchmark for the aesthetics vertical, where research and booking happen in the evening.",
  },
  {
    stat: "~40 of 168",
    what: "weekly hours covered by one full-time receptionist",
    framing: "Arithmetic, not a study: a standard full-time schedule covers about 24 percent of the week your customers can call in.",
  },
];

const FAQS = [
  {
    question: "How many calls do businesses miss on average?",
    answer:
      "Industry benchmarks put missed inbound calls at 23 to 42 percent for appointment-based businesses, depending on staffing, hours and how often calls arrive simultaneously.",
  },
  {
    question: "Do missed callers call back?",
    answer:
      "Mostly no. 78 percent of after-hours callers never leave a voicemail, and the documented pattern is that they contact the next business in the search results instead.",
  },
  {
    question: "Which businesses miss the most calls?",
    answer:
      "Businesses whose inquiries arrive outside staffed hours. In aesthetics, 40 to 60 percent of inquiries arrive after hours, by industry benchmark.",
  },
  {
    question: "How do I measure my own missed-call rate?",
    answer:
      "Two free ways: estimate it with the missed call cost calculator, or have your channels mystery-shopped at realistic hours by the free leak audit, which reports your actual numbers.",
  },
];

export default function MissedCallStatsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Missed Call Statistics: How Many Calls Do Businesses Miss?",
          description:
            "Businesses miss 23 to 42 percent of inbound calls, and 78 percent of after-hours callers never leave a voicemail.",
          author: { "@type": "Organization", name: "Awaaz Labs" },
          mainEntityOfPage: `${SITE_URL}/learn/missed-call-statistics`,
        }}
      />
      <Breadcrumbs
        trail={[
          { label: "Learn", href: "/learn" },
          { label: "Missed call statistics", href: "/learn/missed-call-statistics" },
        ]}
      />
      <PageHero
        label="Reference"
        title="How many calls do businesses miss?"
        lede="Appointment-based businesses miss 23 to 42 percent of their inbound calls, by industry benchmark, and 78 percent of the callers they miss after hours never leave a voicemail."
      />

      <section className="mx-auto max-w-[1200px] px-5 pb-10 lg:px-8">
        <div className="card overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-[15px]">
            <thead>
              <tr className="border-b border-hairline bg-paper/60">
                <th className="label px-6 py-4 text-faint">Statistic</th>
                <th className="label px-6 py-4 text-faint">What it measures</th>
                <th className="label px-6 py-4 text-faint">Framing</th>
              </tr>
            </thead>
            <tbody>
              {STATS.map((row) => (
                <tr key={row.stat} className="border-b border-hairline align-top last:border-0">
                  <td className="px-6 py-5 font-display text-2xl font-medium tracking-tight whitespace-nowrap text-ink">
                    {row.stat}
                  </td>
                  <td className="px-6 py-5 font-medium text-ink">{row.what}</td>
                  <td className="px-6 py-5 text-ink-soft">{row.framing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 max-w-3xl text-[13px] leading-relaxed text-faint">
          Methodology: compiled from published industry studies of
          call-handling and caller behavior in appointment-based businesses;
          figures are cited as benchmark ranges, not Awaaz Labs results.
          Anonymized Awaaz Labs audit data will be added as the sample grows.
        </p>
      </section>

      <section className="mx-auto max-w-[760px] px-5 pb-16 lg:px-8">
        <h2 className="mt-6 font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
          Why the miss rate is structural, not a staffing failure
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          A front desk can hold one conversation at a time and work about 40
          of the week's 168 hours. Calls cluster at lunch, in the evening and
          on weekends, which is exactly when desks are unstaffed or
          overloaded. The result is a miss rate that stays in the benchmark
          range no matter how good the team is.
        </p>
        <h2 className="mt-10 font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
          Turning benchmarks into your own number
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          Benchmarks describe the market, not your business. The{" "}
          <Link href="/tools/missed-call-cost-calculator" className="font-semibold text-ink underline underline-offset-4">
            missed call cost calculator
          </Link>{" "}
          turns these ranges into a monthly estimate from your own volumes,
          and the{" "}
          <Link href="/leak-audit" className="font-semibold text-ink underline underline-offset-4">
            free leak audit
          </Link>{" "}
          replaces the estimate with measured results from your actual
          channels, within 2 business days.
        </p>
      </section>

      <FaqBlock faqs={FAQS} title="Missed call statistics FAQ" />
      <CTABand
        title="Benchmarks are the market. The audit is you."
        body="We contact your business like a customer would, log where inquiries die, and send you your own missed-call numbers on one page. Free."
      />
    </>
  );
}
