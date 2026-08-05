"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Radar } from "lucide-react";
import { track } from "@/lib/analytics";
import { EASE_OUT } from "./motion-primitives";

/**
 * 8-question front desk health score, scored out of 100. No email
 * gate on the result (house tool rule). Feeds the leak audit.
 */
const QUESTIONS: { q: string; options: { label: string; pts: number }[] }[] = [
  {
    q: "What happens to calls after closing time?",
    options: [
      { label: "Answered by a person or system", pts: 13 },
      { label: "Voicemail", pts: 4 },
      { label: "They just ring out", pts: 0 },
    ],
  },
  {
    q: "How fast does a WhatsApp inquiry get a reply on average?",
    options: [
      { label: "Within minutes, any hour", pts: 13 },
      { label: "Within business hours", pts: 6 },
      { label: "Whenever someone checks", pts: 0 },
    ],
  },
  {
    q: "Two calls arrive at once. What happens to the second?",
    options: [
      { label: "It gets answered too", pts: 12 },
      { label: "Hold or voicemail", pts: 4 },
      { label: "Missed", pts: 0 },
    ],
  },
  {
    q: "Who calls back your no-shows?",
    options: [
      { label: "Someone, same day, every time", pts: 12 },
      { label: "Sometimes, when there is time", pts: 5 },
      { label: "Nobody", pts: 0 },
    ],
  },
  {
    q: "Web form inquiries get a first reply in...",
    options: [
      { label: "Minutes", pts: 12 },
      { label: "The same day", pts: 6 },
      { label: "A day or more", pts: 0 },
    ],
  },
  {
    q: "Do lapsed customers ever hear from you again?",
    options: [
      { label: "Yes, on a schedule", pts: 12 },
      { label: "Occasionally, ad hoc", pts: 5 },
      { label: "No", pts: 0 },
    ],
  },
  {
    q: "How consistently do happy customers get asked for a review?",
    options: [
      { label: "Every visit, automatically", pts: 13 },
      { label: "When staff remember", pts: 5 },
      { label: "We do not ask", pts: 0 },
    ],
  },
  {
    q: "Can you see what was said on any call last weekend?",
    options: [
      { label: "Yes, recorded or logged", pts: 13 },
      { label: "Only what staff recall", pts: 4 },
      { label: "No idea", pts: 0 },
    ],
  },
];

function diagnosis(score: number) {
  if (score >= 80)
    return {
      tier: "Tight ship",
      body: "Your desk covers most of the week. The remaining leaks are the expensive kind: simultaneous calls and the follow-ups nobody owns. Worth measuring precisely.",
    };
  if (score >= 55)
    return {
      tier: "Leaking at the edges",
      body: "The core works during opening hours, but nights, weekends and follow-through are leaking bookings every week. This is the profile the audit helps most.",
    };
  if (score >= 30)
    return {
      tier: "Leaking badly",
      body: "A meaningful share of your inquiries never becomes a booking. The good news: this profile sees the fastest wins, because the leaks are systematic, not random.",
    };
  return {
    tier: "Running blind",
    body: "Right now you cannot see what you are losing, which usually means it is a lot. Start with the free audit: it replaces guesses with your own numbers.",
  };
}

export default function HealthScoreQuiz() {
  const [answers, setAnswers] = useState<(number | null)[]>(
    QUESTIONS.map(() => null),
  );
  const [result, setResult] = useState<number | null>(null);

  const answered = answers.filter((a) => a !== null).length;
  const complete = answered === QUESTIONS.length;

  function submit() {
    const score = answers.reduce<number>(
      (sum, a, i) => sum + (a !== null ? QUESTIONS[i].options[a].pts : 0),
      0,
    );
    setResult(score);
    track("calculator_completed", {
      tool: "front-desk-health-score",
      score,
    });
  }

  if (result !== null) {
    const d = diagnosis(result);
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
        className="panel-void dots p-8 text-paper sm:p-10"
      >
        <p className="label text-void-muted">Your front desk health score</p>
        <p className="mt-4 font-display text-7xl font-medium tracking-tight">
          {result}
          <span className="text-3xl text-void-muted">/100</span>
        </p>
        <div className="mt-4 h-1.5 w-full max-w-sm overflow-hidden rounded-full bg-void-line">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE_OUT }}
            style={{ width: `${result}%`, transformOrigin: "left" }}
            className="h-full bg-signal-bright"
          />
        </div>
        <p className="mt-6 font-display text-2xl font-medium tracking-tight">
          {d.tier}
        </p>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-void-muted">
          {d.body}
        </p>
        <Link
          href="/leak-audit"
          className="btn-shimmer btn-shimmer-dark label mt-8 inline-flex w-fit cursor-pointer items-center gap-3 rounded-full bg-paper py-3 pr-7 pl-3 text-ink transition-opacity hover:opacity-90"
        >
          <span className="chip-amber" aria-hidden>
            <Radar size={15} strokeWidth={2.2} />
          </span>
          Get the exact numbers, free
        </Link>
        <button
          type="button"
          onClick={() => {
            setAnswers(QUESTIONS.map(() => null));
            setResult(null);
          }}
          className="label mt-4 block cursor-pointer text-void-muted underline underline-offset-4 hover:text-paper"
        >
          Retake
        </button>
      </motion.div>
    );
  }

  return (
    <div className="card p-6 sm:p-8">
      <ol className="space-y-8">
        {QUESTIONS.map((question, qi) => (
          <li key={question.q}>
            <p className="font-semibold text-ink">
              <span className="label mr-2 text-signal">0{qi + 1}</span>
              {question.q}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {question.options.map((opt, oi) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => {
                    const next = [...answers];
                    next[qi] = oi;
                    setAnswers(next);
                  }}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-[14px] font-medium transition-colors ${
                    answers[qi] === oi
                      ? "border-signal bg-signal/10 text-signal"
                      : "border-hairline bg-white text-ink-soft hover:border-ink hover:text-ink"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-8 flex items-center gap-4">
        <button
          type="button"
          disabled={!complete}
          onClick={submit}
          className="btn-shimmer label cursor-pointer rounded-full bg-ink px-8 py-4 text-paper transition-opacity hover:opacity-85 disabled:opacity-40"
        >
          Score my front desk
        </button>
        <span className="label text-faint">
          {answered}/{QUESTIONS.length} answered
        </span>
      </div>
    </div>
  );
}
