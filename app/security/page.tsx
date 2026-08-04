import type { Metadata } from "next";
import { Breadcrumbs, PageHero, CTABand, RuledList } from "@/components/subpage";

export const metadata: Metadata = {
  title: "Security and Data Protection | Awaaz Labs",
  description:
    "In-region data residency, HIPAA-architected infrastructure, ISO 27001 aligned processes, end-to-end encryption and a full audit trail.",
  alternates: { canonical: "/security" },
};

const CONTROLS = [
  {
    title: "In-region data residency",
    body: "Customer conversation data is stored in the region where your business operates. Residency location is confirmed during onboarding and documented in your agreement.",
  },
  {
    title: "HIPAA-architected",
    body: "The platform is architected to HIPAA standards for handling health information: access controls, encryption, minimum-necessary data handling and auditable access. Relevant for clinics and any business touching patient data.",
  },
  {
    title: "ISO 27001 aligned",
    body: "Security management practices follow the ISO 27001 framework: risk assessment, access management, incident response and continuous review.",
  },
  {
    title: "End-to-end encryption",
    body: "Conversations and stored data are encrypted in transit and at rest.",
  },
  {
    title: "Full audit trail",
    body: "Every interaction is transcribed, scored by Qualicall, timestamped and attributable. You can always answer what was said, when, and by which agent.",
  },
  {
    title: "Human boundary, hard-coded",
    body: "Anything requiring professional judgment, clinical, legal or contractual, routes to your team. The scope of what the AI may answer is defined with you at onboarding and enforced in the agent's configuration.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: "Security", href: "/security" }]} />
      <PageHero
        label="Security"
        title="Your customers' conversations are business records. We treat them that way."
        lede="The substance behind every claim on this site. If your compliance team has questions beyond this page, we answer them before you sign anything."
      />
      <section className="mx-auto max-w-[1200px] px-5 pb-20 lg:px-8">
        <RuledList items={CONTROLS} />
        <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          Consent and recording practices are configured per region during
          onboarding, following local requirements. Ask us for the specifics of
          your market on a call.
        </p>
      </section>
      <CTABand
        title="Compliance questions first? Good."
        body="Book a call and bring your checklist. You leave with answers and your leak numbers either way."
      />
    </>
  );
}
