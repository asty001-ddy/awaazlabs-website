"use client";

import { useEffect } from "react";
import Link from "next/link";
import { track } from "@/lib/analytics";
import { getAttribution } from "@/lib/attribution";

/**
 * Scheduler embed. Set NEXT_PUBLIC_SCHEDULER_URL (Cal.com/Calendly)
 * to activate; until then a WhatsApp/email fallback keeps the page
 * functional. call_booked fires on the scheduler's postMessage
 * confirmation (Calendly and Cal.com both emit one).
 */
const SCHEDULER_URL = process.env.NEXT_PUBLIC_SCHEDULER_URL;

export default function SchedulerEmbed() {
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      const d = e.data;
      const isCalendly = d?.event === "calendly.event_scheduled";
      // Cal.com posts either {type: "bookingSuccessful"} or the
      // namespaced {fullType: "CAL:bookingSuccessful"} shape
      const isCalcom =
        d?.type === "bookingSuccessful" ||
        (typeof d?.fullType === "string" &&
          d.fullType.includes("bookingSuccessful"));
      if (isCalendly || isCalcom) track("call_booked", getAttribution());
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  if (!SCHEDULER_URL) {
    return (
      <div className="card p-8">
        <p className="text-lg leading-relaxed text-ink-soft">
          Our scheduler is being set up. In the meantime, request your{" "}
          <Link href="/leak-audit" className="font-semibold text-ink underline underline-offset-4">
            free leak audit
          </Link>{" "}
          or write to{" "}
          <a href="mailto:hello@awaazlabs.io" className="font-semibold text-ink underline underline-offset-4">
            hello@awaazlabs.io
          </a>{" "}
          and we will reply with times within one business day.
        </p>
      </div>
    );
  }

  return (
    <div className="card overflow-hidden">
      <iframe
        src={SCHEDULER_URL}
        title="Book a free sales call"
        className="h-[720px] w-full"
        loading="lazy"
      />
    </div>
  );
}
