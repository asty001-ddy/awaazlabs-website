"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import DemoPlayer from "./DemoPlayer";
import { Reveal, MaskReveal, CountUp } from "./motion-primitives";

/**
 * Homepage CRO blocks adopted from the competitive teardown (section 4,
 * Phase 1): audio proof, a 2-slider leak teaser, and the founder block.
 * All claims stay within the approved list; the teaser outputs bookings,
 * not money, because currency stays off the homepage.
 */

/* ---------- Hear it: one player, more on /demo ---------- */

export function HearIt() {
  return (
    <section className="border-b border-hairline py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-8">
        <div>
          <Reveal>
            <p className="label text-faint">Do not take our word for it</p>
          </Reveal>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] font-medium tracking-tight text-ink sm:text-5xl">
            <MaskReveal>Hear it take a call.</MaskReveal>
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              A sample call: an after-hours consultation inquiry, answered,
              qualified and booked. No hold music, no voicemail.
            </p>
            <Link
              href="/demo"
              className="label mt-6 inline-flex items-center gap-2 text-ink underline decoration-hairline underline-offset-4 transition-colors hover:decoration-ink"
            >
              More recordings, including Arabic
              <ArrowUpRight size={14} aria-hidden />
            </Link>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <DemoPlayer
            src="/audio/demo-english.mp3"
            title="New patient books a consultation"
            language="English"
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Mini leak teaser: 2 sliders, bookings out ---------- */

const BOOK_RATE = 0.4; // benchmark default, stated in the caption

export function MiniCalcTeaser() {
  const [inquiries, setInquiries] = useState(120);
  const [missRate, setMissRate] = useState(32);

  const missedMonthly = Math.round(inquiries * (missRate / 100) * 4.33);
  const lostBookings = Math.round(missedMonthly * BOOK_RATE);

  return (
    <section className="border-b border-hairline py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <Reveal>
          <p className="label text-faint">Thirty-second leak check</p>
        </Reveal>
        <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] font-medium tracking-tight text-ink sm:text-5xl">
          <MaskReveal>How much walks away each month?</MaskReveal>
        </h2>

        <div className="card mt-12 grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          <div className="space-y-8">
            <div>
              <label htmlFor="mini-inq" className="label mb-3 block text-ink-soft">
                Inbound inquiries per week: {inquiries}
              </label>
              <input
                id="mini-inq"
                type="range"
                min={20}
                max={500}
                step={10}
                value={inquiries}
                onChange={(e) => setInquiries(Number(e.target.value))}
                className="w-full accent-[#A21CAF]"
              />
            </div>
            <div>
              <label htmlFor="mini-miss" className="label mb-3 block text-ink-soft">
                Share missed: {missRate}%
              </label>
              <input
                id="mini-miss"
                type="range"
                min={10}
                max={60}
                value={missRate}
                onChange={(e) => setMissRate(Number(e.target.value))}
                className="w-full accent-[#A21CAF]"
              />
              <p className="mt-2 text-[12px] text-faint">
                Industry benchmark: 23 to 42 percent of inbound calls are missed
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center border-t border-hairline pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
            <p className="label text-faint">Bookings walking away monthly</p>
            <p className="mt-2 font-display text-6xl font-medium tracking-tight text-signal">
              <CountUp to={lostBookings} />
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-faint">
              Assumes 4 in 10 answered inquiries book, the benchmark default.
              The system pays for itself with the first recovered booking each
              month.
            </p>
            <Link
              href="/tools/missed-call-cost-calculator"
              className="label mt-5 inline-flex items-center gap-2 text-ink underline decoration-hairline underline-offset-4 transition-colors hover:decoration-ink"
            >
              Put your money number on it
              <ArrowUpRight size={14} aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Founder block: a human face before the final ask ---------- */

export function FounderBlock() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <Reveal>
          <div className="card mx-auto flex max-w-3xl flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:gap-8 sm:p-10">
            {/*
             * Swap the monogram for a real photo by dropping founder.jpg
             * into /public and replacing this span with an <Image>.
             */}
            <span
              aria-hidden
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-ink font-display text-2xl font-semibold text-paper"
            >
              AA
            </span>
            <div>
              <p className="text-lg leading-relaxed text-ink-soft">
                I read every leak audit before it goes out. If you would rather
                talk yours through first, book fifteen minutes with me
                directly.
              </p>
              <p className="mt-4 font-semibold text-ink">Astafa Ali</p>
              <p className="label mt-1 text-faint">Founder, Awaaz Labs</p>
              <Link
                href="/book-a-call"
                className="label mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-paper transition-opacity hover:opacity-85"
              >
                Book 15 minutes with Astafa
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
