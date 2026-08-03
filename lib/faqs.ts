/**
 * Single source of truth for FAQ copy: rendered in the FAQ section and
 * serialized as FAQPage JSON-LD. Keep both in sync by editing only this file.
 */
export const FAQS = [
  {
    question: "Will it sound like a robot?",
    answer:
      "Call the demo line and decide for yourself. Customers regularly finish the conversation without asking. When they do ask, it answers honestly.",
  },
  {
    question: "Does it replace my staff?",
    answer:
      "No. It covers the hours and overflow they physically cannot, and hands them booked, qualified customers. Your team spends their day with the people in front of them.",
  },
  {
    question: "What about questions it shouldn't answer?",
    answer:
      "Anything requiring professional judgment routes to your team immediately. That line is hard-coded, not hoped for.",
  },
  {
    question: "Do I have to change my systems?",
    answer:
      "No. It integrates with the phone number, WhatsApp, calendar and tools you already run.",
  },
  {
    question: "How fast is setup?",
    answer:
      "Two to three weeks from agreement to full 24/7 rollout, with a live-traffic pilot before you commit to it fully.",
  },
  {
    question: "What does it cost?",
    answer:
      "A one-time build per agent, then a monthly plan sized to your volume. Less per hour of coverage than any human alternative. Pricing page has the full table.",
  },
] as const;
