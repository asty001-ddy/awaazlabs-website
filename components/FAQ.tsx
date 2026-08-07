"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "./motion-primitives";
import { FAQS } from "@/lib/faqs";

function FaqItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-hairline">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-4 py-6 text-left"
      >
        <span className="font-display text-xl font-medium tracking-tight text-ink sm:text-2xl">
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="shrink-0 text-ink"
        >
          <Plus size={20} aria-hidden />
        </motion.span>
      </button>
      {/*
       * SEO-critical: the answer is ALWAYS in the DOM (server-rendered
       * for crawlers and AI engines) and only visually collapsed via
       * the animatable grid-rows technique. Never conditionally render
       * this block.
       */}
      <div
        aria-hidden={!open}
        className="grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.21,0.47,0.32,0.98)]"
        style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-ink-soft">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <p className="label text-faint">FAQ</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] font-medium tracking-tight text-ink sm:text-5xl">
              The questions every owner asks.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-t border-hairline">
              {FAQS.map((faq, i) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
