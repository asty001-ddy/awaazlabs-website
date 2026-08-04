/**
 * Build-time feature flags. NEXT_PUBLIC_ vars are inlined at build,
 * so flipping a flag means redeploying.
 */

/**
 * Case studies ship gated until client sign-off is confirmed in the
 * deploy environment. Off (default): pages render for review but are
 * noindex/nofollow, out of the sitemap, and unlinked from /customers.
 */
export const CASE_STUDIES_LIVE =
  process.env.NEXT_PUBLIC_CASE_STUDIES_LIVE === "true";
