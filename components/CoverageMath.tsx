"use client";

import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { MaskReveal, Reveal, staggerContainer, staggerItem } from "./motion-primitives";

const ROWS = [
  { label: "Weekly coverage", human: "~40 hours", awaaz: "168 hours" },
  { label: "Simultaneous conversations", human: "One", awaaz: "Unlimited" },
  {
    label: "Languages",
    human: "One, sometimes two",
    awaaz: "Four, switched mid-conversation",
  },
  { label: "Nights, weekends, holidays", human: "no", awaaz: "yes" },
  {
    label: "Follows up every single time",
    human: "Depends on the day",
    awaaz: "yes",
  },
];

function Cell({ value, highlight }: { value: string; highlight?: boolean }) {
  if (value === "yes")
    return (
      <span className="inline-flex items-center gap-1.5 font-semibold text-ink">
        <motion.span
          initial={{ scale: 0, rotate: -90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 320, damping: 16 }}
          className="inline-flex"
        >
          <Check size={15} className="text-signal" aria-hidden />
        </motion.span>{" "}
        Yes
      </span>
    );
  if (value === "no")
    return (
      <span className="inline-flex items-center gap-1.5 text-faint">
        <Minus size={15} aria-hidden /> No
      </span>
    );
  return (
    <span className={highlight ? "font-semibold text-ink" : "text-ink-soft"}>
      {value}
    </span>
  );
}

export default function CoverageMath() {
  return (
    <section id="coverage" className="border-b border-hairline py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <Reveal>
          <p className="label text-faint">Coverage math</p>
        </Reveal>
        <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] font-medium tracking-tight text-ink sm:text-5xl lg:text-6xl">
          <MaskReveal>The math your front desk</MaskReveal>{" "}
          <MaskReveal delay={0.08}>already knows.</MaskReveal>
        </h2>

        <Reveal delay={0.1}>
          <div className="card mt-14 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
              <thead>
                <tr className="border-b border-hairline bg-paper/60">
                  <th className="px-6 py-4 font-normal text-faint">&nbsp;</th>
                  <th className="label px-6 py-4 text-faint">
                    Human front desk
                  </th>
                  <th className="label px-6 py-4 text-ink">Awaaz Labs</th>
                </tr>
              </thead>
              <motion.tbody
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
              >
                {ROWS.map((row) => (
                  <motion.tr
                    key={row.label}
                    variants={staggerItem}
                    className="border-b border-hairline transition-colors duration-200 last:border-0 hover:bg-paper/50"
                  >
                    <td className="px-6 py-5 font-medium text-ink">
                      {row.label}
                    </td>
                    <td className="px-6 py-5">
                      <Cell value={row.human} />
                    </td>
                    <td className="px-6 py-5">
                      <Cell value={row.awaaz} highlight />
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-12 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Awaaz Labs does not replace your team. It covers the 76 percent of
            the week they cannot, and hands them warm, qualified, booked
            customers instead of a cold voicemail box.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
