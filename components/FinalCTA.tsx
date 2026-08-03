"use client";

import { motion } from "framer-motion";
import { Radar } from "lucide-react";
import { LINKS } from "@/lib/site";
import { MaskReveal, Marker, Reveal, EASE_OUT } from "./motion-primitives";

export default function FinalCTA() {
  return (
    <section id="leak-audit" className="px-3 py-8 sm:px-5 lg:px-6">
      <div className="panel-void dots mx-auto max-w-[1360px] px-6 py-24 text-paper sm:px-12 lg:px-20 lg:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-48 -left-40 h-[460px] w-[460px] rounded-full bg-signal-bright/[0.06] blur-3xl"
        />
        <Reveal>
          <p className="label text-void-muted">The first step is free</p>
        </Reveal>
        <h2 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] font-medium tracking-tight sm:text-6xl lg:text-7xl">
          <MaskReveal>Find out what</MaskReveal>
          <MaskReveal delay={0.08}>
            you&apos;re leaking. <Marker>Free.</Marker>
          </MaskReveal>
        </h2>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-void-muted">
            We call and message your business like a customer, log where every
            inquiry dies, and send you the numbers on one page. No pitch. Most
            owners are surprised.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <motion.a
            href={LINKS.auditRequest}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            className="label mt-12 inline-flex cursor-pointer items-center gap-3 rounded-full bg-paper py-3.5 pr-8 pl-3.5 text-ink transition-opacity duration-200 hover:opacity-90"
          >
            <span className="chip-amber relative" aria-hidden>
              <Radar size={15} strokeWidth={2.2} />
              <motion.span
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-lg bg-amber"
              />
            </span>
            Get my free leak audit
          </motion.a>
          <p className="mt-5 text-sm text-void-muted">
            Takes you 2 minutes to request. Costs your competitors a fortune.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
