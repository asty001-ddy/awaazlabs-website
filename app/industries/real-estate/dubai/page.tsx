import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHero, CTABand, TrustStrip, FaqBlock, JsonLd, PhotoBand } from "@/components/subpage";
import { ChatVignette } from "@/components/vignettes";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Front Desk for Dubai Real Estate | Awaaz Labs",
  description:
    "Dubai property moves at WhatsApp speed, across time zones and languages. The Awaaz Labs AI front desk answers every buyer and tenant inquiry 24/7 and books the viewing.",
  alternates: { canonical: "/industries/real-estate/dubai" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Awaaz Labs, AI Front Desk for Dubai Real Estate",
  description:
    "AI receptionist, lead qualification and viewing booking automation for real estate brokerages in Dubai.",
  areaServed: { "@type": "City", name: "Dubai" },
  url: `${SITE_URL}/industries/real-estate/dubai`,
  parentOrganization: { "@type": "Organization", name: "Awaaz Labs" },
};

/* City page: exactly five local blocks (money, rules, proof, place, contact). */
const LOCAL_BLOCKS = [
  {
    label: "Local money",
    title: "Off-plan launches do not wait for office hours",
    body: "Dubai property is a global market moving at launch speed. International buyers inquire from London, Riyadh and Singapore time zones, and the brokerage that answers first books the viewing. In a market where a single closed unit changes an agent's quarter, unanswered evenings are the most expensive line on nobody's report.",
  },
  {
    label: "Local rules",
    title: "Fits how Dubai brokerages actually run",
    body: "In-region data residency keeps client conversations in-country, with consent-aware call handling and a full audit trail. Listing facts come from your live inventory, and anything contractual routes straight to your licensed agents. Full compliance documentation is available to your DPO or compliance lead on request.",
  },
  {
    label: "Local proof",
    title: "Already live in the UAE",
    body: "Advanzatech, a UAE deployment, booked 70 meetings in month two with one deployment. The same system runs in production across three continents, including the United States and Pakistan.",
  },
  {
    label: "Local place",
    title: "Marina to Meydan, launch day to handover",
    body: "Whether the inquiry is a Marina apartment, a Business Bay office, a JVC townhouse or an off-plan launch in Meydan, the front desk answers, qualifies budget and timeline, and books the viewing into the right agent's calendar.",
  },
  {
    label: "Local contact",
    title: "WhatsApp-first, in the buyer's language",
    body: "Dubai buyers open in Arabic, switch to English, and expect an answer inside minutes on WhatsApp. The agent keeps up, mid-conversation, in Arabic including Khaleeji, English, Hindi and Urdu, and never leaves a voice note hanging overnight.",
  },
];

const FAQS = [
  {
    question: "Can it qualify international buyers overnight?",
    answer:
      "Yes. Budget, timeline, financing and requirements are captured whenever the inquiry arrives, and the viewing is booked before your competitors open.",
  },
  {
    question: "Does it work with my listing inventory?",
    answer:
      "It answers from your live listing data: price, size, availability, viewing slots. Negotiation and contracts stay with your agents.",
  },
  {
    question: "Which languages does it handle in Dubai?",
    answer:
      "Arabic including Khaleeji dialects, English, Hindi and Urdu, switching mid-conversation as the buyer does.",
  },
  {
    question: "How do Dubai brokerages start?",
    answer:
      "With the free leak audit. We inquire on your listings like buyers would, at realistic hours, then send you the findings.",
  },
];

export default function RealEstateDubaiPage() {
  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs
        trail={[
          { label: "Industries", href: "/industries" },
          { label: "Real estate", href: "/industries/real-estate" },
          { label: "Dubai", href: "/industries/real-estate/dubai" },
        ]}
      />
      <PageHero
        label="Real estate, Dubai"
        title="Dubai property sells across time zones. Your phone keeps office hours."
        lede="The Awaaz Labs AI front desk answers every listing inquiry around the clock, in the buyer's language, qualifies it, and books the viewing while your agents close."
      />

      <section className="mx-auto max-w-[1200px] px-5 pb-14 lg:px-8">
        <div className="mx-auto max-w-xl">
          <ChatVignette
            label="2:13 AM, international buyer"
            messages={[
              { from: "customer", dir: "rtl", text: "السلام عليكم، الشقة في المارينا لسا متوفرة؟" },
              { from: "agent", dir: "rtl", text: "وعليكم السلام، نعم متوفرة. أرسل لك التفاصيل الآن. تحب تحجز معاينة؟" },
              { from: "customer", text: "Yes, Friday morning if possible" },
            ]}
            chip="Viewing booked, Friday 10:00 AM"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 pb-20 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {LOCAL_BLOCKS.map((b) => (
            <article key={b.label} className="card card-lift p-7 md:last:col-span-2">
              <p className="label text-signal">{b.label}</p>
              <h2 className="mt-3 font-display text-2xl font-medium tracking-tight text-ink">
                {b.title}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {b.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <PhotoBand
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
        alt="Modern residential property exterior"
        caption="From launch day to handover, every inquiry answered"
      />
      <TrustStrip />
      <FaqBlock faqs={FAQS} title="Dubai questions" />

      <section className="mx-auto max-w-[1200px] px-5 pb-16 lg:px-8">
        <p className="text-[15px] leading-relaxed text-ink-soft">
          Everything on the{" "}
          <Link href="/industries/real-estate" className="font-semibold text-ink underline underline-offset-4">
            real estate industry page
          </Link>{" "}
          applies here. Also in Dubai:{" "}
          <Link href="/industries/aesthetics/dubai" className="font-semibold text-ink underline underline-offset-4">
            aesthetics
          </Link>
          .
        </p>
      </section>

      <CTABand
        title="How many buyers inquired while your office slept?"
        body="The free leak audit answers that with your brokerage's own numbers. Fulfilled globally, tested at Dubai hours."
      />
    </>
  );
}
