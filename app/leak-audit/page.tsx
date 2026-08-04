import type { Metadata } from "next";
import LeakAuditForm from "@/components/LeakAuditForm";
import { Breadcrumbs, PageHero, TrustStrip, FaqBlock } from "@/components/subpage";

export const metadata: Metadata = {
  title: "Get Your Free Leak Audit | Awaaz Labs",
  description:
    "We call and message your business exactly like a customer would, log every point where an inquiry dies, and send you the findings on one page. Free, global, no pitch.",
  alternates: { canonical: "/leak-audit" },
};

const STEPS = [
  {
    title: "We mystery-shop your business",
    body: "Calls, WhatsApp, email and web form, at the hours your customers actually use them, including nights and weekends.",
  },
  {
    title: "We log where inquiries die",
    body: "Rings that went nowhere, messages that sat unread, forms that never got a reply, no-shows nobody chased.",
  },
  {
    title: "You get the numbers on one page",
    body: "A short, specific report of your leak points. Yours to keep whether or not we ever talk again.",
  },
];

const FAQS = [
  {
    question: "What does the leak audit cost?",
    answer:
      "Nothing. The audit is free, and the findings are yours to keep. There is no pitch attached to the report.",
  },
  {
    question: "How long does the audit take?",
    answer:
      "A few business days. We test your channels at realistic hours, including after hours, then write up the findings.",
  },
  {
    question: "Do you audit businesses outside the Gulf?",
    answer:
      "Yes. The audit is fulfilled globally. Wherever your customers call or message from, we can test it.",
  },
  {
    question: "What happens after I get the report?",
    answer:
      "You decide. Many owners book a call to walk through the findings. Others just fix what they can themselves.",
  },
];

export default function LeakAuditPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: "Free leak audit", href: "/leak-audit" }]} />
      <PageHero
        label="Free, global, uncomfortably specific"
        title="Find out exactly where your inquiries go to die."
        lede="We contact your business the way a customer would, then hand you a one-page report of every leak we find. Most owners are surprised."
      />
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 pb-20 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-8">
        <div>
          <ul className="space-y-8">
            {STEPS.map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <span className="label pt-1 text-signal">0{i + 1}</span>
                <div>
                  <h2 className="text-lg font-semibold text-ink">{s.title}</h2>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <LeakAuditForm />
      </div>
      <TrustStrip />
      <FaqBlock faqs={FAQS} />
    </>
  );
}
