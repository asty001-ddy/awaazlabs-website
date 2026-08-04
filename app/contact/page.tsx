import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHero, CTABand } from "@/components/subpage";

export const metadata: Metadata = {
  title: "Contact | Awaaz Labs",
  description:
    "Reach Awaaz Labs: request a free leak audit, book a sales call, or email the team.",
  alternates: { canonical: "/contact" },
};

const ROUTES = [
  {
    title: "See your leak",
    body: "The free audit is the fastest way to a useful conversation. We contact your business like a customer and send you the findings.",
    href: "/leak-audit",
    label: "Get your free leak audit",
  },
  {
    title: "Talk to sales",
    body: "30 minutes, no obligation. You leave with your leak numbers either way.",
    href: "/book-a-call",
    label: "Book a free sales call",
  },
  {
    title: "Everything else",
    body: "Partnerships, press, security reviews, careers: email and a human replies within one business day.",
    href: "mailto:hello@awaazlabs.io",
    label: "hello@awaazlabs.io",
  },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: "Contact", href: "/contact" }]} />
      <PageHero
        label="Contact"
        title="Talk to a team that answers."
        lede="We are a front desk company. Unanswered messages would be embarrassing."
      />
      <div className="mx-auto grid max-w-[1200px] gap-5 px-5 pb-20 md:grid-cols-3 lg:px-8">
        {ROUTES.map((r) => (
          <div key={r.title} className="card card-lift flex flex-col p-7">
            <h2 className="font-display text-2xl font-medium tracking-tight text-ink">
              {r.title}
            </h2>
            <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">
              {r.body}
            </p>
            <Link
              href={r.href}
              className="label mt-6 text-ink underline decoration-hairline underline-offset-4 transition-colors hover:decoration-ink"
            >
              {r.label}
            </Link>
          </div>
        ))}
      </div>
      <CTABand />
    </>
  );
}
