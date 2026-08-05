/**
 * Blog content. Purpose (master-build-v5 + owner directive): rank for
 * long-tail queries around the free tools and pass authority to the
 * money pages. Every post names its target query and links the
 * calculator, leak audit, and at least one industry page.
 *
 * Body blocks support inline links with [label](href) syntax.
 */

export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  targetQuery: string;
  date: string;
  readMinutes: number;
  body: Block[];
};

export const POSTS: Post[] = [
  {
    slug: "missed-call-statistics",
    title: "Missed Call Statistics: What Unanswered Phones Cost Appointment-Based Businesses",
    description:
      "The benchmark numbers on missed calls, after-hours callers and voicemail behavior, and what they mean for clinics, brokerages and other appointment-based businesses.",
    targetQuery: "missed call statistics",
    date: "2026-08-04",
    readMinutes: 5,
    body: [
      {
        type: "p",
        text: "Missed call statistics measure how many inbound business calls go unanswered and what happens to those callers afterward. For appointment-based businesses, the benchmarks are consistently worse than owners expect.",
      },
      { type: "h2", text: "How many business calls go unanswered?" },
      {
        type: "p",
        text: "Industry benchmarks put missed inbound calls at 23 to 42 percent for appointment-based businesses. The spread depends on staffing, hours and how many calls arrive at once. A front desk can only hold one conversation at a time; the second simultaneous caller is a coin flip and the third is usually gone.",
      },
      { type: "h2", text: "What do callers do when nobody answers?" },
      {
        type: "p",
        text: "They leave. 78 percent of after-hours callers never leave a voicemail. The overwhelming pattern in every study of local-business calling behavior is that unanswered callers do not retry: they move to the next result on Google and book there.",
      },
      { type: "h2", text: "When do the missed calls happen?" },
      {
        type: "ul",
        items: [
          "After hours: in aesthetics, 40 to 60 percent of inquiries arrive outside opening hours, by industry benchmark.",
          "Peak overlap: lunchtime and early evening, when call volume and front-desk workload spike together.",
          "Weekends: the highest-intent window for consumers and the lowest-staffed window for businesses.",
        ],
      },
      { type: "h2", text: "What does a missed call actually cost?" },
      {
        type: "p",
        text: "It depends on your volume, your booking rate and your average appointment value, which is why averages mislead. The fastest way to get a number that means something is the free [missed revenue calculator](/tools/missed-call-cost-calculator): your inquiries, your values, on-screen result.",
      },
      { type: "h2", text: "How do businesses close the gap?" },
      {
        type: "p",
        text: "Three ways: overstaff the desk (expensive, still one call at a time), route to voicemail (78 percent hang up), or answer every channel automatically. That third option is what an AI front desk does; see how it works for [aesthetic clinics](/industries/aesthetics) and [real estate](/industries/real-estate). And if you want your own missed-call number rather than a benchmark, the [free leak audit](/leak-audit) measures it for you.",
      },
    ],
  },
  {
    slug: "calculate-revenue-lost-to-missed-calls",
    title: "How to Calculate Revenue Lost to Missed Calls (With a Free Calculator)",
    description:
      "A simple four-input method for estimating what unanswered calls and unread messages cost your business each month, plus the free calculator that does it for you.",
    targetQuery: "calculate revenue lost to missed calls",
    date: "2026-08-04",
    readMinutes: 4,
    body: [
      {
        type: "p",
        text: "Revenue lost to missed calls is the monthly value of inquiries that went unanswered and booked elsewhere. You can estimate it with four numbers you already know or can pull from your phone system in five minutes.",
      },
      { type: "h2", text: "What four numbers do you need?" },
      {
        type: "ul",
        items: [
          "Weekly inbound inquiries across every channel: calls, WhatsApp, texts, emails, web forms.",
          "The share you miss. If you have never measured it, the industry benchmark for appointment-based businesses is 23 to 42 percent.",
          "The share of answered inquiries that become bookings.",
          "Your average appointment value.",
        ],
      },
      { type: "h2", text: "What is the formula?" },
      {
        type: "p",
        text: "Monthly lost revenue = weekly inquiries x miss rate x 4.33 x booking rate x average value. The 4.33 converts weeks to months. The result is an estimate of bookings that would have happened if every inquiry had been answered.",
      },
      { type: "h2", text: "Do you have to do this by hand?" },
      {
        type: "p",
        text: "No. The free [missed revenue calculator](/tools/missed-call-cost-calculator) runs this exact math with sliders for the benchmark ranges. The result stays on your screen, no email required.",
      },
      { type: "h2", text: "How accurate is the estimate?" },
      {
        type: "p",
        text: "It is a ceiling-and-floor exercise, not an audit. Your real leak depends on when inquiries arrive and how fast each channel is answered. That is what the [free leak audit](/leak-audit) measures: we contact your business like a customer at realistic hours and send you the actual findings. Estimate first, verify second.",
      },
    ],
  },
  {
    slug: "ai-receptionist-vs-hiring-receptionist",
    title: "AI Receptionist vs Hiring a Receptionist: The Coverage Math",
    description:
      "A receptionist covers about 40 of the week's 168 hours, one call at a time, in one or two languages. Here is the honest comparison owners should run before hiring.",
    targetQuery: "ai receptionist vs receptionist",
    date: "2026-08-04",
    readMinutes: 5,
    body: [
      {
        type: "p",
        text: "An AI receptionist is software that answers your business's calls and messages, books appointments and follows up automatically. A human receptionist does the same work for roughly 40 of the 168 hours in a week. The comparison that matters is coverage, not replacement.",
      },
      { type: "h2", text: "How much of the week does a human front desk cover?" },
      {
        type: "p",
        text: "About 24 percent. A full-time receptionist works around 40 hours a week; your customers inquire across all 168. The other 128 hours, which include the after-hours window where 40 to 60 percent of aesthetic inquiries arrive, go to voicemail. And 78 percent of after-hours callers never leave one.",
      },
      { type: "h2", text: "What can only humans do?" },
      {
        type: "ul",
        items: [
          "In-person hospitality: greeting, reassuring, reading the room.",
          "Professional judgment: clinical, legal or pricing decisions.",
          "Complex service recovery when a customer is upset.",
        ],
      },
      { type: "h2", text: "What does the AI side of the desk do better?" },
      {
        type: "ul",
        items: [
          "Answers at 2am, at lunch, and on the third simultaneous call.",
          "Switches languages mid-conversation.",
          "Never forgets the follow-up, the reminder or the review ask.",
          "Documents every conversation, transcribed and scored.",
        ],
      },
      { type: "h2", text: "So should you hire or automate?" },
      {
        type: "p",
        text: "Both, usually. Keep humans on judgment and hospitality; put coverage on software. The way to decide with data instead of instinct: run the [missed revenue calculator](/tools/missed-call-cost-calculator) to size your leak, get the [free leak audit](/leak-audit) to verify it, then compare that number against a salary. If you run a clinic, the [aesthetics page](/industries/aesthetics) shows what full coverage looks like in practice.",
      },
    ],
  },
  {
    slug: "whatsapp-speed-to-lead",
    title: "WhatsApp Response Time: Why Speed to Lead Decides Who Gets the Booking",
    description:
      "Leads that wait overnight book elsewhere by morning. What speed to lead means on WhatsApp-first markets and how fast is fast enough.",
    targetQuery: "whatsapp response time business speed to lead",
    date: "2026-08-04",
    readMinutes: 4,
    body: [
      {
        type: "p",
        text: "Speed to lead is the time between a customer's first message and your first meaningful reply. On WhatsApp-first markets it is the single strongest predictor of who wins the booking, because the customer is usually messaging three businesses at once.",
      },
      { type: "h2", text: "How fast do customers expect a WhatsApp reply?" },
      {
        type: "p",
        text: "Minutes. WhatsApp is a conversational channel: customers treat it like texting a friend, not emailing a company. A reply the next morning reads as a no. The lead that sat unread overnight has typically booked elsewhere by 9am.",
      },
      { type: "h2", text: "Why do businesses lose WhatsApp leads?" },
      {
        type: "ul",
        items: [
          "Messages arrive after hours, when nobody is watching the inbox.",
          "Voice notes in another language sit untranslated.",
          "The desk is busy with in-person customers at peak times.",
          "No one owns the channel, so replies depend on who happens to look.",
        ],
      },
      { type: "h2", text: "What does good look like?" },
      {
        type: "p",
        text: "An answer in seconds, in the customer's language, that moves to a booking in the same thread. That is how an AI front desk handles it: instant reply, qualification, and a confirmed slot without a handoff. See it in the context of [Dubai real estate](/industries/real-estate) or [aesthetic clinics](/industries/aesthetics).",
      },
      { type: "h2", text: "How do you find out what your response time is?" },
      {
        type: "p",
        text: "Measure it the way a customer would: message your own business on a Saturday night. Or let us do it properly: the [free leak audit](/leak-audit) tests every channel at realistic hours and sends you the findings, including exactly how long your WhatsApp leads wait.",
      },
    ],
  },
  {
    slug: "front-desk-health-check",
    title: "Front Desk Health Check: 8 Questions Every Owner Should Ask",
    description:
      "A practical self-audit for appointment-based businesses: the eight questions that reveal whether your front desk is capturing inquiries or leaking them, plus a free scored version.",
    targetQuery: "front desk health check",
    date: "2026-08-05",
    readMinutes: 4,
    body: [
      {
        type: "p",
        text: "A front desk health check is a structured self-audit of how your business handles inbound inquiries: calls, messages, follow-ups and reviews. Eight questions cover the failure points that cost appointment-based businesses the most bookings.",
      },
      { type: "h2", text: "What should a front desk health check cover?" },
      {
        type: "ul",
        items: [
          "After-hours calls: answered, voicemailed, or ringing out?",
          "WhatsApp response time: minutes or whenever someone checks?",
          "Simultaneous calls: does the second caller get through?",
          "No-shows: does anyone call them back, every time?",
          "Web forms: first reply in minutes or days?",
          "Lapsed customers: is there any reactivation rhythm?",
          "Reviews: asked for every visit, or when staff remember?",
          "Visibility: can you replay what was said last weekend?",
        ],
      },
      { type: "h2", text: "How do you score it?" },
      {
        type: "p",
        text: "Weight the questions by revenue impact and score out of 100. Above 80 is a tight ship; below 55 means nights, weekends and follow-through are leaking bookings weekly. The [front desk health score](/tools/front-desk-health-score) runs this exact scoring in about a minute, free, with an instant diagnosis and no email gate.",
      },
      { type: "h2", text: "What do most businesses score?" },
      {
        type: "p",
        text: "Most appointment-based businesses cluster in the leaking-at-the-edges band: solid during opening hours, silent for the other 128 hours of the week. The benchmarks explain why: 23 to 42 percent of inbound calls are missed, and 78 percent of after-hours callers never leave a voicemail.",
      },
      { type: "h2", text: "What do you do with a low score?" },
      {
        type: "p",
        text: "Verify it with real data before spending anything. The [free leak audit](/leak-audit) mystery-shops your channels at realistic hours and sends the findings within 2 business days. Then fix the biggest leak first: for most clinics that is after-hours capture, covered on the [aesthetics page](/industries/aesthetics). Put a money number on it with the [missed call cost calculator](/tools/missed-call-cost-calculator).",
      },
    ],
  },
];
