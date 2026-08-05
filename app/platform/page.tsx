import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHero, CTABand, TrustStrip, RuledList, FaqBlock } from "@/components/subpage";
import ChannelOrchestra from "@/components/ChannelOrchestra";

export const metadata: Metadata = {
  title: "Platform: The Complete AI Front Desk | Awaaz Labs",
  description:
    "One system that owns the whole inbound journey: capture, qualify, book, remind, recover, review, QA. Every channel, 24/7, in Arabic, English, Hindi and Urdu.",
  alternates: { canonical: "/platform" },
};

const JOURNEY = [
  {
    title: "Capture",
    body: "Every call, WhatsApp, SMS, email and web form answered in seconds, 24/7. Three inquiries at once are three conversations.",
  },
  {
    title: "Qualify",
    body: "Intake handled in the conversation: who they are, what they need, when they can come. Hot leads route to your team instantly.",
  },
  {
    title: "Book",
    body: "Appointments land directly in your existing calendar with confirmations on the customer's channel. Reschedules handled.",
  },
  {
    title: "Remind and follow up",
    body: "Confirmations, reminders and email follow-ups go out on time, every time. Unanswered quotes get chased.",
  },
  {
    title: "Recover and reengage",
    body: "No-shows get a same-day callback. Missed inquiries get returned. Customers gone quiet get a well-timed reason to come back.",
  },
  {
    title: "Review",
    body: "Every visit ends with a thank-you and a Google review request.",
  },
  {
    title: "QA everything",
    body: "Every conversation transcribed, scored and flagged by Qualicall. Full audit trail, always answerable.",
  },
];

const FAQS = [
  {
    question: "Which languages does the platform support?",
    answer:
      "Arabic, including Khaleeji, Levantine and Egyptian dialects, plus English, Hindi and Urdu, with mid-conversation switching. The list grows as deployments demand it.",
  },
  {
    question: "Does it replace my front desk team?",
    answer:
      "No. It covers the hours and overflow they cannot: nights, weekends, simultaneous calls. Judgment calls route to humans, and that boundary is hard-coded.",
  },
  {
    question: "What does it integrate with?",
    answer:
      "Your existing calendar and booking flow, WhatsApp Business, and your phone lines. See the integrations page for specifics.",
  },
  {
    question: "How fast is deployment?",
    answer:
      "Live in 2 to 3 weeks from signed agreement: scripting around your services, calendar wiring, then a supervised pilot on real traffic.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: "Platform", href: "/platform" }]} />
      <PageHero
        label="Platform"
        title="One system that owns the whole inbound journey."
        lede="Point tools each hold one piece: a booking widget here, a reminder app there. Awaaz Labs runs the entire chain, from first ring to five-star review, so no lead falls between tools."
      />

      <section className="mx-auto max-w-[1200px] px-5 pb-14 lg:px-8">
        <div className="card mx-auto max-w-2xl overflow-hidden">
          <div className="chrome">
            <span className="chrome-dot" />
            <span className="chrome-dot" />
            <span className="chrome-dot" />
            <span className="label ml-2 text-faint">Every channel, one desk</span>
          </div>
          <div className="gridlines px-4 py-6">
            <ChannelOrchestra />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 pb-16 lg:px-8">
        <p className="label mb-8 text-faint">The journey it runs</p>
        <RuledList items={JOURNEY} />
      </section>

      <section className="mx-auto max-w-[1200px] px-5 pb-16 lg:px-8">
        <div className="card p-7">
          <p className="label text-faint">Languages, stated honestly</p>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Arabic including Khaleeji, Levantine and Egyptian dialects. English.
            Hindi. Urdu. Switched mid-conversation, the way your customers
            actually talk. We add languages when real deployments need them,
            not before.
          </p>
        </div>
      </section>

      <TrustStrip />
      <FaqBlock faqs={FAQS} title="Platform questions" />

      <section className="mx-auto max-w-[1200px] px-5 pb-16 lg:px-8">
        <p className="text-[15px] leading-relaxed text-ink-soft">
          See it applied to{" "}
          <Link href="/industries/aesthetics" className="font-semibold text-ink underline underline-offset-4">
            aesthetics
          </Link>{" "}
          and{" "}
          <Link href="/industries/real-estate" className="font-semibold text-ink underline underline-offset-4">
            real estate
          </Link>
          , or check{" "}
          <Link href="/integrations" className="font-semibold text-ink underline underline-offset-4">
            what it connects to
          </Link>
          .
        </p>
      </section>

      <CTABand />
    </>
  );
}
