import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHero, CTABand, TrustStrip, FaqBlock, RuledList, JsonLd } from "@/components/subpage";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Front Desk for Aesthetics and Med Spas | Awaaz Labs",
  description:
    "Aesthetic clinics miss 40 to 60 percent of inquiries after hours. The Awaaz Labs AI front desk answers every call and message, books consultations and recovers no-shows, 24/7.",
  alternates: { canonical: "/industries/aesthetics" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Front Desk for Aesthetics and Med Spas",
  serviceType: "AI receptionist and appointment booking automation for aesthetic clinics",
  provider: { "@type": "Organization", name: "Awaaz Labs" },
  audience: { "@type": "Audience", audienceType: "Aesthetic clinics and med spas" },
  url: `${SITE_URL}/industries/aesthetics`,
};

const CAPABILITIES = [
  {
    title: "After-hours capture",
    body: "40 to 60 percent of aesthetic inquiries arrive outside opening hours, by industry benchmark. Every one gets answered in seconds, qualified, and booked into your calendar while your competitors' phones ring out.",
  },
  {
    title: "Consultation booking",
    body: "The agent knows your treatments, your practitioners and your availability. It books the right consultation length with the right person, and confirms instantly on the caller's channel.",
  },
  {
    title: "No-show recovery",
    body: "Empty consultation slots are the most expensive minutes in your week. No-shows get a same-day callback and a rebooking offer, automatically.",
  },
  {
    title: "Lapsed client reactivation",
    body: "Clients who have gone quiet get a well-timed, personal reengagement message. Treatment cycles make this vertical's win-back window predictable.",
  },
  {
    title: "Review growth",
    body: "After each visit, the thank-you goes out and the review gets asked for. Your rating compounds while you work.",
  },
  {
    title: "Full visibility",
    body: "Every conversation transcribed and scored by Qualicall. You see exactly what was said at 9pm on Saturday.",
  },
];

const FAQS = [
  {
    question: "How does the AI handle treatment questions?",
    answer:
      "It answers from your approved treatment list and pricing policy, qualifies interest, and books the consultation. Anything requiring clinical judgment is routed to your team. That boundary is hard-coded.",
  },
  {
    question: "Can it answer in my clients' language?",
    answer:
      "Yes. It answers in your customer's language and switches mid-conversation. The full supported list is honest and growing.",
  },
  {
    question: "Does it work with my booking system?",
    answer:
      "It books directly into your existing calendar and confirms on the client's channel. Setup is done for you during onboarding.",
  },
  {
    question: "How fast can a clinic go live?",
    answer:
      "Live in 2 to 3 weeks from signed agreement, including scripting, calendar integration and a supervised pilot on real traffic.",
  },
];

export default function AestheticsPage() {
  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs
        trail={[
          { label: "Industries", href: "/industries" },
          { label: "Aesthetics", href: "/industries/aesthetics" },
        ]}
      />
      <PageHero
        label="Aesthetics and med spas"
        title="The consult that books at 11pm is the one your competitor never saw."
        lede="Aesthetic clients research at night, message on WhatsApp, and book with whoever answers first. The Awaaz Labs front desk answers every inquiry in seconds, around the clock, and turns it into a consultation on your calendar."
      />

      <section className="mx-auto max-w-[1200px] px-5 pb-16 lg:px-8">
        <div className="grid gap-10 border-y border-hairline py-10 sm:grid-cols-2">
          <div>
            <p className="font-display text-6xl font-medium tracking-tight text-ink">
              40 to 60%
            </p>
            <p className="mt-3 text-base text-ink-soft">
              of aesthetic inquiries arrive after hours
            </p>
            <p className="label mt-3 text-faint">Industry benchmark</p>
          </div>
          <div>
            <p className="font-display text-6xl font-medium tracking-tight text-ink">
              78%
            </p>
            <p className="mt-3 text-base text-ink-soft">
              of after-hours callers never leave a voicemail
            </p>
            <p className="label mt-3 text-faint">Industry benchmark</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 pb-20 lg:px-8">
        <p className="label mb-8 text-faint">What the front desk runs for you</p>
        <RuledList items={CAPABILITIES} />
      </section>

      <TrustStrip />
      <FaqBlock faqs={FAQS} title="Aesthetics questions" />

      <section className="mx-auto max-w-[1200px] px-5 pb-16 lg:px-8">
        <p className="text-[15px] leading-relaxed text-ink-soft">
          Operating in Dubai? See the{" "}
          <Link href="/industries/aesthetics/dubai" className="font-semibold text-ink underline underline-offset-4">
            Dubai aesthetics page
          </Link>
          . Also serving{" "}
          <Link href="/industries/real-estate" className="font-semibold text-ink underline underline-offset-4">
            real estate
          </Link>{" "}
          and other{" "}
          <Link href="/industries" className="font-semibold text-ink underline underline-offset-4">
            appointment-based industries
          </Link>
          .
        </p>
      </section>

      <CTABand
        title="How many consults did your clinic miss last night?"
        body="The free leak audit finds out. We contact your clinic like a client would, at realistic hours, and send you the findings on one page."
      />
    </>
  );
}
