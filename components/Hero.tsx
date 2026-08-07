"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Radar } from "lucide-react";
import { LINKS } from "@/lib/site";
import { EASE_OUT } from "./motion-primitives";
import ChannelOrchestra from "./ChannelOrchestra";

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
          className="block whitespace-nowrap"
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
      {/* Slow-drifting brand glow keeps the hero feeling alive */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 60, -30, 0], y: [0, 40, 10, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-16 right-[8%] h-[380px] w-[380px] rounded-full bg-signal-bright/[0.10] blur-3xl"
      />
      <div className="relative mx-auto grid w-full max-w-[1200px] gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12 lg:px-8">
        {/*
         * @container: the headline column sizes from the grid, never from
         * its content. Without this, the nowrap ticker phrase widened the
         * column and squeezed the orchestra card on long phrases.
         */}
        <div className="@container min-w-0">
          <p className="anim-fade-up inline-flex items-center gap-2.5 rounded-full border border-hairline bg-white/70 py-2 pr-4 pl-3 backdrop-blur-sm">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="h-2 w-2 rounded-full bg-signal-bright" />
              <motion.span
                animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-signal-bright"
              />
            </span>
            <span className="label text-ink-soft">
              The 24/7 AI front desk, live on 3 continents
            </span>
          </p>

          {/* Transform-only entrance: opacity-faded text is excluded from
              LCP, so the headline must paint visible and slide in */}
          <h1 className="mt-8 font-display text-[clamp(26px,10.8cqw,76px)] leading-[1.02] font-medium tracking-tight text-ink">
            <span className="anim-mask-wrap block">
              <span className="anim-mask-up block">
                Never lose another customer to{" "}
                <Ticker />
              </span>
            </span>
          </h1>

          {/* No entrance animation: the page's guaranteed LCP paint */}
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
            It answers, books, reminds, recovers and collects reviews. Every
            channel, every hour, every language. Built for any business that
            lives on inbound calls: you just show up to a fuller calendar.
          </p>

          <div className="anim-fade-up anim-d3 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <motion.a
              href={LINKS.leakAudit}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-shimmer label inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-ink py-3 pr-7 pl-3 text-center text-paper transition-opacity duration-200 hover:opacity-85"
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
          </div>

          <p className="anim-fade-up anim-d4 mt-5 max-w-md text-sm leading-relaxed text-faint">
            We call your business like a customer would, then show you exactly
            where inquiries go to die. Free, and uncomfortably specific.
          </p>
        </div>

        {/* Channel orchestration: every channel in, one streamlined desk out */}
        {/* translate="no": the multilingual vignette is product UI, not page copy */}
        <aside
          translate="no"
          className="anim-fade-up anim-d3 card beam min-w-0 self-center overflow-hidden"
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
          <div className="gridlines px-3 py-5 sm:px-4">
            <ChannelOrchestra />
          </div>
        </aside>
      </div>
    </section>
  );
}
