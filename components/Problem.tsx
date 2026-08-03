"use client";

import { CountUp, MaskReveal, Reveal, Stagger, StaggerItem } from "./motion-primitives";

const LEAKS = [
  "The WhatsApp message that sat unread until morning, by which time she booked elsewhere",
  "The web form inquiry that got a reply eight hours later, to a lead that went cold in five minutes",
  "The no-show nobody called back, so the slot earned nothing",
  "The happy customer nobody asked for a review, so your competitor's rating grew instead",
];

export default function Problem() {
  return (
    <section id="problem" className="px-3 py-8 sm:px-5 lg:px-6">
      <div className="panel-void dots mx-auto max-w-[1360px] px-6 py-20 text-paper sm:px-12 lg:px-20 lg:py-28">
        {/* Warm glow bleeding in from the top corner */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-amber/[0.07] blur-3xl"
        />
        <Reveal>
          <p className="label text-void-muted">The leak you can&apos;t see</p>
        </Reveal>
        <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] font-medium tracking-tight sm:text-5xl lg:text-6xl">
          <MaskReveal>Your phone rang last night.</MaskReveal>
          <MaskReveal delay={0.08}>Nobody heard it.</MaskReveal>
        </h2>

        {/* Editorial benchmark numerals */}
        <div className="mt-16 grid gap-px border-y border-void-line sm:grid-cols-2">
          <Reveal className="py-10 sm:pr-12">
            <p className="font-display text-6xl font-medium tracking-tight text-paper lg:text-7xl">
              <CountUp to={23} /> to <CountUp to={42} suffix="%" />
            </p>
            <p className="mt-3 text-base text-void-muted">
              of inbound calls to appointment-based businesses are missed
            </p>
            <p className="label mt-4 text-void-muted/60">Industry benchmark</p>
          </Reveal>
          <Reveal
            delay={0.1}
            className="border-t border-void-line py-10 sm:border-t-0 sm:border-l sm:pl-12"
          >
            <p className="font-display text-6xl font-medium tracking-tight text-paper lg:text-7xl">
              <CountUp to={78} suffix="%" />
            </p>
            <p className="mt-3 text-base text-void-muted">
              of after-hours callers never leave a voicemail
            </p>
            <p className="label mt-4 text-void-muted/60">Industry benchmark</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed text-void-muted">
              <p>
                Not because the team is lazy. Because calls arrive at lunch, at
                9pm, on Sunday, and three at a time. And here is the part that
                hurts: the callers you miss do not call back. They scroll to
                the next name on Google and book there.
              </p>
              <p>The same leak runs through every channel:</p>
            </div>
          </Reveal>

          <Stagger>
            {LEAKS.map((leak, i) => (
              <StaggerItem
                key={leak}
                className="flex gap-5 border-b border-void-line py-5 first:border-t"
              >
                <span className="label pt-1 text-void-muted/60">
                  0{i + 1}
                </span>
                <p className="text-[15px] leading-relaxed text-paper/85">
                  {leak}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-16 max-w-3xl text-lg leading-relaxed text-void-muted">
            Each one looks small. Together they are the most expensive line
            item in your business, and it appears on no report.
          </p>
          <p className="mt-8 max-w-3xl font-display text-3xl leading-tight font-medium tracking-tight text-paper sm:text-4xl">
            You cannot hire your way out of a 168-hour week.{" "}
            <span className="text-signal-bright">You can capture it.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
