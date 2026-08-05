import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import { Breadcrumbs, PageHero, CTABand, TrustStrip, FaqBlock, RuledList, JsonLd, PhotoBand } from "@/components/subpage";
import { ChatVignette, BenchmarkStat } from "@/components/vignettes";
import { SITE_URL } from "@/lib/site";

export const metadata = pageMeta({
  title: "AI Front Desk for Home Services | Awaaz Labs",
  description:
    "You cannot answer the phone from a roof. The Awaaz Labs AI front desk captures every job call, qualifies location and urgency, books the callout and chases the quote, 24/7.",
  path: "/industries/home-services",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Front Desk for Home Services",
  serviceType: "AI receptionist, job capture and quote follow-up automation for home services and trades",
  provider: { "@type": "Organization", name: "Awaaz Labs" },
  audience: { "@type": "Audience", audienceType: "Home services businesses and trades" },
  url: `${SITE_URL}/industries/home-services`,
};

const CAPABILITIES = [
  {
    title: "Job capture while you work",
    body: "You are on a roof, under a sink, driving between callouts. Every call still gets answered, the job gets captured, and the customer stops dialing your competitors.",
  },
  {
    title: "Qualification with photos",
    body: "Location, access, urgency, and photos of the problem over WhatsApp, collected before you commit a crew. Fewer wasted callouts, better-priced jobs.",
  },
  {
    title: "Scheduling into the calendar",
    body: "Jobs land in the right crew's diary with travel-aware slots and instant confirmation on the customer's channel.",
  },
  {
    title: "Quote follow-ups",
    body: "The quote that went quiet over the weekend gets chased on Monday, automatically, until it becomes a yes or a clear no.",
  },
  {
    title: "Repeat customer capture",
    body: "The customer who could not get through last time books the next company on Google. Now they get through, every time, and stay yours.",
  },
  {
    title: "Reviews after the job",
    body: "Job done, thank-you sent, review requested. Your rating compounds while you pack the van.",
  },
];

const FAQS = [
  {
    question: "Can it collect photos of the job?",
    answer:
      "Yes. Over WhatsApp it asks for photos and access details, so you can scope and price before sending anyone out.",
  },
  {
    question: "How does it handle emergencies?",
    answer:
      "Urgency is captured up front. Emergency jobs are routed to you or the on-call crew immediately with the full details; routine work gets booked into the calendar.",
  },
  {
    question: "Does it work for multi-crew businesses?",
    answer:
      "Yes. Each crew keeps its own diary and service area; jobs are booked into the right one with travel-aware slots.",
  },
  {
    question: "How fast can a trades business go live?",
    answer:
      "Live in 2 to 3 weeks from signed agreement, including scripting around your services and coverage area, and a supervised pilot on real calls.",
  },
];

export default function HomeServicesPage() {
  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs
        trail={[
          { label: "Industries", href: "/industries" },
          { label: "Home services", href: "/industries/home-services" },
        ]}
      />
      <PageHero
        label="Home services and trades"
        title="You cannot answer the phone from a roof."
        lede="Every missed call is a job your competitor quoted first. The Awaaz Labs front desk answers while you work, qualifies the job with photos, books the callout and chases the quotes that went quiet."
      />

      <section className="mx-auto max-w-[1200px] px-5 pb-16 lg:px-8">
        <div className="grid items-center gap-10 border-y border-hairline py-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
            <BenchmarkStat
              prefix="23 to "
              to={42}
              label="of inbound calls to appointment-based businesses are missed"
            />
            <BenchmarkStat
              to={78}
              label="of after-hours callers never leave a voicemail"
            />
            <p className="text-[13px] text-faint">
              Sources on the{" "}
              <Link href="/learn/missed-call-statistics" className="font-semibold text-ink underline underline-offset-4">
                missed call statistics
              </Link>{" "}
              reference page.
            </p>
          </div>
          <ChatVignette
            label="2:12 PM, WhatsApp"
            messages={[
              { from: "customer", text: "Water heater burst, there's water everywhere. How fast can someone come?" },
              { from: "agent", text: "That's urgent. Send me a photo and your area, and shut the inlet valve if you can reach it. I can have a crew there between 3:00 and 3:30." },
              { from: "customer", text: "Photo sent. 3:00 please, hurry" },
            ]}
            chip="Emergency callout booked, crew notified with photos"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 pb-20 lg:px-8">
        <p className="label mb-8 text-faint">What the front desk runs for you</p>
        <RuledList items={CAPABILITIES} />
      </section>

      {/* Narrative block */}
      <section className="mx-auto max-w-[1200px] px-5 pb-16 lg:px-8">
        <div className="panel-void dots px-6 py-12 text-paper sm:px-12">
          <p className="label text-void-muted">How it actually goes</p>
          <p className="mt-5 max-w-3xl font-display text-2xl leading-relaxed font-medium tracking-tight sm:text-3xl">
            Marcus is halfway up a ladder when his phone rings. It rings out.
            The caller, a landlord with a burst heater and three more
            properties, dials the next company on the list. They answer,
            collect photos, book the callout. Marcus climbs down to a missed
            call and a customer he will never know existed.
          </p>
        </div>
      </section>

      <PhotoBand
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
        alt="Tradesperson working on site"
        caption="The crew works. The phone still answers."
      />
      <TrustStrip />
      <FaqBlock faqs={FAQS} title="Home services questions" />

      <section className="mx-auto max-w-[1200px] px-5 pb-16 lg:px-8">
        <p className="text-[15px] leading-relaxed text-ink-soft">
          Also serving{" "}
          <Link href="/industries/restaurants" className="font-semibold text-ink underline underline-offset-4">
            restaurants
          </Link>
          ,{" "}
          <Link href="/industries/dental" className="font-semibold text-ink underline underline-offset-4">
            dental
          </Link>{" "}
          and other{" "}
          <Link href="/industries" className="font-semibold text-ink underline underline-offset-4">
            appointment-based industries
          </Link>
          .
        </p>
      </section>

      <CTABand
        title="How many jobs rang out while you were on one?"
        body="The free leak audit finds out. We call your business like a customer would, including while you are on the tools, and send you the findings on one page."
      />
    </>
  );
}
