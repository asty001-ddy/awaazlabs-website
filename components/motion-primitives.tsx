"use client";

import {
  animate,
  motion,
  MotionConfig,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

/** Slow-out easing: fast start, gentle settle (animation principle 6). */
export const EASE_OUT: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

/** Global wrapper: honors prefers-reduced-motion for every child animation. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/** Scroll-reveal: fade + rise, fires once when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  className,
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

/** Container whose children (wrapped in StaggerItem) cascade in one after another. */
export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

/**
 * Headline mask reveal: text rises out of an overflow-hidden clip.
 * Wrap display headlines; keeps layout identical when settled.
 */
export function MaskReveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [forced, setForced] = useState(false);

  // Headings must never stay hidden: if the in-view trigger hasn't fired
  // within a few seconds (throttled tab, IO quirk), reveal anyway.
  useEffect(() => {
    const t = setTimeout(() => setForced(true), 4000);
    return () => clearTimeout(t);
  }, []);

  // Transform animations are disabled under reduced motion, which would
  // leave the heading permanently clipped. Render it static instead.
  if (reduced) {
    return <span className={`block ${className ?? ""}`}>{children}</span>;
  }

  const show = inView || forced;

  return (
    <span className="block overflow-hidden">
      <motion.span
        ref={ref}
        initial={{ y: "105%", opacity: 0.001 }}
        animate={show ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay, ease: EASE_OUT }}
        className={`block ${className ?? ""}`}
      >
        {children}
      </motion.span>
    </span>
  );
}

/**
 * Feeds pointer coordinates to the .card-lift spotlight gradient.
 * Renders nothing; mount once per page.
 */
export function PointerGlow() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest?.(".card-lift");
      if (!(card instanceof HTMLElement)) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
  return null;
}

/**
 * Amber marker highlight that draws itself under a key word.
 */
export function Marker({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <span className="marker relative z-0">
        {children}
        <span aria-hidden className="marker-ink" />
      </span>
    );
  }

  return (
    <span className="marker relative z-0">
      {children}
      <motion.span
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.5, ease: EASE_OUT }}
        className="marker-ink"
      />
    </span>
  );
}

/**
 * Animates a real number from 0 when scrolled into view.
 * Only for approved, factual figures; jumps straight to the value
 * when the user prefers reduced motion.
 */
export function CountUp({
  to,
  suffix = "",
  duration = 1.4,
  className,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: EASE_OUT,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}

/**
 * Cycles 0..steps-1 on an interval once in view. Drives the looping
 * mini-UI vignettes inside cards.
 */
export function useCycle(steps: number, ms: number) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-60px" });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setStep((s) => (s + 1) % steps), ms);
    return () => clearInterval(id);
  }, [inView, steps, ms]);

  return { ref, step };
}
