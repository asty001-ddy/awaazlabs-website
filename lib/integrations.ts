/**
 * Integrations factory (teardown 1b). Claims rule: only name tools the
 * deployment genuinely works with today; everything else stays
 * category-level ("your booking system") until proven. Target query:
 * "{tool} AI receptionist".
 */

export type Integration = {
  slug: string;
  name: string;
  title: string;
  description: string;
  how: { title: string; body: string }[];
  faq: { question: string; answer: string }[];
  industry: { label: string; href: string };
};

export const INTEGRATIONS: Integration[] = [
  {
    slug: "whatsapp-business",
    name: "WhatsApp Business",
    title: "AI Receptionist for WhatsApp Business",
    description:
      "Every WhatsApp inquiry answered in seconds, in the customer's language, and turned into a booked appointment in the same thread. Voice notes included.",
    how: [
      {
        title: "Answers in seconds, any hour",
        body: "Texts and voice notes get an instant, natural reply in the customer's language, including Khaleeji, Levantine and Egyptian Arabic, with mid-conversation switching.",
      },
      {
        title: "Books in the same thread",
        body: "Qualification, availability and confirmation happen inside the chat. No links out unless you want them, no waiting for the desk to open.",
      },
      {
        title: "Follows through",
        body: "Reminders, no-show recovery and review requests ride the same WhatsApp thread the customer already trusts.",
      },
    ],
    faq: [
      {
        question: "Does it handle WhatsApp voice notes?",
        answer:
          "Yes. Voice notes are understood and answered like any other message, in the language the customer used.",
      },
      {
        question: "Do we keep our existing WhatsApp number?",
        answer:
          "Yes. The deployment runs on your WhatsApp Business presence; customers see the business they already message.",
      },
      {
        question: "Can staff still jump into conversations?",
        answer:
          "Yes. Your team sees every thread and can take over at any point; the agent hands off cleanly and logs the whole exchange.",
      },
    ],
    industry: { label: "Dubai aesthetics", href: "/industries/aesthetics/dubai" },
  },
  {
    slug: "google-calendar",
    name: "Google Calendar",
    title: "AI Receptionist for Google Calendar",
    description:
      "The front desk books, reschedules and confirms appointments directly against your Google Calendar availability, on every channel, around the clock.",
    how: [
      {
        title: "Real availability, live",
        body: "The agent offers times from your actual Google Calendar, respecting working hours, buffers and existing events.",
      },
      {
        title: "Booked before the goodbye",
        body: "The event lands on the right calendar with the customer's details attached, and the confirmation goes out on their channel.",
      },
      {
        title: "Changes handled",
        body: "Reschedules and cancellations update the calendar and trigger the right follow-up automatically.",
      },
    ],
    faq: [
      {
        question: "Which calendars can it book into?",
        answer:
          "Google Calendar directly, including per-practitioner or per-agent calendars. Other systems are wired during onboarding; ask about yours on a call.",
      },
      {
        question: "Can it respect different schedules per staff member?",
        answer:
          "Yes. Each bookable person or resource keeps their own availability, buffers and appointment types.",
      },
      {
        question: "What about double-booking?",
        answer:
          "Bookings are checked against live availability at confirmation time, so two customers cannot take the same slot.",
      },
    ],
    industry: { label: "Aesthetics and med spas", href: "/industries/aesthetics" },
  },
  {
    slug: "calendly",
    name: "Calendly",
    title: "AI Receptionist for Businesses Using Calendly",
    description:
      "Keep Calendly as your scheduling layer; add a front desk that answers the phone and WhatsApp, qualifies the caller, and walks them into a booked slot.",
    how: [
      {
        title: "The link becomes a conversation",
        body: "Most callers never click a scheduling link. The agent answers, qualifies, and books the slot conversationally against the availability behind your Calendly setup, wired during onboarding.",
      },
      {
        title: "Every channel feeds the calendar",
        body: "Phone, WhatsApp, SMS and email inquiries all end in the same place: a confirmed booking, not a link sent into the void.",
      },
      {
        title: "Follow-up included",
        body: "Reminders, reschedules and no-show recovery are handled by the same system, so the calendar stays full, not just booked.",
      },
    ],
    faq: [
      {
        question: "Do we have to stop using Calendly?",
        answer:
          "No. Your scheduling setup stays. The agent adds conversational booking on top, for the customers who call or message instead of clicking.",
      },
      {
        question: "How is availability kept in sync?",
        answer:
          "Booking runs against the calendars behind your scheduler, connected during onboarding, so availability is always current.",
      },
      {
        question: "Who is this for?",
        answer:
          "Businesses that already run on scheduling links but still miss the callers and messagers who never use them. That is usually most inquiries.",
      },
    ],
    industry: { label: "Real estate", href: "/industries/real-estate" },
  },
];
