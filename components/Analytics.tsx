import Script from "next/script";
import { IS_PRODUCTION } from "@/lib/site";

/**
 * GA4 loader. The production property ID is the default so analytics
 * works in an env-less deploy; NEXT_PUBLIC_GA_ID overrides it (set it
 * to "off" locally to silence analytics in dev). A2 (Brief 5): loads
 * ONLY in the production context so staging review clicks and deploy
 * previews never pollute the property.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-VGPXE64BRC";

export default function Analytics() {
  const id = GA_ID;
  if (!IS_PRODUCTION || !id || id === "off") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${id}');`}
      </Script>
    </>
  );
}
