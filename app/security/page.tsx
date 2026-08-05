import { pageMeta } from "@/lib/meta";
import { Server, HeartPulse, Award, Lock, ScrollText, UserCheck, type LucideIcon } from "lucide-react";
import { Breadcrumbs, PageHero, CTABand } from "@/components/subpage";

export const metadata = pageMeta({
  title: "Security and Data Protection | Awaaz Labs",
  description:
    "In-region data residency, HIPAA-architected infrastructure, ISO 27001 aligned processes, end-to-end encryption and a full audit trail.",
  path: "/security",
});

const CONTROLS: { icon: LucideIcon; tint: string; title: string; body: string }[] = [
  {
    icon: Server,
    tint: "bg-sky-100 text-sky-700",
    title: "In-region data residency",
    body: "Customer conversation data is stored in the region where your business operates. Residency location is confirmed during onboarding and documented in your agreement.",
  },
  {
    icon: HeartPulse,
    tint: "bg-rose-100 text-rose-700",
    title: "HIPAA-architected",
    body: "The platform is architected to HIPAA standards for handling health information: access controls, encryption, minimum-necessary data handling and auditable access. Relevant for clinics and any business touching patient data.",
  },
  {
    icon: Award,
    tint: "bg-amber-100 text-amber-700",
    title: "ISO 27001 aligned",
    body: "Security management practices follow the ISO 27001 framework: risk assessment, access management, incident response and continuous review.",
  },
  {
    icon: Lock,
    tint: "bg-fuchsia-100 text-fuchsia-700",
    title: "End-to-end encryption",
    body: "Conversations and stored data are encrypted in transit and at rest.",
  },
  {
    icon: ScrollText,
    tint: "bg-violet-100 text-violet-700",
    title: "Full audit trail",
    body: "Every interaction is transcribed, scored by Qualicall, timestamped and attributable. You can always answer what was said, when, and by which agent.",
  },
  {
    icon: UserCheck,
    tint: "bg-emerald-100 text-emerald-700",
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
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CONTROLS.map((c) => (
            <article key={c.title} className="card card-lift p-7">
              <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${c.tint}`}>
                <c.icon size={18} aria-hidden />
              </span>
              <h2 className="mt-5 font-display text-xl font-medium tracking-tight text-ink">
                {c.title}
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                {c.body}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          Consent and recording practices are configured per region during
          onboarding, following local requirements. We can share full
          compliance documentation with your medical director or DPO on
          request. Ask us for the specifics of your market on a call.
        </p>
      </section>
      <CTABand
        title="Compliance questions first? Good."
        body="Book a call and bring your checklist. You leave with answers and your leak numbers either way."
      />
    </>
  );
}
