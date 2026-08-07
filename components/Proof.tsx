"use client";

import { CountUp, MaskReveal, Reveal, Stagger, StaggerItem } from "./motion-primitives";

const CASES = [
  {
    company: "Advanzatech",
    region: "United Arab Emirates",
    stat: "70",
    statLabel: "meetings booked in the second month of deployment",
  },
  {
    company: "Sirius Solutions Global",
    region: "United States",
    stat: "24/7",
    statLabel: "live daily production for a US medical billing operation",
  },
  {
    company: "Telecom Foundation",
    region: "Government of Pakistan",
    stat: "Urdu",
    statLabel: "inbound customer service for a Ministry of IT subsidiary",
  },
];

const TRUST = [
  "End-to-end encryption",
  "In-region data residency",
  "Full audit trail on every interaction",
];

export default function Proof() {
  return (
    <section id="proof" className="border-b border-hairline py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <Reveal>
          <p className="label text-faint">Proof</p>
        </Reveal>
        <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] font-medium tracking-tight text-ink sm:text-5xl lg:text-6xl">
          <MaskReveal>Running in production,</MaskReveal>{" "}
          <MaskReveal delay={0.08}>not in a pitch deck.</MaskReveal>
        </h2>

        <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
          {CASES.map((c) => (
            <StaggerItem key={c.company} className="card card-lift p-7">
              <p className="font-display text-6xl font-medium tracking-tight text-ink lg:text-7xl">
                {c.stat === "70" ? <CountUp to={70} /> : c.stat}
              </p>
              <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-ink-soft">
                {c.statLabel}
              </p>
              <p className="mt-5 text-base font-semibold text-ink">
                {c.company}
              </p>
              <p className="label mt-1 text-faint">{c.region}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col gap-4 border-t border-hairline pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[15px] text-ink-soft">
              Built and operated by Finova Solutions. Enterprise-grade
              infrastructure.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
              {TRUST.map((t) => (
                <span key={t} className="flex items-center gap-2 text-sm font-medium text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal-bright" aria-hidden />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
