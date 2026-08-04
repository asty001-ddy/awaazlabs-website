import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Mono, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { MotionProvider } from "@/components/motion-primitives";
import { SITE_URL, TAGLINE } from "@/lib/site";

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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "AI Front Desk That Captures Every Missed Lead | Awaaz Labs",
  description:
    "Awaaz Labs answers every call, WhatsApp and text 24/7, books appointments, cuts no-shows and collects reviews. Stop losing customers to missed calls.",
  keywords: [
    "missed call recovery",
    "AI receptionist",
    "AI front desk",
    "appointment booking automation",
    "answer calls after hours",
  ],
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
          <Nav />
          {children}
          <Footer />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
