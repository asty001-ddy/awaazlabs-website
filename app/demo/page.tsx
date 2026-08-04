import type { Metadata } from "next";
import DemoPlayer from "@/components/DemoPlayer";
import { Breadcrumbs, PageHero, CTABand } from "@/components/subpage";

export const metadata: Metadata = {
  title: "Hear the AI Take a Call | Awaaz Labs",
  description:
    "Listen to real sample calls: the Awaaz Labs front desk answering, qualifying and booking in English and Arabic.",
  alternates: { canonical: "/demo" },
};

export default function DemoPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: "Demo", href: "/demo" }]} />
      <PageHero
        label="Sample calls"
        title="Hear it answer, qualify and book."
        lede="Two sample recordings of the front desk at work. A live demo line is coming; until then, this is exactly what your callers would hear."
      />
      <div className="mx-auto grid max-w-[1200px] gap-5 px-5 pb-16 sm:grid-cols-2 lg:px-8">
        <DemoPlayer
          src="/audio/demo-english.mp3"
          title="New patient books a consultation"
          language="English"
        />
        <DemoPlayer
          src="/audio/demo-arabic.mp3"
          title="After-hours WhatsApp caller, answered and booked"
          language="Arabic"
        />
      </div>
      <div className="mx-auto max-w-[1200px] px-5 pb-16 lg:px-8">
        <p className="max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          These are sample interactions recorded for demonstration. On a live
          deployment the agent runs on your numbers, your services, your
          calendar and your languages, and hands anything requiring
          professional judgment to your team.
        </p>
      </div>
      <CTABand
        title="Want it answering your phone instead?"
        body="Start with the free leak audit. We find what you're missing, then show you what capturing it sounds like."
      />
    </>
  );
}
