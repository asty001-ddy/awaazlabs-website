import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import { Breadcrumbs, PageHero, CTABand } from "@/components/subpage";

export const metadata = pageMeta({
  title: "Partners | Awaaz Labs",
  description:
    "Refer, implement or build alongside Awaaz Labs. Partnerships for agencies, consultants and technology teams serving appointment-based businesses.",
  path: "/partners",
});

const TRACKS = [
  {
    title: "Referral partners",
    body: "Agencies, consultants and community operators who know appointment-based businesses that leak. You introduce; we audit, deploy and service. Terms agreed per partner, in writing, before the first referral.",
  },
  {
    title: "Implementation partners",
    body: "Teams that manage marketing or operations for clinics, brokerages and service businesses, and want the front desk inside their offer. We handle the deployment; you keep the client relationship.",
  },
  {
    title: "Technology partners",
    body: "Booking systems, EHRs and vertical software with customers who miss calls. Deep integrations are scoped case by case, honestly: we only announce what actually works.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: "Partners", href: "/partners" }]} />
      <PageHero
        label="Partners"
        title="Your clients leak bookings. We fix that. Everyone wins."
        lede="Three ways to work with us. No badge walls, no tiers invented for a webpage: real arrangements agreed per partner."
      />
      <div className="mx-auto grid max-w-[1200px] gap-5 px-5 pb-14 md:grid-cols-3 lg:px-8">
        {TRACKS.map((t) => (
          <div key={t.title} className="card card-lift p-7">
            <h2 className="font-display text-2xl font-medium tracking-tight text-ink">
              {t.title}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              {t.body}
            </p>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-[1200px] px-5 pb-16 lg:px-8">
        <div className="card p-7">
          <p className="font-semibold text-ink">Start the conversation</p>
          <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            Write to{" "}
            <a href="mailto:hello@awaazlabs.io?subject=Partnership" className="font-semibold text-ink underline underline-offset-4">
              hello@awaazlabs.io
            </a>{" "}
            with a line on who you serve, or{" "}
            <Link href="/book-a-call" className="font-semibold text-ink underline underline-offset-4">
              book a call
            </Link>{" "}
            directly. A human replies within one business day.
          </p>
        </div>
      </div>
      <CTABand
        title="Want to feel the product first?"
        body="Run the free leak audit on your own business or a client's. The findings make the partner conversation concrete."
      />
    </>
  );
}
