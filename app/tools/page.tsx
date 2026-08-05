import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import { ArrowUpRight, Calculator, Bot, Activity, type LucideIcon } from "lucide-react";
import { Breadcrumbs, PageHero, CTABand } from "@/components/subpage";

export const metadata = pageMeta({
  title: "Free Tools | Awaaz Labs",
  description:
    "Free tools for appointment-based businesses: missed call cost calculator, front desk health score, and a demo AI agent built from your own website.",
  path: "/tools",
});

const TOOLS: {
  href: string;
  icon: LucideIcon;
  tint: string;
  title: string;
  body: string;
}[] = [
  {
    href: "/tools/missed-call-cost-calculator",
    icon: Calculator,
    tint: "bg-fuchsia-100 text-fuchsia-700",
    title: "Missed call cost calculator",
    body: "Estimate what missed calls and unread messages cost you monthly. On-screen result, no email required.",
  },
  {
    href: "/tools/front-desk-health-score",
    icon: Activity,
    tint: "bg-sky-100 text-sky-700",
    title: "Front desk health score",
    body: "Eight questions, scored out of 100, with an instant diagnosis of where your desk leaks.",
  },
  {
    href: "/tools/build-your-agent",
    icon: Bot,
    tint: "bg-amber-100 text-amber-700",
    title: "Build your agent",
    body: "Paste your website, get a demo AI agent trained on it, and talk to it in your browser. Rolling out now.",
  },
];

export default function ToolsPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: "Tools", href: "/tools" }]} />
      <PageHero
        label="Free tools"
        title="See the leak before you fix it."
        lede="Built for owners who want the numbers first. No email gates on results."
      />
      <div className="mx-auto grid max-w-[1200px] gap-5 px-5 pb-20 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {TOOLS.map((t) => (
          <Link key={t.href} href={t.href} className="card card-lift group flex flex-col p-7">
            <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${t.tint}`}>
              <t.icon size={18} aria-hidden />
            </span>
            <h2 className="mt-5 flex items-center gap-2 font-display text-2xl font-medium tracking-tight text-ink">
              {t.title}
              <ArrowUpRight size={18} className="text-signal opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
            </h2>
            <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">
              {t.body}
            </p>
          </Link>
        ))}
      </div>
      <CTABand />
    </>
  );
}
