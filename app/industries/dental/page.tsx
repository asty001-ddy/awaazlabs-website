import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import { Breadcrumbs, PageHero, CTABand, TrustStrip, FaqBlock, RuledList, JsonLd, PhotoBand } from "@/components/subpage";
import { ChatVignette, BenchmarkStat } from "@/components/vignettes";
import { SITE_URL } from "@/lib/site";

export const metadata = pageMeta({
  title: "AI Front Desk for Dental Clinics | Awaaz Labs",
  description:
    "Empty chairs are the most expensive furniture in dentistry. The Awaaz Labs AI front desk answers every patient call 24/7, books appointments, works the recall list and recovers no-shows.",
  path: "/industries/dental",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Front Desk for Dental Clinics",
  serviceType: "AI receptionist, appointment booking and recall automation for dental practices",
  provider: { "@type": "Organization", name: "Awaaz Labs" },
  audience: { "@type": "Audience", audienceType: "Dental clinics and practices" },
  url: `${SITE_URL}/industries/dental`,
};

const CAPABILITIES = [
  {
    title: "Emergency call capture",
    body: "The patient in pain books wherever answers first. Every call is answered in seconds, the urgency and logistics are captured, and the appointment lands in the right chair. Clinical questions route to your team: that boundary is hard-coded, and in dentistry it matters double.",
  },
  {
    title: "Recall reactivation",
    body: "The recall list is revenue sitting in a spreadsheet. Overdue hygiene and check-up patients get a personal, well-timed message and a booked slot, automatically worked through.",
  },
  {
    title: "No-show recovery",
    body: "A no-show leaves a chair empty for an hour. Same-day callback, rebooking offer, and a reminder cadence that stops the next one.",
  },
  {
    title: "Appointment booking",
    body: "Hygiene, check-ups, follow-ups: booked into the right practitioner's diary with the right slot length, confirmed on the patient's channel.",
  },
  {
    title: "Insurance and admin questions",
    body: "Coverage and paperwork questions get answered from your approved policy list instead of sitting in voicemail. Anything requiring judgment goes to your front desk.",
  },
  {
    title: "Review growth",
    body: "Every visit ends with a thank-you and a review ask. Every time.",
  },
];

const FAQS = [
  {
    question: "How does it handle clinical questions?",
    answer:
      "It does not. Symptoms, diagnoses and treatment advice route straight to your clinical team. The agent handles logistics only: urgency capture, scheduling, reminders, admin. That boundary is hard-coded.",
  },
  {
    question: "Can it work our recall list?",
    answer:
      "Yes. Overdue patients get personal reactivation messages and a booked slot, worked through automatically instead of when the desk finds time.",
  },
  {
    question: "Does it book into our practice management system?",
    answer:
      "It books into your existing calendar and confirms on the patient's channel. Integration specifics are scoped honestly during onboarding.",
  },
  {
    question: "How fast can a practice go live?",
    answer:
      "Live in 2 to 3 weeks from signed agreement, including scripting, calendar wiring and a supervised pilot on real calls.",
  },
];

export default function DentalPage() {
  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs
        trail={[
          { label: "Industries", href: "/industries" },
          { label: "Dental", href: "/industries/dental" },
        ]}
      />
      <PageHero
        label="Dental clinics"
        title="An empty chair is the most expensive furniture you own."
        lede="Patients call at 7 AM in pain, at lunch between meetings, and after dinner about a bill. The Awaaz Labs front desk answers all of them, books the chair, works the recalls and chases the no-shows, around the clock."
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
            label="6:50 AM, phone"
            messages={[
              { from: "customer", text: "I've cracked a tooth, it hurts badly. Can anyone see me today?" },
              { from: "agent", text: "I'm sorry, that sounds painful. Dr. Hana has 8:15 or 11:30 today. Which works? Any swelling I should note for her?" },
              { from: "customer", text: "8:15 please, slight swelling" },
            ]}
            chip="Emergency slot booked, 8:15 AM, team notified"
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
            Omar cracks a molar on breakfast at 6:50 AM. He calls the nearest
            practice: rings out. He calls the second: voicemail. The third
            answers on the first ring, asks the three questions that matter,
            and books him for 8:15. Two practices had earlier openings. Only
            one had an open phone.
          </p>
        </div>
      </section>

      <PhotoBand
        src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95"
        alt="Modern dental treatment room"
        caption="Chairs earn when the phone answers"
      />
      <TrustStrip />
      <FaqBlock faqs={FAQS} title="Dental questions" />

      <section className="mx-auto max-w-[1200px] px-5 pb-16 lg:px-8">
        <p className="text-[15px] leading-relaxed text-ink-soft">
          Also serving{" "}
          <Link href="/industries/aesthetics" className="font-semibold text-ink underline underline-offset-4">
            aesthetics
          </Link>
          ,{" "}
          <Link href="/industries/home-services" className="font-semibold text-ink underline underline-offset-4">
            home services
          </Link>{" "}
          and other{" "}
          <Link href="/industries" className="font-semibold text-ink underline underline-offset-4">
            appointment-based industries
          </Link>
          .
        </p>
      </section>

      <CTABand
        title="How many patients called while your desk was busy?"
        body="The free leak audit finds out. We contact your practice like a patient would, at realistic hours, and send you the findings on one page."
      />
    </>
  );
}
