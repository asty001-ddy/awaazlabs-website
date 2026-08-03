"use client";

import { motion } from "framer-motion";
import { Radar } from "lucide-react";
import { LINKS } from "@/lib/site";
import {
  Reveal,
  Stagger,
  StaggerItem,
  MaskReveal,
  EASE_OUT,
} from "./motion-primitives";

const PHASES = [
  {
    num: "01",
    name: "Leak audit",
    text: "We call and message your business like customers do, and map exactly where inquiries disappear.",
  },
  {
    num: "02",
    name: "Build and integrate",
    text: "Your agents are scripted, tuned to your services and prices, and wired into your calendar and tools.",
  },
  {
    num: "03",
    name: "Pilot on live traffic",
    text: "Real calls, side by side with your team, until you trust it.",
  },
  {
    num: "04",
    name: "Full 24/7 rollout",
    text: "Every channel covered, every hour, every language.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-hairline py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <Reveal>
          <p className="label text-faint">Process</p>
        </Reveal>
        <h2 className="mt-6 font-display text-4xl leading-[1.05] font-medium tracking-tight text-ink sm:text-5xl lg:text-6xl">
          <MaskReveal>Live in 2 to 3 weeks.</MaskReveal>
        </h2>

        <div className="relative mt-14">
          {/* Progress line drawing across the steps */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.4, ease: EASE_OUT }}
            className="absolute top-0 right-0 left-0 hidden h-px origin-left bg-ink lg:block"
          />
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:pt-10">
            {PHASES.map((phase) => (
              <StaggerItem
                key={phase.num}
                className="card card-lift relative p-6"
              >
                <span className="absolute -top-[46px] left-6 hidden h-2 w-2 rounded-full bg-ink lg:block" />
                <p className="font-display text-5xl font-medium tracking-tight text-hairline">
                  {phase.num}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-ink">
                  {phase.name}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  {phase.text}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal delay={0.15}>
          <motion.a
            href={LINKS.leakAudit}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="label mt-14 inline-flex cursor-pointer items-center gap-3 rounded-full bg-ink py-3 pr-7 pl-3 text-paper transition-opacity duration-200 hover:opacity-85"
          >
            <span className="chip-amber" aria-hidden>
              <Radar size={15} strokeWidth={2.2} />
            </span>
            Start with the free audit
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
