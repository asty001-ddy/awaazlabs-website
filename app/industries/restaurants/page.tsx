import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import { Breadcrumbs, PageHero, CTABand, TrustStrip, FaqBlock, RuledList, JsonLd, PhotoBand } from "@/components/subpage";
import { ChatVignette, BenchmarkStat } from "@/components/vignettes";
import { SITE_URL } from "@/lib/site";

export const metadata = pageMeta({
  title: "AI Front Desk for Restaurants | Awaaz Labs",
  description:
    "The table that books on the third ring of a Friday rush. The Awaaz Labs AI front desk captures reservations on phone and WhatsApp, confirms, reminds, and fills no-show tables.",
  path: "/industries/restaurants",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Front Desk for Restaurants",
  serviceType: "AI reservation capture, confirmation and waitlist automation for restaurants",
  provider: { "@type": "Organization", name: "Awaaz Labs" },
  audience: { "@type": "Audience", audienceType: "Restaurants" },
  url: `${SITE_URL}/industries/restaurants`,
};

const CAPABILITIES = [
  {
    title: "Reservations captured mid-rush",
    body: "Friday, 8 PM, every hand full: the phone still gets answered on the first ring. Party size, time, occasion, dietary notes, captured and confirmed while your team runs service.",
  },
  {
    title: "WhatsApp bookings",
    body: "The large-group inquiry that lands during prep gets an instant answer and a held table, not a seen-at-11-PM. Menus and timing questions answered from your approved details.",
  },
  {
    title: "Confirmations and reminders",
    body: "Peak-night no-shows are empty covers you cannot resell at 8:30. Confirmations and day-of reminders cut them; cancellations free the table in time to fill it.",
  },
  {
    title: "Waitlist callbacks",
    body: "When a table frees up, the waitlist gets called back automatically, in order, until a yes fills the seat.",
  },
  {
    title: "Special occasions handled",
    body: "The anniversary caller books whoever answers. Notes about cakes, allergies and window seats are captured and passed to the floor.",
  },
  {
    title: "Reviews after the visit",
    body: "The thank-you goes out, the review gets asked for, and your rating grows between services.",
  },
];

const FAQS = [
  {
    question: "Does it replace our reservation system?",
    answer:
      "No. It answers the phone and WhatsApp, and books into the reservation system you already run. The system stays; the missed calls stop.",
  },
  {
    question: "What happens during service when we cannot answer?",
    answer:
      "That is the point: it answers for you. Peak-hour calls are captured in full, and anything needing the manager is passed with context.",
  },
  {
    question: "Can it handle large-group and event inquiries?",
    answer:
      "Yes. Party size, date, budget conversations at category level, and special requirements are captured and routed to the right person with the details attached.",
  },
  {
    question: "How fast can a restaurant go live?",
    answer:
      "Live in 2 to 3 weeks from signed agreement, including scripting around your menus and hours, and a supervised pilot on real calls.",
  },
];

export default function RestaurantsPage() {
  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs
        trail={[
          { label: "Industries", href: "/industries" },
          { label: "Restaurants", href: "/industries/restaurants" },
        ]}
      />
      <PageHero
        label="Restaurants"
        title="The table that books on the third ring of a Friday rush."
        lede="Diners book the restaurant that answers. The Awaaz Labs front desk captures reservations on phone and WhatsApp through the busiest service, confirms and reminds, and fills the tables no-shows would have emptied."
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
            label="Friday 7:58 PM, phone"
            messages={[
              { from: "customer", text: "Hi, any chance of a table for 6 tonight around 9?" },
              { from: "agent", text: "We can do 9:15 on the terrace or 9:45 inside for 6. Any occasion or dietary notes I should pass to the kitchen?" },
              { from: "customer", text: "9:15 terrace, one vegan" },
            ]}
            chip="Table for 6 booked, 9:15 PM, notes passed to the floor"
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
            Layan is planning her father's sixtieth: a table for twelve,
            Saturday. She messages three restaurants at 4 PM, mid-prep. Two
            reply after close, apologizing. One answers in forty seconds,
            holds the private corner, and asks about the cake. Guess where
            twelve people had dinner.
          </p>
        </div>
      </section>

      <PhotoBand
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
        alt="Restaurant dining room set for service"
        caption="Full tables start with answered phones"
      />
      <TrustStrip />
      <FaqBlock faqs={FAQS} title="Restaurant questions" />

      <section className="mx-auto max-w-[1200px] px-5 pb-16 lg:px-8">
        <p className="text-[15px] leading-relaxed text-ink-soft">
          Also serving{" "}
          <Link href="/industries/dental" className="font-semibold text-ink underline underline-offset-4">
            dental
          </Link>
          ,{" "}
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
        title="How many tables did the phone lose last weekend?"
        body="The free leak audit finds out. We call and message your restaurant like a diner would, including mid-service, and send you the findings on one page."
      />
    </>
  );
}
