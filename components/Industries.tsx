"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MaskReveal, Reveal, staggerItem, staggerContainer } from "./motion-primitives";

/*
 * Index rows, not links: industry pages do not exist yet and the brief says
 * never to link to an empty page. Convert rows to <a> as pages ship.
 */
const INDUSTRIES = [
  {
    name: "Aesthetics and med spas",
    text: "Consultations booked while your competitors sleep.",
  },
  {
    name: "Dental clinics",
    text: "Fewer empty chairs, fewer no-shows, more recalls completed.",
  },
  {
    name: "Real estate",
    text: "Every listing inquiry answered before the buyer moves on.",
  },
  {
    name: "Restaurants",
    text: "Reservations taken on the third ring of a Friday rush.",
  },
  {
    name: "Vehicle recovery",
    text: "The 2am call answered, dispatched and confirmed.",
  },
  {
    name: "Home services",
    text: "Jobs booked from the roof, the crawlspace, wherever you are.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="border-b border-hairline py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <Reveal>
          <p className="label text-faint">Industries</p>
        </Reveal>
        <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] font-medium tracking-tight text-ink sm:text-5xl lg:text-6xl">
          <MaskReveal>Built for businesses that live</MaskReveal>
          <MaskReveal delay={0.08}>and die by the calendar.</MaskReveal>
        </h2>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 border-t border-hairline"
        >
          {INDUSTRIES.map((ind, i) => (
            <motion.li
              key={ind.name}
              variants={staggerItem}
              className="group grid gap-2 border-b border-hairline px-2 py-7 transition-all duration-300 hover:bg-white sm:grid-cols-[64px_1fr_1.2fr] sm:items-baseline sm:gap-6"
            >
              <span className="label text-faint transition-colors duration-300 group-hover:text-signal">
                0{i + 1}
              </span>
              <h3 className="flex items-center gap-3 font-display text-2xl font-medium tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl">
                {ind.name}
                <ArrowUpRight
                  size={22}
                  aria-hidden
                  className="-translate-x-2 text-signal opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                />
              </h3>
              <p className="text-[15px] leading-relaxed text-ink-soft sm:text-right">
                {ind.text}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
