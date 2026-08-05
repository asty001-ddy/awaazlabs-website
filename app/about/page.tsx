import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import { HeartHandshake, Scale, UserCheck, ArrowUpRight } from "lucide-react";
import { Breadcrumbs, PageHero, CTABand, TrustStrip, PhotoOverlay } from "@/components/subpage";
import { FounderBlock } from "@/components/home-cro";
import { CountUp, MaskReveal, Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";

export const metadata = pageMeta({
  title: "About | Awaaz Labs",
  description:
    "Awaaz Labs builds the AI front desk for appointment-based businesses. A Finova Solutions product, running in production on three continents.",
  path: "/about",
});

/* What we care about: the mission, as scannable cards */
const VALUES = [
  {
    icon: HeartHandshake,
    tint: "bg-fuchsia-100 text-fuchsia-700",
    title: "Accessible to every customer",
    body: "If someone wants to reach your business, they should be able to. Any hour, any channel, any language.",
  },
  {
    icon: Scale,
    tint: "bg-amber-100 text-amber-700",
    title: "Honest numbers only",
    body: "No invented stats, no borrowed logos. Benchmarks labeled as benchmarks, and a free audit before any pitch.",
  },
  {
    icon: UserCheck,
    tint: "bg-sky-100 text-sky-700",
    title: "Humans where it matters",
    body: "Judgment, care and expertise stay with your team. The system covers the hours and overflow they cannot.",
  },
];

const STATS = [
  { to: 3, suffix: "", label: "continents running the platform in production" },
  { to: 168, suffix: "", label: "hours a week the front desk covers" },
  { to: 4, suffix: "", label: "languages, switched mid-conversation" },
];

/* Approved deployments only */
const DEPLOYMENTS = [
  {
    region: "United States",
    name: "Sirius Solutions Global",
    line: "Around 50 calls a day, live in production",
    href: "/customers/sirius-solutions",
  },
  {
    region: "United Arab Emirates",
    name: "Advanzatech",
    line: "70 meetings booked in month two",
    href: "/customers/advanzatech",
  },
  {
    region: "Pakistan",
    name: "Telecom Foundation",
    line: "Urdu inbound customer service, Ministry of IT subsidiary",
    href: "/customers",
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: "About", href: "/about" }]} />
      <PageHero
        label="About"
        title="Awaaz means voice. We make sure yours answers."
        lede="Good businesses lose customers for the dumbest reason: nobody picked up. We build the front desk that never leaves the phone ringing."
      />

      {/* Vision: one statement, staged like a manifesto */}
      <section className="px-3 pb-8 sm:px-5 lg:px-6">
        <div className="panel-void dots mx-auto max-w-[1360px] px-6 py-16 text-paper sm:px-12 lg:px-20 lg:py-20">
          <p className="label text-void-muted">The vision</p>
          <h2 className="mt-6 max-w-4xl font-display text-3xl leading-[1.15] font-medium tracking-tight sm:text-4xl lg:text-5xl">
            <MaskReveal>
              Every business accessible to every customer it wants to serve.
            </MaskReveal>
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-void-muted">
              Not for the 40 hours a desk is staffed. All 168 hours a week
              that customers actually reach out. No customer left unattended,
              and no owner punished for being busy doing the work.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission: three cards, one glance */}
      <section className="mx-auto max-w-[1200px] px-5 py-14 lg:px-8">
        <Reveal>
          <p className="label text-faint">What we care about</p>
        </Reveal>
        <Stagger className="mt-8 grid gap-5 md:grid-cols-3">
          {VALUES.map((v) => (
            <StaggerItem key={v.title} className="card card-lift p-7">
              <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${v.tint}`}>
                <v.icon size={18} aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-xl font-medium tracking-tight text-ink">
                {v.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                {v.body}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Numbers that are true */}
      <section className="mx-auto max-w-[1200px] px-5 pb-14 lg:px-8">
        <div className="grid gap-10 border-y border-hairline py-10 sm:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="font-display text-6xl font-medium tracking-tight text-ink">
                <CountUp to={s.to} suffix={s.suffix} />
              </p>
              <p className="mt-3 max-w-[24ch] text-sm text-ink-soft">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Three continents, named */}
      <section className="mx-auto max-w-[1200px] px-5 pb-14 lg:px-8">
        <Reveal>
          <p className="label text-faint">Where it already runs</p>
        </Reveal>
        <Stagger className="mt-8 grid gap-5 md:grid-cols-3">
          {DEPLOYMENTS.map((d) => (
            <StaggerItem key={d.name}>
              <Link href={d.href} className="card card-lift group flex h-full flex-col p-7">
                <p className="label text-signal">{d.region}</p>
                <p className="mt-4 font-display text-2xl font-medium tracking-tight text-ink">
                  {d.name}
                </p>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">
                  {d.line}
                </p>
                <span className="label mt-5 flex items-center gap-2 text-faint transition-colors group-hover:text-signal">
                  The story
                  <ArrowUpRight size={14} aria-hidden className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            A product of{" "}
            <a
              href="https://finovasolutions.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ink underline underline-offset-4"
            >
              Finova Solutions
            </a>
            . We go deep on clinics, brokerages, restaurants and trades, but
            the product is for any business that lives on inbound
            conversations. If your customers call, message or book, this was
            built for you.
          </p>
        </Reveal>
      </section>

      <PhotoOverlay
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
        alt="Team working together around laptops"
        label="Awaaz means voice"
      >
        Built by Finova Solutions. Shipped on three continents.
      </PhotoOverlay>
      <TrustStrip />
      <FounderBlock />
      <CTABand />
    </>
  );
}
