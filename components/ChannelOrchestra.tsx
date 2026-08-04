"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageCircle,
  MessageSquareText,
  Mail,
  Globe,
  AudioWaveform,
  CalendarCheck,
  BellRing,
  Star,
  type LucideIcon,
} from "lucide-react";
import { EASE_OUT } from "./motion-primitives";

/*
 * Channel orchestration visual: five inbound channels converge on the
 * Awaaz Labs hub, which streams streamlined outcomes out the other side.
 * Beams are SVG paths; the traveling pulses ride them via SMIL
 * animateMotion (no JS per frame). Layout coordinates live in one
 * viewBox so HTML nodes and SVG paths stay aligned at every size.
 */

const W = 460;
const H = 430;

const HUB = { x: 230, y: 215 };

const CHANNELS: { icon: LucideIcon; label: string; y: number }[] = [
  { icon: Phone, label: "Phone", y: 45 },
  { icon: MessageCircle, label: "WhatsApp", y: 130 },
  { icon: MessageSquareText, label: "SMS", y: 215 },
  { icon: Mail, label: "Email", y: 300 },
  { icon: Globe, label: "Web form", y: 385 },
];

const OUTPUTS: { icon: LucideIcon; label: string; y: number }[] = [
  { icon: CalendarCheck, label: "Booked", y: 110 },
  { icon: BellRing, label: "Reminded", y: 215 },
  { icon: Star, label: "Reviewed", y: 320 },
];

const VERBS = ["answering", "booking", "reminding", "recovering", "reviewing"];

const CH_X = 52; // channel node center
const OUT_X = 392; // output node center

function inPath(y: number, i: number) {
  const spread = (i - 2) * 9; // fan the arrivals so they don't stack
  return `M ${CH_X + 26} ${y} C ${CH_X + 96} ${y}, ${HUB.x - 110} ${
    HUB.y + spread
  }, ${HUB.x - 40} ${HUB.y + spread}`;
}

function outPath(y: number, i: number) {
  const spread = (i - 1) * 9;
  return `M ${HUB.x + 40} ${HUB.y + spread} C ${HUB.x + 110} ${
    HUB.y + spread
  }, ${OUT_X - 96} ${y}, ${OUT_X - 34} ${y}`;
}

function pct(x: number, y: number) {
  return { left: `${(x / W) * 100}%`, top: `${(y / H) * 100}%` };
}

export default function ChannelOrchestra() {
  const [verb, setVerb] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setVerb((v) => (v + 1) % VERBS.length), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      role="img"
      aria-label="Five channels, phone, WhatsApp, SMS, email and web forms, flow into the Awaaz Labs platform, which returns bookings, reminders and reviews"
      className="relative w-full"
      style={{ aspectRatio: `${W} / ${H}` }}
    >
      {/* Beams */}
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="beam-in" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#E5E2DC" />
            <stop offset="1" stopColor="#D946EF" stopOpacity="0.45" />
          </linearGradient>
          <linearGradient id="beam-out" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#D946EF" stopOpacity="0.45" />
            <stop offset="1" stopColor="#E5E2DC" />
          </linearGradient>
        </defs>
        {CHANNELS.map((c, i) => (
          <path
            key={c.label}
            d={inPath(c.y, i)}
            fill="none"
            stroke="url(#beam-in)"
            strokeWidth="1.2"
          />
        ))}
        {OUTPUTS.map((o, i) => (
          <path
            key={o.label}
            d={outPath(o.y, i)}
            fill="none"
            stroke="url(#beam-out)"
            strokeWidth="1.2"
          />
        ))}
        {/* Traveling pulses (hidden under reduced motion via CSS) */}
        {CHANNELS.map((c, i) => (
          <circle key={c.label} r="2.6" fill="#D946EF" className="orchestra-dot">
            <animateMotion
              dur="2.6s"
              begin={`${i * 0.52}s`}
              repeatCount="indefinite"
              path={inPath(c.y, i)}
            />
          </circle>
        ))}
        {OUTPUTS.map((o, i) => (
          <circle key={o.label} r="2.6" fill="#FFC800" className="orchestra-dot">
            <animateMotion
              dur="2.6s"
              begin={`${0.9 + i * 0.75}s`}
              repeatCount="indefinite"
              path={outPath(o.y, i)}
            />
          </circle>
        ))}
      </svg>

      {/* Channel nodes */}
      {CHANNELS.map((c, i) => (
        <motion.div
          key={c.label}
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease: EASE_OUT }}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
          style={pct(CH_X, c.y)}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-hairline bg-white text-ink shadow-[0_1px_2px_rgba(15,14,12,0.05),0_6px_16px_-8px_rgba(15,14,12,0.12)]">
            <c.icon size={17} strokeWidth={1.9} aria-hidden />
          </span>
          <span className="label text-[9px] whitespace-nowrap text-faint">
            {c.label}
          </span>
        </motion.div>
      ))}

      {/* Hub */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: EASE_OUT }}
        className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
        style={pct(HUB.x, HUB.y)}
      >
        <span className="relative flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-ink text-paper shadow-[0_8px_24px_-8px_rgba(15,14,12,0.4)]">
          <AudioWaveform size={28} strokeWidth={1.8} aria-hidden />
          {[0, 1].map((i) => (
            <motion.span
              key={i}
              animate={{ scale: [1, 1.55], opacity: [0.35, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                delay: i * 1.1,
                ease: "easeOut",
              }}
              className="absolute inset-0 rounded-2xl border border-signal-bright"
            />
          ))}
        </span>
        <span className="label whitespace-nowrap text-ink">Awaaz Labs</span>
        <span className="flex h-4 items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={verb}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.25, ease: EASE_OUT }}
              className="font-mono text-[10px] tracking-widest text-signal uppercase"
            >
              {VERBS[verb]}
            </motion.span>
          </AnimatePresence>
        </span>
      </motion.div>

      {/* Outcome nodes */}
      {OUTPUTS.map((o, i) => (
        <motion.div
          key={o.label}
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 + i * 0.12, ease: EASE_OUT }}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full border border-hairline bg-white p-1.5 shadow-[0_1px_2px_rgba(15,14,12,0.05),0_6px_16px_-8px_rgba(15,14,12,0.12)] sm:py-1 sm:pr-3 sm:pl-1.5"
          style={pct(OUT_X, o.y)}
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-signal/10 text-signal">
            <o.icon size={11} strokeWidth={2.2} aria-hidden />
          </span>
          <span className="hidden text-[11px] font-medium whitespace-nowrap text-ink sm:inline">
            {o.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
