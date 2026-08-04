"use client";

/**
 * Session attribution: first-touch UTM params + referrer, captured on
 * the first page of the visit and persisted for the session. Makes
 * SDR outreach links (which carry UTMs) separable from organic in
 * both the leak-audit webhook payload and GA4 events.
 */

const KEY = "awaaz_attribution";
const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
] as const;

export type Attribution = Record<string, string>;

/** Capture once per session; first touch wins. Safe to call anywhere. */
export function captureAttribution() {
  if (typeof window === "undefined") return;
  try {
    if (sessionStorage.getItem(KEY)) return;
    const params = new URLSearchParams(window.location.search);
    const attr: Attribution = {};
    for (const k of UTM_KEYS) {
      const v = params.get(k);
      if (v) attr[k] = v.slice(0, 200);
    }
    if (document.referrer) attr.referrer = document.referrer.slice(0, 500);
    attr.landing_page = window.location.pathname;
    sessionStorage.setItem(KEY, JSON.stringify(attr));
  } catch {
    // sessionStorage unavailable (private mode edge cases): skip silently
  }
}

export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(sessionStorage.getItem(KEY) ?? "{}");
  } catch {
    return {};
  }
}
