import type { Block } from "./posts";

/**
 * /learn: the evergreen AEO layer. Format rules (master-build-v5):
 * definition in the first sentence, question-phrased H2s, answers
 * extractable in under 50 words. Each page links one industry page,
 * one platform section, and a tool. Cost page exists because pricing
 * intent must land somewhere honest (no pricing on site).
 */

export type LearnPage = {
  slug: string;
  term: string;
  title: string;
  description: string;
  body: Block[];
};

export const LEARN_PAGES: LearnPage[] = [
  {
    slug: "what-is-an-ai-receptionist",
    term: "AI receptionist",
    title: "What Is an AI Receptionist?",
    description:
      "An AI receptionist is software that answers a business's calls and messages, qualifies the inquiry, books appointments and follows up, around the clock.",
    body: [
      {
        type: "p",
        text: "An AI receptionist is software that answers a business's inbound calls and messages, understands what the customer wants, books appointments into the business's calendar, and follows up afterward, without a human on the line. Modern systems work across phone, WhatsApp, SMS, email and web forms, in multiple languages.",
      },
      { type: "h2", text: "What does an AI receptionist actually do?" },
      {
        type: "ul",
        items: [
          "Answers every inbound call and message in seconds, 24/7.",
          "Qualifies the inquiry: who, what, when.",
          "Books, reschedules and confirms appointments in the existing calendar.",
          "Sends reminders, chases no-shows, requests reviews.",
          "Logs and transcribes every conversation for the owner.",
        ],
      },
      { type: "h2", text: "How is it different from an answering service?" },
      {
        type: "p",
        text: "An answering service takes messages for humans to act on later. An AI receptionist completes the job in the conversation: the appointment is booked, the reminder scheduled, the record written, before the customer hangs up. See the full [platform](/platform) breakdown.",
      },
      { type: "h2", text: "Does it replace front desk staff?" },
      {
        type: "p",
        text: "No. A human front desk covers roughly 40 of the week's 168 hours. The AI covers the other 128, plus overflow when two calls arrive at once. Judgment calls route to humans. The honest comparison is in [AI receptionist vs hiring a receptionist](/compare/hiring-a-receptionist).",
      },
      { type: "h2", text: "Which businesses benefit most?" },
      {
        type: "p",
        text: "Appointment-based businesses, because every missed inquiry is a missed booking with real value: [aesthetic clinics](/industries/aesthetics), dental practices, real estate brokerages, restaurants and home services. Estimate your own exposure with the free [missed call cost calculator](/tools/missed-call-cost-calculator).",
      },
    ],
  },
  {
    slug: "cost-of-an-ai-receptionist",
    term: "AI receptionist cost",
    title: "How Much Does an AI Receptionist Cost?",
    description:
      "AI receptionist pricing typically combines a setup fee with a monthly subscription tied to usage. The honest answer on what drives the price, and what to compare it against.",
    body: [
      {
        type: "p",
        text: "AI receptionist pricing is typically a one-time setup fee plus a monthly subscription tied to usage, most often minutes of conversation handled. Across the market, monthly costs run from the price of a few missed bookings to a fraction of one part-time salary, depending on volume, channels and languages.",
      },
      { type: "h2", text: "What drives the price up or down?" },
      {
        type: "ul",
        items: [
          "Conversation volume: minutes and messages handled per month.",
          "Channels: voice costs more to run than chat.",
          "Languages and dialects supported.",
          "Depth of integration with calendars, EHRs and booking systems.",
          "Whether it is self-serve software or a managed, done-for-you service.",
        ],
      },
      { type: "h2", text: "Why do some providers not publish pricing?" },
      {
        type: "p",
        text: "Because a managed deployment is scoped to the business: an aesthetics clinic with Arabic and English voice traffic is a different build from a cafe answering reservation texts. Awaaz Labs prices per market on a sales call, after your channels and volume are known. That is a scoping conversation, not a paywall: [book a free sales call](/book-a-call) and you leave with numbers either way.",
      },
      { type: "h2", text: "What should you compare the cost against?" },
      {
        type: "p",
        text: "Two numbers. First, a fully loaded receptionist salary, which buys about 40 of 168 weekly hours, one call at a time. Second, your monthly leak: what the inquiries you already miss would have been worth. The free [missed call cost calculator](/tools/missed-call-cost-calculator) puts your own number on the second. For most appointment-based businesses the system pays for itself with the first recovered booking each month.",
      },
      { type: "h2", text: "Is there a cheap way to find out if it is worth it?" },
      {
        type: "p",
        text: "Yes: measure the leak before buying anything. The [free leak audit](/leak-audit) mystery-shops your business and sends the findings within 2 business days. If the leak is small, you saved yourself a subscription.",
      },
    ],
  },
  {
    slug: "ai-receptionist-vs-answering-service",
    term: "AI receptionist vs answering service",
    title: "AI Receptionist vs Answering Service: What Is the Difference?",
    description:
      "An answering service takes messages. An AI receptionist finishes the job: booked appointment, sent reminder, logged conversation. The practical comparison.",
    body: [
      {
        type: "p",
        text: "The difference between an AI receptionist and an answering service is what happens after hello: an answering service records a message for your team to handle later, while an AI receptionist completes the task in the conversation, booking the appointment, answering the question, scheduling the follow-up.",
      },
      { type: "h2", text: "What does an answering service do well?" },
      {
        type: "p",
        text: "Human warmth on the line and basic message-taking at modest cost. For businesses whose calls cannot be resolved without a specialist, a message may be all that is possible.",
      },
      { type: "h2", text: "Where do answering services lose bookings?" },
      {
        type: "ul",
        items: [
          "The customer still waits for a callback, and callbacks reach voicemail.",
          "No access to your calendar, so nothing gets booked.",
          "No follow-up: the message is the end of their job.",
          "Language coverage is whatever the shift happens to speak.",
        ],
      },
      { type: "h2", text: "What does an AI receptionist do instead?" },
      {
        type: "p",
        text: "It answers on your channels in the customer's language, qualifies the inquiry, books directly into your [calendar](/integrations/google-calendar), sends the confirmation, and later the reminder and review request. The [platform page](/platform) shows the full chain, and clinics can see it applied to [aesthetics](/industries/aesthetics).",
      },
      { type: "h2", text: "How do you decide between them?" },
      {
        type: "p",
        text: "Count what your missed inquiries cost, then compare. The [missed call cost calculator](/tools/missed-call-cost-calculator) takes thirty seconds and needs no email.",
      },
    ],
  },
  {
    slug: "what-is-speed-to-lead",
    term: "Speed to lead",
    title: "What Is Speed to Lead?",
    description:
      "Speed to lead is the time between a customer's first inquiry and your first meaningful response. It is the strongest controllable predictor of whether they book with you.",
    body: [
      {
        type: "p",
        text: "Speed to lead is the elapsed time between a customer's first inquiry and your business's first meaningful response. It is the strongest controllable predictor of conversion for appointment-based businesses, because inquiring customers are usually comparing several providers at once and book with whoever answers first.",
      },
      { type: "h2", text: "Why does speed to lead matter so much?" },
      {
        type: "p",
        text: "Intent decays in minutes. A lead answered while their need is front of mind converts at a different order of magnitude than one answered the next morning. Missed callers rarely retry: 78 percent of after-hours callers never leave a voicemail, by industry benchmark.",
      },
      { type: "h2", text: "What is a good speed to lead?" },
      {
        type: "p",
        text: "Minutes, on every channel, at every hour. On WhatsApp-first markets the expectation is conversational: a reply inside minutes, in the customer's language. The [WhatsApp speed to lead guide](/blog/whatsapp-speed-to-lead) covers that channel in depth.",
      },
      { type: "h2", text: "How do you improve it?" },
      {
        type: "ul",
        items: [
          "Measure it honestly first: message your own business on a Saturday night.",
          "Cover the hours humans cannot: nights, weekends, simultaneous inquiries.",
          "Answer on the channel the customer chose, not the one you prefer.",
          "Finish the job in the first conversation: qualification and booking, not a promise to call back.",
        ],
      },
      { type: "h2", text: "Where does Awaaz Labs fit?" },
      {
        type: "p",
        text: "The [platform](/platform) answers every channel in seconds, around the clock, which makes speed to lead a solved constant instead of a daily battle. [Real estate](/industries/real-estate) shows the highest-stakes version of the problem. Your own response times: measured free by the [leak audit](/leak-audit).",
      },
    ],
  },
];
