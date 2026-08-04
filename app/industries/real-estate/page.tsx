import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHero, CTABand, TrustStrip, FaqBlock, RuledList, JsonLd } from "@/components/subpage";
import { ChatVignette, BenchmarkStat } from "@/components/vignettes";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Front Desk for Real Estate | Awaaz Labs",
  description:
    "Listing inquiries go cold in minutes. The Awaaz Labs AI front desk answers every buyer and tenant instantly, qualifies them, and books the viewing while your agents are on the road.",
  alternates: { canonical: "/industries/real-estate" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Front Desk for Real Estate",
  serviceType: "AI receptionist, lead qualification and viewing booking automation for real estate",
  provider: { "@type": "Organization", name: "Awaaz Labs" },
  audience: { "@type": "Audience", audienceType: "Real estate brokerages and agents" },
  url: `${SITE_URL}/industries/real-estate`,
};

const CAPABILITIES = [
  {
    title: "Speed to lead",
    body: "Portal leads and listing calls are answered in seconds, not hours. The first responder usually wins the viewing; the system makes that you, every time.",
  },
  {
    title: "Qualification before the viewing",
    body: "Budget, timeline, financing status and requirements are captured in the first conversation, so your agents walk into viewings with qualified buyers, not browsers.",
  },
  {
    title: "Viewing bookings",
    body: "Viewings land directly in the right agent's calendar with confirmations on the client's channel. Reschedules and reminders handled automatically.",
  },
  {
    title: "Agents stay in the field",
    body: "Your closers stop playing receptionist. Inquiries on live listings are handled while agents show property, and hot leads are routed to them instantly.",
  },
  {
    title: "Follow-up that never forgets",
    body: "The inquiry that did not book gets followed up. The viewing that did not offer gets checked in on. No lead dies of silence.",
  },
  {
    title: "Every conversation on record",
    body: "Transcribed and scored by Qualicall. You know what was promised, asked and quoted on every inquiry.",
  },
];

const FAQS = [
  {
    question: "Does it handle portal leads?",
    answer:
      "Yes. Inquiries from listing portals, your website, calls and WhatsApp all get the same instant answer, qualification and booking flow.",
  },
  {
    question: "How does it route hot leads to agents?",
    answer:
      "Qualified, high-intent leads are pushed to the right agent immediately with the full conversation context. Everything else is booked or nurtured automatically.",
  },
  {
    question: "Can it answer questions about specific listings?",
    answer:
      "It answers from your live listing data: price, size, availability and viewing slots. Negotiation stays with your agents.",
  },
  {
    question: "How fast can a brokerage go live?",
    answer:
      "Live in 2 to 3 weeks from signed agreement, including scripting, calendar and lead-routing setup, and a supervised pilot.",
  },
];

export default function RealEstatePage() {
  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs
        trail={[
          { label: "Industries", href: "/industries" },
          { label: "Real estate", href: "/industries/real-estate" },
        ]}
      />
      <PageHero
        label="Real estate"
        title="The buyer who called at 8pm has three other viewings by morning."
        lede="Listing inquiries go cold in minutes. The Awaaz Labs front desk answers every buyer and tenant instantly, qualifies them, and books the viewing while your agents are showing property."
      />

      <section className="mx-auto max-w-[1200px] px-5 pb-16 lg:px-8">
        <div className="grid items-center gap-10 border-y border-hairline py-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
            <BenchmarkStat
              prefix="23 to "
              to={42}
              label="of inbound calls to appointment-based businesses are missed"
            />
            <div>
              <p className="font-display text-6xl font-medium tracking-tight text-ink">
                Minutes
              </p>
              <p className="mt-3 text-base text-ink-soft">
                not hours: the window in which a listing lead is still yours
              </p>
              <p className="label mt-3 text-faint">Speed to lead</p>
            </div>
          </div>
          <ChatVignette
            label="8:04 PM, listing inquiry"
            messages={[
              { from: "customer", text: "Is the 2BR on the canal still available? What's the service charge?" },
              { from: "agent", text: "It is. Service charge details are in the listing pack I can send now. Viewing tomorrow 5:30 or Thursday 10:00?" },
              { from: "customer", text: "Tomorrow 5:30 please" },
            ]}
            chip="Viewing booked, agent notified"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 pb-20 lg:px-8">
        <p className="label mb-8 text-faint">What the front desk runs for you</p>
        <RuledList items={CAPABILITIES} />
      </section>

      <TrustStrip />
      <FaqBlock faqs={FAQS} title="Real estate questions" />

      <section className="mx-auto max-w-[1200px] px-5 pb-16 lg:px-8">
        <p className="text-[15px] leading-relaxed text-ink-soft">
          Operating in Dubai? See the{" "}
          <Link href="/industries/real-estate/dubai" className="font-semibold text-ink underline underline-offset-4">
            Dubai real estate page
          </Link>
          . Also serving{" "}
          <Link href="/industries/aesthetics" className="font-semibold text-ink underline underline-offset-4">
            aesthetics
          </Link>{" "}
          and other{" "}
          <Link href="/industries" className="font-semibold text-ink underline underline-offset-4">
            appointment-based industries
          </Link>
          .
        </p>
      </section>

      <CTABand
        title="How many listing inquiries died in your inbox this month?"
        body="The free leak audit finds out. We contact your brokerage like a buyer would, then send you the findings on one page."
      />
    </>
  );
}
