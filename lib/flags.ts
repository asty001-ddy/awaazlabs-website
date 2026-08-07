/**
 * Build-time feature flags. NEXT_PUBLIC_ vars are inlined at build,
 * so flipping a flag means redeploying.
 */

/**
 * Case studies: Advanzatech and Sirius Solutions Global sign-offs were
 * confirmed (Aug 2026), so the pages default to live: indexable, in the
 * sitemap, linked from /customers. Set NEXT_PUBLIC_CASE_STUDIES_LIVE to
 * "false" to re-gate them if a sign-off is ever withdrawn.
 */
export const CASE_STUDIES_LIVE =
  process.env.NEXT_PUBLIC_CASE_STUDIES_LIVE !== "false";
