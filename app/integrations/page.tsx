import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs, PageHero, CTABand } from "@/components/subpage";
import { INTEGRATIONS } from "@/lib/integrations";

export const metadata = pageMeta({
  title: "Integrations | Awaaz Labs",
  description:
    "What the Awaaz Labs AI front desk connects to: WhatsApp Business, Google Calendar, Calendly, and the systems your business already runs.",
  path: "/integrations",
});

export default function IntegrationsHub() {
  return (
    <>
      <Breadcrumbs trail={[{ label: "Integrations", href: "/integrations" }]} />
      <PageHero
        label="Integrations"
        title="It plugs into what you already run."
        lede="No rip-and-replace. The front desk answers on your channels and books into your calendars. Named below: the tools we wire today. Everything else is scoped honestly on a call."
      />
      <div className="mx-auto grid max-w-[1200px] gap-5 px-5 pb-14 md:grid-cols-3 lg:px-8">
        {INTEGRATIONS.map((i) => (
          <Link key={i.slug} href={`/integrations/${i.slug}`} className="card card-lift group flex flex-col p-7">
            <p className="label text-faint">Integration</p>
            <h2 className="mt-3 flex-1 font-display text-2xl leading-snug font-medium tracking-tight text-ink">
              {i.name}
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{i.description.split(".")[0]}.</p>
            <span className="label mt-5 flex items-center gap-2 text-signal">
              How it works
              <ArrowUpRight size={14} aria-hidden className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        ))}
      </div>
      <div className="mx-auto max-w-[1200px] px-5 pb-16 lg:px-8">
        <div className="card p-7">
          <p className="font-semibold text-ink">Running something else?</p>
          <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            Booking systems, EHRs and CRMs are wired during onboarding, scoped
            to what you actually run. If it has a calendar, we can usually book
            into it. Ask about yours on a{" "}
            <Link href="/book-a-call" className="font-semibold text-ink underline underline-offset-4">
              free sales call
            </Link>
            .
          </p>
        </div>
      </div>
      <CTABand />
    </>
  );
}
