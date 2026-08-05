import type { MetadataRoute } from "next";
import { SITE_URL, IS_PRODUCTION } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Staging and previews must never be crawlable (Brief 5, A1)
  if (!IS_PRODUCTION) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    // Google discovers the sitemap here even when a manual
    // Search Console submission is stuck.
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
