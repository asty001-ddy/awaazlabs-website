import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHero, CTABand, RelatedGuides } from "@/components/subpage";
import AgentEarlyAccess from "@/components/AgentEarlyAccess";

export const metadata: Metadata = {
  title: "Build Your Agent (Free) | Awaaz Labs",
  description:
    "Paste your website, get a demo AI agent trained on it, and talk to it in your browser. Voice, no phone number needed. Rolling out now.",
  alternates: { canonical: "/tools/build-your-agent" },
};

const STEPS = [
  {
    n: "01",
    title: "Paste your website",
    body: "We read your public pages: services, hours, locations.",
  },
  {
    n: "02",
    title: "We build a demo agent from it",
    body: "A temporary, demo-quality agent that knows your business well enough to be interesting.",
  },
  {
    n: "03",
    title: "Talk to it in your browser",
    body: "Voice, right in the page. Ask it what your customers would ask. The transcript lands in your inbox.",
  },
];

export default function BuildYourAgentPage() {
  return (
    <>
      <Breadcrumbs
        trail={[
          { label: "Tools", href: "/tools" },
          { label: "Build your agent", href: "/tools/build-your-agent" },
        ]}
      />
      <PageHero
        label="Free tool, rolling out now"
        title="Hear an AI answer for your business, not ours."
        lede="Paste your website. We build a temporary demo agent from your own pages, and you talk to it in your browser. The fastest way to feel what your callers would feel."
      />
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 pb-16 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-8">
        <ul className="space-y-8">
          {STEPS.map((s) => (
            <li key={s.n} className="flex gap-5">
              <span className="label pt-1 text-signal">{s.n}</span>
              <div>
                <h2 className="text-lg font-semibold text-ink">{s.title}</h2>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
          <li className="flex gap-5">
            <span className="label pt-1 text-faint">FYI</span>
            <p className="text-[13px] leading-relaxed text-faint">
              Demo agents are throwaway by design: capped sessions, automatic
              expiry, public information only. A production deployment is
              built around your real workflows, calendars and languages. That
              difference is the point.
            </p>
          </li>
        </ul>
        <AgentEarlyAccess />
      </div>
      <div className="mx-auto max-w-[1200px] px-5 pb-16 lg:px-8">
        <p className="text-[15px] leading-relaxed text-ink-soft">
          Want the real thing instead? Start with the{" "}
          <Link href="/leak-audit" className="font-semibold text-ink underline underline-offset-4">
            free leak audit
          </Link>{" "}
          or hear{" "}
          <Link href="/demo" className="font-semibold text-ink underline underline-offset-4">
            sample calls
          </Link>
          .
        </p>
      </div>
      <RelatedGuides
        slugs={[
          "ai-receptionist-vs-hiring-receptionist",
          "whatsapp-speed-to-lead",
          "front-desk-health-check",
        ]}
      />
      <CTABand />
    </>
  );
}
