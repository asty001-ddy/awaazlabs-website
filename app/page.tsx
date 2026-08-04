import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import CoverageMath from "@/components/CoverageMath";
import Industries from "@/components/Industries";
import Proof from "@/components/Proof";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import { PointerGlow } from "@/components/motion-primitives";
import { FAQS } from "@/lib/faqs";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Front Desk",
  serviceType:
    "Missed call recovery, AI receptionist, appointment booking and scheduling automation, calendar management",
  provider: { "@type": "Organization", name: "Awaaz Labs" },
  description:
    "Answers every call, WhatsApp, SMS, email and web form inquiry 24/7 in the customer's language, handles intake, books and manages appointments in existing calendars, sends reminders and email follow-ups, recovers no-shows, reengages lapsed customers and collects Google reviews.",
  availableLanguage: ["Arabic", "English", "Hindi", "Urdu"],
  hoursAvailable: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PointerGlow />
      <main>
        <Hero />
        <div className="cv-auto">
          <ProofBar />
        </div>
        <div className="cv-auto">
          <Problem />
        </div>
        <div className="cv-auto">
          <Solution />
        </div>
        <div className="cv-auto">
          <HowItWorks />
        </div>
        <div className="cv-auto">
          <CoverageMath />
        </div>
        <div className="cv-auto">
          <Industries />
        </div>
        <div className="cv-auto">
          <Proof />
        </div>
        <div className="cv-auto">
          <FAQ />
        </div>
        <div className="cv-auto">
          <FinalCTA />
        </div>
      </main>
    </>
  );
}
