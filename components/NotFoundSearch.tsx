"use client";

import { useState } from "react";
import Link from "next/link";

const DESTINATIONS = [
  { label: "Home", href: "/", terms: "home main start" },
  { label: "Industries", href: "/industries", terms: "industries verticals who" },
  { label: "Aesthetics and med spas", href: "/industries/aesthetics", terms: "aesthetics medspa clinic beauty" },
  { label: "Aesthetics, Dubai", href: "/industries/aesthetics/dubai", terms: "dubai aesthetics clinic" },
  { label: "Real estate", href: "/industries/real-estate", terms: "real estate property broker" },
  { label: "Real estate, Dubai", href: "/industries/real-estate/dubai", terms: "dubai real estate property" },
  { label: "Free leak audit", href: "/leak-audit", terms: "audit leak free start" },
  { label: "Book a free sales call", href: "/book-a-call", terms: "call book sales demo talk" },
  { label: "Missed call cost calculator", href: "/tools/missed-call-cost-calculator", terms: "calculator revenue cost tools missed" },
  { label: "Tools", href: "/tools", terms: "tools free" },
  { label: "Platform", href: "/platform", terms: "platform product system how" },
  { label: "Front desk health score", href: "/tools/front-desk-health-score", terms: "quiz score health diagnostic" },
  { label: "Build your agent", href: "/tools/build-your-agent", terms: "agent demo voice build" },
  { label: "Integrations", href: "/integrations", terms: "integrations whatsapp calendar calendly" },
  { label: "Learn", href: "/learn", terms: "learn guides what is cost" },
  { label: "Blog", href: "/blog", terms: "blog guides articles" },
  { label: "About", href: "/about", terms: "about company team founder" },
  { label: "Partners", href: "/partners", terms: "partners referral agency" },
  { label: "Customers", href: "/customers", terms: "customers proof case studies" },
  { label: "Demo recordings", href: "/demo", terms: "demo hear listen audio" },
  { label: "Security", href: "/security", terms: "security privacy data compliance" },
  { label: "Contact", href: "/contact", terms: "contact email support" },
];

export default function NotFoundSearch() {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();
  const results = query
    ? DESTINATIONS.filter(
        (d) =>
          d.label.toLowerCase().includes(query) || d.terms.includes(query),
      )
    : [];

  return (
    <div className="mt-10">
      <label htmlFor="nf-search" className="label mb-2 block text-ink-soft">
        Search the site
      </label>
      <input
        id="nf-search"
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Try: audit, dubai, calculator"
        className="w-full max-w-md rounded-xl border border-hairline bg-white px-4 py-3.5 text-[15px] text-ink placeholder:text-faint focus:border-ink focus:outline-none"
      />
      {query && (
        <ul className="mt-4 max-w-md divide-y divide-hairline border-y border-hairline">
          {(results.length ? results : DESTINATIONS.slice(0, 4)).map((d) => (
            <li key={d.href}>
              <Link
                href={d.href}
                className="block py-3 text-[15px] font-medium text-ink transition-colors hover:text-signal"
              >
                {d.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
