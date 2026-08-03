"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Lock,
  Check,
  BellRing,
  PhoneOutgoing,
  Mail,
  MessageCircle,
  CalendarDays,
  ClipboardCheck,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import {
  Reveal,
  Stagger,
  StaggerItem,
  MaskReveal,
  Marker,
  useCycle,
  EASE_OUT,
} from "./motion-primitives";

const CHANNELS = ["Phone", "WhatsApp", "SMS", "Email", "Web forms"];

/* Small tinted icon tile that gives each capability its own hue */
function IconTile({
  icon: Icon,
  tint,
}: {
  icon: LucideIcon;
  tint: string;
}) {
  return (
    <span
      className={`flex h-8 w-8 items-center justify-center rounded-lg ${tint}`}
      aria-hidden
    >
      <Icon size={16} strokeWidth={2.2} />
    </span>
  );
}

/* ---------- Answer: looping bilingual chat ---------- */

function AnswerCard() {
  const { ref, step } = useCycle(5, 1500);

  return (
    <StaggerItem className="card card-lift overflow-hidden sm:col-span-2 lg:col-span-4">
      <div ref={ref} className="grid gap-0 lg:grid-cols-[1fr_1fr]">
        <div className="p-7">
          <div className="flex items-center gap-3">
            <IconTile icon={MessageCircle} tint="bg-emerald-100 text-emerald-700" />
            <p className="label text-faint">Answer</p>
          </div>
          <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-ink">
            Every channel, in seconds, 24/7
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
            Arabic, English, Hindi or Urdu, switched mid-conversation. Three
            inquiries at once are three conversations, not two lost customers.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {CHANNELS.map((c, i) => (
              <span
                key={c}
                className="flex items-center gap-2 rounded-full border border-hairline px-3.5 py-1.5 text-[13px] font-medium text-ink"
              >
                <motion.span
                  animate={{ opacity: [0.25, 1, 0.25] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                  className="h-1.5 w-1.5 rounded-full bg-signal-bright"
                />
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Chat vignette */}
        <div className="gridlines border-t border-hairline bg-paper/60 lg:border-t-0 lg:border-l">
          <div className="chrome">
            <span className="chrome-dot" />
            <span className="chrome-dot" />
            <span className="chrome-dot" />
            <span className="label ml-2 text-faint">9:47 PM, WhatsApp</span>
          </div>
          <div className="flex min-h-[220px] flex-col justify-end gap-2.5 p-5">
            <AnimatePresence>
              {step >= 0 && (
                <motion.p
                  key="in"
                  dir="rtl"
                  initial={{ opacity: 0, y: 14, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, ease: EASE_OUT }}
                  className="self-start rounded-2xl rounded-bl-sm border border-hairline bg-white px-4 py-2.5 text-sm text-ink"
                >
                  مرحبا، هل عندكم موعد بكرة؟
                </motion.p>
              )}
              {step === 1 && (
                <motion.span
                  key="typing"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex gap-1 self-end rounded-2xl rounded-br-sm bg-ink px-4 py-3"
                >
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 0.9,
                        repeat: Infinity,
                        delay: i * 0.15,
                      }}
                      className="h-1.5 w-1.5 rounded-full bg-paper"
                    />
                  ))}
                </motion.span>
              )}
              {step >= 2 && (
                <motion.p
                  key="reply"
                  dir="rtl"
                  initial={{ opacity: 0, y: 14, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, ease: EASE_OUT }}
                  className="self-end rounded-2xl rounded-br-sm bg-ink px-4 py-2.5 text-sm text-paper"
                >
                  أهلا، نعم متاح بكرة الساعة ٣:٣٠. أحجز لك؟
                </motion.p>
              )}
              {step >= 3 && (
                <motion.p
                  key="confirm"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE_OUT }}
                  className="self-start rounded-2xl rounded-bl-sm border border-hairline bg-white px-4 py-2.5 text-sm text-ink"
                >
                  Yes please, 3:30 works
                </motion.p>
              )}
              {step >= 4 && (
                <motion.span
                  key="booked"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="flex items-center gap-2 self-center rounded-full bg-signal px-4 py-1.5 text-[13px] font-semibold text-white"
                >
                  <Check size={13} strokeWidth={3} /> Booked, Tuesday 3:30 PM
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </StaggerItem>
  );
}

/* ---------- Calendar: cycling day view ---------- */

const SLOTS = [
  { time: "9:00", label: "Consultation" },
  { time: "10:30", label: "Follow-up visit" },
  { time: "12:00", label: "New patient" },
  { time: "2:30", label: "Rebooked no-show" },
  { time: "4:00", label: "Reactivated client" },
];

function CalendarCard() {
  const { ref, step } = useCycle(SLOTS.length, 1400);

  return (
    <StaggerItem className="card card-lift overflow-hidden lg:col-span-2">
      <div ref={ref}>
        <div className="chrome">
          <span className="chrome-dot" />
          <span className="chrome-dot" />
          <span className="chrome-dot" />
          <span className="label ml-2 text-faint">Tuesday</span>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3">
            <IconTile icon={CalendarDays} tint="bg-amber-100 text-amber-700" />
            <p className="label text-faint">Book and manage</p>
          </div>
          <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-ink">
            A calendar that fills itself
          </h3>
          <ul className="mt-4">
            {SLOTS.map((slot, i) => (
              <motion.li
                key={slot.time}
                animate={{
                  backgroundColor:
                    step === i ? "rgba(23, 178, 106, 0.08)" : "rgba(0,0,0,0)",
                }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3 rounded-md border-b border-hairline px-2 py-2.5 last:border-0"
              >
                <span className="w-10 text-xs text-faint tabular-nums">
                  {slot.time}
                </span>
                <span className="text-sm font-medium text-ink">
                  {slot.label}
                </span>
                <motion.span
                  animate={{ scale: step === i ? 1.4 : 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="ml-auto h-1.5 w-1.5 rounded-full bg-signal-bright"
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </StaggerItem>
  );
}

/* ---------- Intake: self-completing checklist ---------- */

const INTAKE = [
  "Full name",
  "Reason for visit",
  "Preferred time",
  "How they found you",
];

function IntakeCard() {
  const { ref, step } = useCycle(INTAKE.length + 2, 1100);
  const done = Math.min(step, INTAKE.length);

  return (
    <StaggerItem className="card card-lift lg:col-span-2">
      <div ref={ref} className="p-6">
        <div className="flex items-center gap-3">
          <IconTile icon={ClipboardCheck} tint="bg-sky-100 text-sky-700" />
          <p className="label text-faint">Intake</p>
        </div>
        <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-ink">
          Customers arrive already qualified
        </h3>
        <div className="mt-4 h-1 overflow-hidden rounded-full bg-hairline">
          <motion.div
            animate={{ width: `${(done / INTAKE.length) * 100}%` }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className="h-full bg-signal"
          />
        </div>
        <ul className="mt-4 space-y-2.5">
          {INTAKE.map((field, i) => (
            <li key={field} className="flex items-center gap-2.5 text-sm">
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full border transition-colors duration-300 ${
                  i < done
                    ? "border-signal bg-signal text-white"
                    : "border-hairline bg-white"
                }`}
              >
                {i < done && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <Check size={11} strokeWidth={3.5} />
                  </motion.span>
                )}
              </span>
              <span className={i < done ? "text-ink" : "text-faint"}>
                {field}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[13px] leading-relaxed text-faint">
          Qualified in the conversation. Hot leads reach your team instantly.
        </p>
      </div>
    </StaggerItem>
  );
}

/* ---------- Remind: alternating outbound messages ---------- */

const NUDGES = [
  { icon: BellRing, via: "WhatsApp", text: "Reminder sent, 24h before the visit" },
  { icon: Mail, via: "Email", text: "Follow-up sent on the unanswered quote" },
  { icon: BellRing, via: "SMS", text: "Confirmation requested for tomorrow" },
];

function RemindCard() {
  const { ref, step } = useCycle(NUDGES.length, 2000);
  const nudge = NUDGES[step];

  return (
    <StaggerItem className="card card-lift lg:col-span-2">
      <div ref={ref} className="flex h-full flex-col p-6">
        <div className="flex items-center gap-3">
          <IconTile icon={BellRing} tint="bg-violet-100 text-violet-700" />
          <p className="label text-faint">Remind and follow up</p>
        </div>
        <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-ink">
          Revenue protected before it walks
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
          Confirmations, reminders and email follow-ups go out on time, every
          time.
        </p>
        <div className="mt-auto min-h-[76px] pt-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.35, ease: EASE_OUT }}
              className="flex items-center gap-3 rounded-xl border border-hairline bg-paper/70 px-4 py-3"
            >
              <motion.span
                animate={{ rotate: [0, -12, 10, -6, 0] }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-ink"
              >
                <nudge.icon size={16} aria-hidden />
              </motion.span>
              <span className="text-sm text-ink">{nudge.text}</span>
              <span className="label ml-auto shrink-0 text-faint">
                {nudge.via}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </StaggerItem>
  );
}

/* ---------- Recover: pulse ring + rotating line ---------- */

const RECOVERIES = [
  "No-show called back and rebooked",
  "Missed inquiry returned in minutes",
  "Lapsed customer invited to return",
];

function RecoverCard() {
  const { ref, step } = useCycle(RECOVERIES.length, 2000);

  return (
    <StaggerItem className="card card-lift lg:col-span-2">
      <div ref={ref} className="flex h-full flex-col p-6">
        <div className="flex items-center gap-3">
          <IconTile icon={PhoneOutgoing} tint="bg-rose-100 text-rose-700" />
          <p className="label text-faint">Recover and reengage</p>
        </div>
        <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-ink">
          Win back what went quiet
        </h3>
        <div className="mt-6 flex items-center gap-5">
          <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-ink text-paper">
            <PhoneOutgoing size={18} aria-hidden />
            {[0, 1].map((i) => (
              <motion.span
                key={i}
                animate={{ scale: [1, 1.9], opacity: [0.4, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  delay: i * 0.9,
                  ease: "easeOut",
                }}
                className="absolute inset-0 rounded-full border border-ink"
              />
            ))}
          </span>
          <div className="min-h-[40px] flex-1">
            <AnimatePresence mode="wait">
              <motion.p
                key={step}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: EASE_OUT }}
                className="text-sm font-medium text-ink"
              >
                {RECOVERIES[step]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
        <p className="mt-5 text-[13px] leading-relaxed text-faint">
          Automatic callbacks for missed inquiries, no-shows and lapsed
          customers.
        </p>
      </div>
    </StaggerItem>
  );
}

/* ---------- Reviews: stars fill one by one ---------- */

function ReviewCard() {
  const { ref, step } = useCycle(8, 700);
  const filled = Math.min(step, 5);

  return (
    <StaggerItem className="card card-lift lg:col-span-3">
      <div ref={ref} className="p-7">
        <div className="flex items-center gap-3">
          <IconTile icon={Star} tint="bg-amber-100 text-amber-700" />
          <p className="label text-faint">Reviews</p>
        </div>
        <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-ink">
          A rating that compounds
        </h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
          After the visit, the thank-you goes out and the Google review gets
          asked for, every single time.
        </p>
        <div className="mt-6 flex items-center gap-4">
          <div className="flex gap-1.5" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.span
                key={i}
                animate={
                  i < filled
                    ? { scale: [0.6, 1.25, 1], opacity: 1 }
                    : { scale: 1, opacity: 0.25 }
                }
                transition={{ duration: 0.35, ease: EASE_OUT }}
              >
                <Star
                  size={22}
                  className={i < filled ? "fill-ink text-ink" : "text-faint"}
                />
              </motion.span>
            ))}
          </div>
          <AnimatePresence>
            {step >= 6 && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-full border border-hairline bg-paper/70 px-3 py-1 text-[12px] font-medium text-ink"
              >
                Review requested
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </StaggerItem>
  );
}

/* ---------- Verify: transcript writes itself ---------- */

function VerifyCard() {
  const { ref, step } = useCycle(6, 900);

  const widths = ["82%", "64%", "74%"];

  return (
    <StaggerItem className="card card-lift lg:col-span-3">
      <div ref={ref} className="p-7">
        <div className="flex items-center gap-3">
          <IconTile icon={ShieldCheck} tint="bg-emerald-100 text-emerald-700" />
          <p className="label text-faint">Verify</p>
        </div>
        <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-ink">
          You see everything
        </h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
          Every conversation transcribed, scored and flagged by Qualicall. No
          guessing what was said on Sunday.
        </p>
        <div className="mt-6 rounded-xl border border-hairline bg-paper/70 p-4">
          <div className="space-y-2.5">
            {widths.map((w, i) => (
              <motion.div
                key={i}
                animate={{
                  width: step > i ? w : "0%",
                  opacity: step > i ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: EASE_OUT }}
                className="h-2 rounded-full bg-hairline"
              />
            ))}
          </div>
          <AnimatePresence>
            {step >= 4 && (
              <motion.p
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-signal px-3 py-1 text-[12px] font-semibold text-white"
              >
                <Check size={12} strokeWidth={3} /> Transcribed and scored
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </StaggerItem>
  );
}

/* ---------- Section ---------- */

export default function Solution() {
  return (
    <section id="system" className="border-b border-hairline py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <Reveal>
          <p className="label text-faint">One system, the whole journey</p>
        </Reveal>
        <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] font-medium tracking-tight text-ink sm:text-5xl lg:text-6xl">
          <MaskReveal>From first ring to</MaskReveal>
          <MaskReveal delay={0.08}>
            five-star review. <Marker>Handled.</Marker>
          </MaskReveal>
        </h2>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Not a chatbot bolted to your website. A team of AI agents wired
            into the channels you already use, running your entire inbound
            operation:
          </p>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          <AnswerCard />
          <CalendarCard />
          <IntakeCard />
          <RemindCard />
          <RecoverCard />
          <ReviewCard />
          <VerifyCard />
        </Stagger>

        <Reveal delay={0.1}>
          <div className="card mt-5 flex items-start gap-4 p-6">
            <Lock size={18} className="mt-1 shrink-0 text-ink" aria-hidden />
            <p className="text-[15px] leading-relaxed text-ink-soft">
              <span className="font-semibold text-ink">
                The system knows where to stop.
              </span>{" "}
              Anything requiring professional judgment routes to your team.
              That boundary is hard-coded.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
