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

/**
 * A1 (Brief 5): true only in Netlify's production context, or in a
 * deliberate local prod build where CONTEXT is unset. Branch deploys
 * and deploy previews are never production: they noindex, hide the
 * sitemap, skip analytics, show the staging ribbon, and never forward
 * form submissions.
 */
export const IS_PRODUCTION =
  !process.env.CONTEXT || process.env.CONTEXT === "production";

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

/*
 * Nav rules: dropdown triggers are themselves links to their hub page.
 * Dropdowns list base pages only. City pages never appear in the nav:
 * they are local-SEO assets, crawlable from the footer and their base
 * page's body links.
 */
export const NAV = {
  industriesHub: "/industries",
  industries: [
    { label: "Aesthetics and med spas", href: "/industries/aesthetics" },
    { label: "Real estate", href: "/industries/real-estate" },
  ],
  toolsHub: "/tools",
  tools: [
    {
      label: "Missed call cost calculator",
      href: "/tools/missed-call-cost-calculator",
    },
    { label: "Front desk health score", href: "/tools/front-desk-health-score" },
    { label: "Build your agent", href: "/tools/build-your-agent" },
  ],
  single: [
    { label: "Platform", href: "/platform" },
    { label: "Customers", href: "/customers" },
    { label: "Blog", href: "/blog" },
  ],
} as const;

/** City pages: footer-only links (local SEO paths to the money pages). */
export const CITY_LINKS = [
  { label: "AI front desk for Dubai aesthetics", href: "/industries/aesthetics/dubai" },
  { label: "AI front desk for Dubai real estate", href: "/industries/real-estate/dubai" },
] as const;

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
      { label: "Platform", href: "/platform" },
      { label: "Industries", href: "/industries" },
      { label: "Integrations", href: "/integrations" },
      { label: "Tools", href: "/tools" },
      { label: "Customers", href: "/customers" },
      { label: "Demo", href: "/demo" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Partners", href: "/partners" },
      { label: "Learn", href: "/learn" },
      { label: "Vs hiring a receptionist", href: "/compare/hiring-a-receptionist" },
    ],
  },
  {
    heading: "Get started",
    links: [
      { label: "Free leak audit", href: "/leak-audit" },
      { label: "Book a free sales call", href: "/book-a-call" },
      { label: "Missed call cost calculator", href: "/tools/missed-call-cost-calculator" },
      { label: "Guides and blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Local",
    links: [...CITY_LINKS],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
] as const;
