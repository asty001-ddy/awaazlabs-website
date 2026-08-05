import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    // A3: Google discovers the sitemap here even when a manual
    // Search Console submission is stuck.
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
