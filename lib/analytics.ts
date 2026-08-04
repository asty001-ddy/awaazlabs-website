/**
 * GA4 event helpers. No-ops when NEXT_PUBLIC_GA_ID is unset or gtag
 * has not loaded, so components can call track() unconditionally.
 * Event names are fixed by master-build-v5 section 5.
 */
export type ConversionEvent =
  | "audit_submitted"
  | "call_booked"
  | "calculator_completed"
  | "agent_session_started"
  | "demo_audio_played";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(
  event: ConversionEvent,
  params?: Record<string, string | number>,
) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", event, params ?? {});
}
