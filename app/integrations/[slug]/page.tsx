import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, PageHero, CTABand, TrustStrip, FaqBlock, RuledList, JsonLd } from "@/components/subpage";
import { INTEGRATIONS } from "@/lib/integrations";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return INTEGRATIONS.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const integ = INTEGRATIONS.find((i) => i.slug === slug);
  if (!integ) return {};
  return pageMeta({
    title: `${integ.title} | Awaaz Labs`,
    description: integ.description,
    path: `/integrations/${integ.slug}`,
  });
}

export default async function IntegrationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const integ = INTEGRATIONS.find((i) => i.slug === slug);
  if (!integ) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: integ.title,
          serviceType: "AI receptionist integration",
          provider: { "@type": "Organization", name: "Awaaz Labs" },
          url: `${SITE_URL}/integrations/${integ.slug}`,
        }}
      />
      <Breadcrumbs
        trail={[
          { label: "Integrations", href: "/integrations" },
          { label: integ.name, href: `/integrations/${integ.slug}` },
        ]}
      />
      <PageHero label={`Integration: ${integ.name}`} title={integ.title} lede={integ.description} />
      <section className="mx-auto max-w-[1200px] px-5 pb-16 lg:px-8">
        <p className="label mb-8 text-faint">How it works</p>
        <RuledList items={integ.how} />
      </section>
      <TrustStrip />
      <FaqBlock faqs={integ.faq} title={`${integ.name} questions`} />
      <section className="mx-auto max-w-[1200px] px-5 pb-16 lg:px-8">
        <p className="text-[15px] leading-relaxed text-ink-soft">
          See it in context:{" "}
          <Link href={integ.industry.href} className="font-semibold text-ink underline underline-offset-4">
            {integ.industry.label}
          </Link>
          , or the full{" "}
          <Link href="/platform" className="font-semibold text-ink underline underline-offset-4">
            platform
          </Link>
          .
        </p>
      </section>
      <CTABand />
    </>
  );
}
