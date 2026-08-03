"use client";

import { motion } from "framer-motion";
import { Reveal } from "./motion-primitives";

const DEPLOYMENTS = [
  "Sirius Solutions Global · United States",
  "Advanzatech · United Arab Emirates",
  "Telecom Foundation · Government of Pakistan",
];

function MarqueeRow() {
  /* Row duplicated so the -50% loop is seamless */
  const row = [...DEPLOYMENTS, ...DEPLOYMENTS, ...DEPLOYMENTS];
  return (
    <motion.div
      aria-hidden
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="flex w-max"
    >
      {[...row, ...row].map((name, i) => (
        <span key={i} className="label whitespace-nowrap px-8 text-faint">
          {name}
        </span>
      ))}
    </motion.div>
  );
}

export default function ProofBar() {
  return (
    <section className="border-b border-hairline py-12">
      <Reveal>
        <p className="label px-5 text-center text-ink">
          Deployed in production across three continents
        </p>
      </Reveal>

      <div className="mt-8 overflow-hidden" aria-label={DEPLOYMENTS.join(", ")}>
        <MarqueeRow />
      </div>

      <Reveal delay={0.1}>
        <p className="mx-auto mt-10 max-w-2xl px-5 text-center font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
          &ldquo;70 meetings booked in month two. One deployment.&rdquo;
        </p>
        <p className="mt-2 text-center text-sm text-faint">Advanzatech, UAE</p>
      </Reveal>
    </section>
  );
}
