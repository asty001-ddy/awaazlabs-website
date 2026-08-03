"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Radar } from "lucide-react";
import { LINKS } from "@/lib/site";
import { EASE_OUT } from "./motion-primitives";

/* Rotating loss channels. Cadence ~1.2s per the hero ticker spec. */
const PHRASES = [
  "a missed call.",
  "an unread email.",
  "an ignored text.",
  "a bad review.",
  "a no-show.",
  "a silent WhatsApp.",
];
const TICKER_MS = 1200;

/*
 * Illustrative front-desk feed. Times and entries are sample UI, not claimed
 * results. Every action mirrors an approved capability: answer, intake, book,
 * remind, follow up by email, recover no-shows, reengage, request reviews.
 */
const FEED = [
  {
    time: "9:47 PM",
    channel: "Call",
    action: "Answered in Arabic. Consultation booked for Tuesday.",
  },
  {
    time: "11:03 PM",
    channel: "WhatsApp",
    action: "Intake completed. Added to tomorrow's calendar.",
  },
  {
    time: "7:12 AM",
    channel: "Email",
    action: "Follow-up sent. Reply captured and routed.",
  },
  {
    time: "10:30 AM",
    channel: "No-show",
    action: "Called back. Rebooked for Thursday.",
  },
  {
    time: "89 days quiet",
    channel: "Lapsed",
    action: "Reengagement message sent, with an offer to rebook.",
  },
  {
    time: "After visit",
    channel: "Review",
    action: "Thank-you sent. Google review requested.",
  },
];

function Ticker() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % PHRASES.length),
      TICKER_MS,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative block h-[1.15em] overflow-hidden text-signal">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={PHRASES[index]}
          initial={{ y: reduced ? 0 : "70%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: reduced ? 0 : "-70%", opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE_OUT }}
          className="block"
        >
          {PHRASES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="gridlines relative flex min-h-[100svh] items-center border-b border-hairline pt-28 pb-14 lg:pt-24 lg:pb-16"
    >
      {/* Fade the gridlines out toward the bottom so text sits on clean paper */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-paper/60 to-paper"
      />
      <div className="relative mx-auto grid w-full max-w-[1200px] gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12 lg:px-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className="label text-faint"
          >
            The AI front desk for appointment-based businesses
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE_OUT }}
            className="mt-8 font-display text-[44px] leading-[1.02] font-medium tracking-tight text-ink sm:text-[64px] lg:text-[76px]"
          >
            Never lose another customer to
            <Ticker />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            Awaaz Labs runs your entire front desk: every call, text, WhatsApp
            and email answered around the clock, appointments booked, no-shows
            won back, reviews collected. In your customer&apos;s language.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE_OUT }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <motion.a
              href={LINKS.leakAudit}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="label inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-ink py-3 pr-7 pl-3 text-center text-paper transition-opacity duration-200 hover:opacity-85"
            >
              <span className="chip-amber" aria-hidden>
                <Radar size={15} strokeWidth={2.2} />
              </span>
              Get your free leak audit
            </motion.a>
            <motion.a
              href={LINKS.demoCall}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="label cursor-pointer rounded-full border border-ink px-8 py-4 text-center text-ink transition-colors duration-200 hover:bg-ink hover:text-paper"
            >
              Hear it take a call
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-5 max-w-md text-sm leading-relaxed text-faint"
          >
            We call your business like a customer would, then show you exactly
            where inquiries go to die. Free, and uncomfortably specific.
          </motion.p>
        </div>

        {/* Front desk feed: monochrome, ruled, illustrative */}
        <motion.aside
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: EASE_OUT }}
          aria-label="Illustration of the front desk working around the clock"
          className="card self-center overflow-hidden"
        >
          <div className="chrome justify-between !py-4">
            <span className="flex items-center gap-1.5">
              <span className="chrome-dot" />
              <span className="chrome-dot" />
              <span className="chrome-dot" />
              <span className="label ml-2 text-ink">Front desk</span>
            </span>
            <span className="flex items-center gap-2">
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1.5 rounded-full bg-signal-bright"
              />
              <span className="label text-faint">Live, 24/7</span>
            </span>
          </div>
          <ul>
            {FEED.map((item, i) => (
              <motion.li
                key={item.time}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.55 + i * 0.14,
                  ease: EASE_OUT,
                }}
                className="border-b border-hairline px-5 py-4 last:border-0"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="label text-faint">{item.channel}</span>
                  <span className="text-xs text-faint tabular-nums">
                    {item.time}
                  </span>
                </div>
                <p className="mt-1.5 text-sm leading-snug text-ink">
                  {item.action}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </section>
  );
}
