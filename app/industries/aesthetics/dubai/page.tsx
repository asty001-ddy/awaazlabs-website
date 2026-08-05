import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHero, CTABand, TrustStrip, FaqBlock, JsonLd } from "@/components/subpage";
import { ChatVignette } from "@/components/vignettes";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Front Desk for Dubai Aesthetics Clinics | Awaaz Labs",
  description:
    "Dubai aesthetic clinics compete on response speed across WhatsApp, calls and DMs, in Arabic and English. The Awaaz Labs AI front desk answers every inquiry 24/7 and books the consultation.",
  alternates: { canonical: "/industries/aesthetics/dubai" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Awaaz Labs, AI Front Desk for Dubai Aesthetics Clinics",
  description:
    "AI receptionist and appointment booking automation for aesthetic clinics and med spas in Dubai.",
  areaServed: { "@type": "City", name: "Dubai" },
  url: `${SITE_URL}/industries/aesthetics/dubai`,
  parentOrganization: { "@type": "Organization", name: "Awaaz Labs" },
};

/* City page: exactly five local blocks (money, rules, proof, place, contact). */
const LOCAL_BLOCKS = [
  {
    label: "Local money",
    title: "High-ticket consultations, higher-ticket silence",
    body: "Dubai aesthetics is a premium, packed market. A single missed consultation inquiry is not a small leak here: treatment plans are high-value, clients comparison-shop across three clinics in one evening, and the clinic that answers first usually wins the plan. Peak season demand makes after-hours coverage the difference between a full January and an empty one.",
  },
  {
    label: "Local rules",
    title: "Built for how Dubai clinics operate",
    body: "In-region data residency keeps client conversations in-country. Call handling follows consent-aware recording practice, and anything clinical routes to your licensed practitioners. We can share full compliance documentation with your medical director or DPO on request. The agent works your clinic's real hours: late evenings, weekends, and Ramadan schedules included.",
  },
  {
    label: "Local proof",
    title: "Already live in the UAE",
    body: "Advanzatech, a UAE deployment, booked 70 meetings in month two with one deployment. The same system runs in production across three continents, including the United States and Pakistan.",
  },
  {
    label: "Local place",
    title: "From DHCC to the Palm",
    body: "Whether your clinic sits in Dubai Healthcare City, Jumeirah, Downtown, Business Bay or the Palm, your callers come from everywhere: residents, tourists on treatment trips, and clients booking ahead of events. The front desk catches all of them, whatever time zone their evening falls in.",
  },
  {
    label: "Local contact",
    title: "WhatsApp-first, Arabic and English, switched mid-message",
    body: "Dubai clients open with WhatsApp voice notes in Khaleeji Arabic and finish in English. The agent follows, mid-conversation, without dropping the thread, and books the consultation in the same chat.",
  },
];

const FAQS = [
  {
    question: "Does the agent speak Gulf Arabic?",
    answer:
      "Yes. Arabic including Khaleeji, Levantine and Egyptian dialects, plus English, Hindi and Urdu, with mid-conversation switching.",
  },
  {
    question: "Where is my clinic's data stored?",
    answer:
      "In-region. Data residency, encryption and audit trail details are on the security page.",
  },
  {
    question: "Can it handle WhatsApp voice notes?",
    answer:
      "Yes. Voice notes, texts and calls are all answered, in the language the client uses, and turned into booked consultations.",
  },
  {
    question: "Who do Dubai clinics talk to first?",
    answer:
      "Start with the free leak audit. We mystery-shop your clinic across WhatsApp and phone at Dubai hours, then send the findings.",
  },
];

export default function AestheticsDubaiPage() {
  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs
        trail={[
          { label: "Industries", href: "/industries" },
          { label: "Aesthetics", href: "/industries/aesthetics" },
          { label: "Dubai", href: "/industries/aesthetics/dubai" },
        ]}
      />
      <PageHero
        label="Aesthetics and med spas, Dubai"
        title="Dubai books beauty at midnight. Your front desk left at six."
        lede="The Awaaz Labs AI front desk answers your clinic's calls, WhatsApp and DMs around the clock, in Arabic and English, and turns them into consultations on your calendar."
      />

      <section className="mx-auto max-w-[1200px] px-5 pb-14 lg:px-8">
        <div className="mx-auto max-w-xl">
          <ChatVignette
            label="11:52 PM, WhatsApp"
            messages={[
              { from: "customer", dir: "rtl", text: "مساء الخير، عندكم موعد استشارة هالأسبوع؟" },
              { from: "agent", dir: "rtl", text: "أهلا فيك، أكيد. الخميس ٦:٣٠ أو السبت ٢:٠٠، أي وقت يناسبك؟" },
              { from: "customer", text: "Saturday 2pm works, thanks" },
            ]}
            chip="Consultation booked, Saturday 2:00 PM"
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

      <TrustStrip />
      <FaqBlock faqs={FAQS} title="Dubai questions" />

      <section className="mx-auto max-w-[1200px] px-5 pb-16 lg:px-8">
        <p className="text-[15px] leading-relaxed text-ink-soft">
          Everything on the{" "}
          <Link href="/industries/aesthetics" className="font-semibold text-ink underline underline-offset-4">
            aesthetics industry page
          </Link>{" "}
          applies here. Also in Dubai:{" "}
          <Link href="/industries/real-estate/dubai" className="font-semibold text-ink underline underline-offset-4">
            real estate
          </Link>
          .
        </p>
      </section>

      <CTABand
        title="How many Dubai clients did you miss this week?"
        body="The free leak audit answers that with your clinic's own numbers. Fulfilled globally, tested at Dubai hours."
      />
    </>
  );
}
