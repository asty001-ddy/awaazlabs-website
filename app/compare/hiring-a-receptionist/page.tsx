import type { Metadata } from "next";
import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { Radar } from "lucide-react";
import { Breadcrumbs, PageHero, FaqBlock } from "@/components/subpage";

export const metadata: Metadata = {
  title: "Awaaz Labs vs Hiring a Receptionist | Awaaz Labs",
  description:
    "A receptionist covers about 40 of 168 weekly hours, one call at a time. The honest comparison, and why the answer is usually both.",
  alternates: { canonical: "/compare/hiring-a-receptionist" },
};

/* Per master-build-v5: compare pages link only /book-a-call and /leak-audit */

const ROWS: { label: string; human: string; awaaz: string }[] = [
  { label: "Hours covered per week", human: "~40 of 168", awaaz: "All 168" },
  { label: "Simultaneous conversations", human: "One", awaaz: "Every one" },
  { label: "Languages", human: "One or two", awaaz: "Arabic, English, Hindi, Urdu, switched mid-conversation" },
  { label: "Follow-ups and reminders", human: "When time allows", awaaz: "Every time, automatically" },
  { label: "No-show recovery", human: "Rarely happens", awaaz: "Same-day, systematic" },
  { label: "Record of every conversation", human: "Memory and notes", awaaz: "Transcribed and scored" },
  { label: "In-person warmth and judgment", human: "Yes", awaaz: "Routes to your team" },
  { label: "Cost as volume grows", human: "Scales linearly", awaaz: "Scales with usage" },
];

const FAQS = [
  {
    question: "Should I hire a receptionist or use an AI front desk?",
    answer:
      "Usually both. Keep humans on in-person hospitality and judgment; put coverage, overflow and follow-through on software. The comparison is coverage, not replacement.",
  },
  {
    question: "What does a receptionist cost compared to this?",
    answer:
      "A fully loaded salary buys about 40 weekly hours, one call at a time. We price per market on a call, after your volume and channels are known.",
  },
  {
    question: "What can a receptionist do that the AI cannot?",
    answer:
      "Greet someone at the door, read a difficult room, exercise professional judgment. That work stays human; the AI hands it over by design.",
  },
  {
    question: "How do I decide with real numbers?",
    answer:
      "Measure your leak first. The free leak audit finds what your current setup misses, within 2 business days, and you compare that against a salary.",
  },
];

export default function ComparePage() {
  return (
    <>
      <Breadcrumbs
        trail={[
          { label: "Compare", href: "/compare/hiring-a-receptionist" },
          { label: "Hiring a receptionist", href: "/compare/hiring-a-receptionist" },
        ]}
      />
      <PageHero
        label="Honest comparison"
        title="A receptionist covers 40 hours. Your customers use all 168."
        lede="This is not a replacement pitch. Humans win on judgment and hospitality. Software wins on coverage, consistency and memory. Here is the whole picture."
      />
      <section className="mx-auto max-w-[1200px] px-5 pb-16 lg:px-8">
        <div className="card overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-[15px]">
            <thead>
              <tr className="border-b border-hairline bg-paper/60">
                <th className="px-6 py-4 font-normal text-faint">&nbsp;</th>
                <th className="label px-6 py-4 text-faint">Human receptionist</th>
                <th className="label px-6 py-4 text-ink">Awaaz Labs</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label} className="border-b border-hairline last:border-0 hover:bg-paper/50">
                  <td className="px-6 py-5 font-medium text-ink">{row.label}</td>
                  <td className="px-6 py-5 text-ink-soft">
                    <span className="inline-flex items-center gap-2">
                      <Minus size={14} className="shrink-0 text-faint" aria-hidden />
                      {row.human}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-ink">
                    <span className="inline-flex items-center gap-2 font-medium">
                      <Check size={15} className="shrink-0 text-signal" aria-hidden />
                      {row.awaaz}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          The eighth row is the honest one: humans are better at being human.
          The system is built to hand judgment calls to your team, not to fake
          its way through them.
        </p>
      </section>
      <FaqBlock faqs={FAQS} title="Deciding" />
      <section className="px-3 py-8 sm:px-5 lg:px-6">
        <div className="panel-void dots mx-auto max-w-[1360px] px-6 py-16 text-paper sm:px-12 lg:px-20">
          <h2 className="max-w-3xl font-display text-4xl leading-[1.05] font-medium tracking-tight sm:text-5xl">
            Decide with your numbers, not ours.
          </h2>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/leak-audit"
              className="btn-shimmer btn-shimmer-dark label inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-paper py-3 pr-7 pl-3 text-ink transition-opacity hover:opacity-90"
            >
              <span className="chip-amber" aria-hidden>
                <Radar size={15} strokeWidth={2.2} />
              </span>
              Get your free leak audit
            </Link>
            <Link
              href="/book-a-call"
              className="label inline-flex cursor-pointer items-center justify-center rounded-full border border-void-line px-7 py-4 text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              Book a free sales call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
