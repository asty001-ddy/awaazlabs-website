import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Mono, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { AttributionCapture, MotionProvider } from "@/components/motion-primitives";
import { SITE_URL, TAGLINE, IS_PRODUCTION } from "@/lib/site";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Awaaz Labs",
  url: SITE_URL,
  slogan: TAGLINE,
  description:
    "Awaaz Labs is the AI front desk that captures every inbound lead an appointment-based business would otherwise miss, then books, reminds, follows up, and collects the review.",
  parentOrganization: { "@type": "Organization", name: "Finova Solutions" },
};

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAFAF7",
};

export const metadata: Metadata = {
  // A1: single source of truth. SITE_URL falls back to the production
  // domain, so even an env-less deploy emits correct canonicals.
  metadataBase: new URL(SITE_URL),
  // Homepage canonical; child routes override via pageMeta.
  // Canonicals point at production in every context; combined with the
  // staging noindex below, that protects prod from duplicate content.
  alternates: { canonical: "/" },
  ...(IS_PRODUCTION ? {} : { robots: { index: false, follow: false } }),
  title: "AI Front Desk That Captures Every Missed Lead | Awaaz Labs",
  description:
    "Awaaz Labs answers every call, WhatsApp and text 24/7, books appointments, cuts no-shows and collects reviews. Stop losing customers to missed calls.",
  openGraph: {
    title: "AI Front Desk That Captures Every Missed Lead | Awaaz Labs",
    description:
      "Awaaz Labs answers every call, WhatsApp and text 24/7, books appointments, cuts no-shows and collects reviews.",
    type: "website",
    siteName: "Awaaz Labs",
  },
  twitter: {
    card: "summary_large_image",
  },
  // Search engine ownership verification: paste tokens in the deploy env
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? { google: process.env.GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.BING_SITE_VERIFICATION
      ? { other: { "msvalidate.01": process.env.BING_SITE_VERIFICATION } }
      : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${dmMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <MotionProvider>
          <AttributionCapture />
          <Nav />
          {children}
          <Footer />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
