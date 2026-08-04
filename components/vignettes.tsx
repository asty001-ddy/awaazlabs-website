"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, FileText } from "lucide-react";
import { CountUp, EASE_OUT, useCycle } from "./motion-primitives";

/**
 * Living UI vignettes for interior pages. Everything is code-built:
 * no stock imagery, no external requests, reduced-motion safe.
 */

/* ---------- Looping chat conversation ---------- */

export type ChatMessage = {
  from: "customer" | "agent";
  text: string;
  dir?: "rtl";
};

export function ChatVignette({
  label,
  messages,
  chip,
}: {
  label: string;
  messages: ChatMessage[];
  chip: string;
}) {
  const { ref, step } = useCycle(messages.length + 3, 1500);

  return (
    <div ref={ref} className="card beam overflow-hidden">
      <div className="chrome">
        <span className="chrome-dot" />
        <span className="chrome-dot" />
        <span className="chrome-dot" />
        <span className="label ml-2 text-faint">{label}</span>
      </div>
      <div className="gridlines flex min-h-[300px] flex-col justify-end gap-2.5 p-5">
        <AnimatePresence>
          {messages.map((m, i) =>
            step > i ? (
              <motion.p
                key={i}
                dir={m.dir}
                initial={{ opacity: 0, y: 14, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, ease: EASE_OUT }}
                className={
                  m.from === "customer"
                    ? "self-start rounded-2xl rounded-bl-sm border border-hairline bg-white px-4 py-2.5 text-sm text-ink"
                    : "self-end rounded-2xl rounded-br-sm bg-ink px-4 py-2.5 text-sm text-paper"
                }
              >
                {m.text}
              </motion.p>
            ) : null,
          )}
          {step > messages.length && (
            <motion.span
              key="chip"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="flex items-center gap-2 self-center rounded-full bg-signal px-4 py-1.5 text-[13px] font-semibold text-white"
            >
              <Check size={13} strokeWidth={3} /> {chip}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ---------- Benchmark stat with count-up and proportion bar ---------- */

export function BenchmarkStat({
  prefix = "",
  to,
  suffix = "%",
  label,
  source = "Industry benchmark",
}: {
  prefix?: string;
  to: number;
  suffix?: string;
  label: string;
  source?: string;
}) {
  return (
    <div>
      <p className="font-display text-6xl font-medium tracking-tight text-ink">
        {prefix}
        <CountUp to={to} suffix={suffix} />
      </p>
      <div className="mt-4 h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-hairline">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.2, delay: 0.3, ease: EASE_OUT }}
          style={{ width: `${Math.min(to, 100)}%`, transformOrigin: "left" }}
          className="h-full rounded-full bg-signal-bright"
        />
      </div>
      <p className="mt-3 text-base text-ink-soft">{label}</p>
      <p className="label mt-3 text-faint">{source}</p>
    </div>
  );
}

/* ---------- Mock one-page audit report ---------- */

const AUDIT_ROWS = [
  { channel: "Phone, 9:20 PM", result: "Rang out. No answer.", ok: false },
  { channel: "WhatsApp, 11:05 PM", result: "Seen next morning.", ok: false },
  { channel: "Phone, 1:15 PM", result: "Answered in 40s.", ok: true },
  { channel: "Web form, Sunday", result: "No reply in 48h.", ok: false },
  { channel: "Email, weekday", result: "Replied same day.", ok: true },
];

export function AuditReportCard() {
  const { ref, step } = useCycle(AUDIT_ROWS.length + 4, 1100);
  const leaks = AUDIT_ROWS.filter((r) => !r.ok).length;

  return (
    <div ref={ref} className="card overflow-hidden">
      <div className="chrome justify-between">
        <span className="flex items-center gap-1.5">
          <span className="chrome-dot" />
          <span className="chrome-dot" />
          <span className="chrome-dot" />
          <span className="label ml-2 text-ink">Leak audit, sample</span>
        </span>
        <FileText size={14} className="text-faint" aria-hidden />
      </div>
      <ul className="px-5 py-2">
        {AUDIT_ROWS.map((row, i) => (
          <motion.li
            key={row.channel}
            animate={{ opacity: step > i ? 1 : 0.15 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-between gap-4 border-b border-hairline py-3 last:border-0"
          >
            <div>
              <p className="label text-faint">{row.channel}</p>
              <p className="mt-0.5 text-sm text-ink">{row.result}</p>
            </div>
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                row.ok ? "bg-signal/10 text-signal" : "bg-rose-100 text-rose-600"
              }`}
              aria-hidden
            >
              {row.ok ? (
                <Check size={13} strokeWidth={3} />
              ) : (
                <X size={13} strokeWidth={3} />
              )}
            </span>
          </motion.li>
        ))}
      </ul>
      <div className="border-t border-hairline bg-paper/70 px-5 py-4">
        <AnimatePresence>
          {step > AUDIT_ROWS.length && (
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex items-center justify-between text-sm font-semibold text-ink"
            >
              <span>{leaks} leaks found this week</span>
              <span className="label text-signal">Findings on one page</span>
            </motion.p>
          )}
        </AnimatePresence>
        {step <= AUDIT_ROWS.length && (
          <p className="text-sm text-faint">Testing your channels...</p>
        )}
      </div>
    </div>
  );
}

/* ---------- Equalizer bars for the demo players ---------- */

export function WaveBars({ playing }: { playing: boolean }) {
  const bars = [14, 22, 30, 18, 26, 34, 20, 28, 16, 24, 32, 18, 26, 14, 22];

  return (
    <div className="flex h-10 items-end gap-1" aria-hidden>
      {bars.map((h, i) => (
        <motion.span
          key={i}
          animate={
            playing
              ? { height: [h * 0.4, h, h * 0.55, h * 0.9, h * 0.4] }
              : { height: 6 }
          }
          transition={
            playing
              ? {
                  duration: 1.1,
                  repeat: Infinity,
                  delay: i * 0.07,
                  ease: "easeInOut",
                }
              : { duration: 0.3 }
          }
          className="w-1.5 rounded-full bg-signal-bright"
        />
      ))}
    </div>
  );
}

/* ---------- Simple hover-lift stat tile used on customer pages ---------- */

export function StatTile({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      animate={{ y: hover ? -4 : 0 }}
      className="card p-7"
    >
      <p className="font-display text-5xl font-medium tracking-tight text-ink">
        {value}
      </p>
      <p className="mt-2 text-sm text-ink-soft">{label}</p>
    </motion.div>
  );
}
