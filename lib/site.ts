/**
 * Central site config: routes, nav, CTA pair, verticals.
 * Hard rules (master-build-v5): no pricing anywhere; CTA pair is
 * "Get your free leak audit" (primary) / "Book a free sales call" (secondary).
 */
export const LINKS = {
  leakAudit: "/leak-audit",
  bookCall: "/book-a-call",
  demo: "/demo",
  /** Legacy aliases still referenced by older components */
  auditRequest: "/leak-audit",
  demoCall: "/demo",
} as const;

export const TAGLINE = "Miss nothing. Book everything.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://awaazlabs.io";

/** Phase 1 verticals with live pages. Vehicle recovery removed (GAP 13). */
export const INDUSTRIES = [
  {
    slug: "aesthetics",
    name: "Aesthetics and med spas",
    short: "Aesthetics",
    live: true,
    text: "Consultations booked while your competitors sleep.",
  },
  {
    slug: "real-estate",
    name: "Real estate",
    short: "Real estate",
    live: true,
    text: "Every listing inquiry answered before the buyer moves on.",
  },
  {
    slug: "dental",
    name: "Dental clinics",
    short: "Dental",
    live: false,
    text: "Fewer empty chairs, fewer no-shows, more recalls completed.",
  },
  {
    slug: "restaurants",
    name: "Restaurants",
    short: "Restaurants",
    live: false,
    text: "Reservations taken on the third ring of a Friday rush.",
  },
  {
    slug: "home-services",
    name: "Home services",
    short: "Home services",
    live: false,
    text: "Jobs booked from the roof, the crawlspace, wherever you are.",
  },
] as const;

export const NAV = {
  industries: [
    { label: "All industries", href: "/industries" },
    { label: "Aesthetics and med spas", href: "/industries/aesthetics" },
    { label: "Aesthetics, Dubai", href: "/industries/aesthetics/dubai" },
    { label: "Real estate", href: "/industries/real-estate" },
    { label: "Real estate, Dubai", href: "/industries/real-estate/dubai" },
  ],
  tools: [
    { label: "All tools", href: "/tools" },
    {
      label: "Missed revenue calculator",
      href: "/tools/missed-revenue-calculator",
    },
  ],
  single: [
    { label: "Customers", href: "/customers" },
    { label: "Demo", href: "/demo" },
  ],
} as const;

/** Universal trust strip: confirmed, approved claims only. */
export const TRUST_CLAIMS = [
  "In-region data residency",
  "HIPAA-architected",
  "ISO 27001 aligned",
  "End-to-end encrypted",
  "Full audit trail",
] as const;

export const FOOTER_LINKS = [
  {
    heading: "Product",
    links: [
      { label: "Industries", href: "/industries" },
      { label: "Tools", href: "/tools" },
      { label: "Customers", href: "/customers" },
      { label: "Demo", href: "/demo" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    heading: "Get started",
    links: [
      { label: "Free leak audit", href: "/leak-audit" },
      { label: "Book a free sales call", href: "/book-a-call" },
      { label: "Missed revenue calculator", href: "/tools/missed-revenue-calculator" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
] as const;
