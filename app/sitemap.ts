import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { POSTS } from "@/lib/posts";
import { LEARN_PAGES } from "@/lib/learn";
import { INTEGRATIONS } from "@/lib/integrations";
import { CASE_STUDIES_LIVE } from "@/lib/flags";

const ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/industries", priority: 0.8 },
  { path: "/industries/aesthetics", priority: 0.9 },
  { path: "/industries/aesthetics/dubai", priority: 0.9 },
  { path: "/industries/real-estate", priority: 0.9 },
  { path: "/industries/real-estate/dubai", priority: 0.9 },
  { path: "/tools", priority: 0.7 },
  { path: "/tools/missed-call-cost-calculator", priority: 0.8 },
  { path: "/leak-audit", priority: 0.9 },
  { path: "/book-a-call", priority: 0.8 },
  { path: "/demo", priority: 0.7 },
  { path: "/customers", priority: 0.7 },
  ...(CASE_STUDIES_LIVE
    ? [
        { path: "/customers/advanzatech", priority: 0.6 },
        { path: "/customers/sirius-solutions", priority: 0.6 },
      ]
    : []),
  { path: "/security", priority: 0.5 },
  { path: "/contact", priority: 0.5 },
  { path: "/privacy", priority: 0.2 },
  { path: "/terms", priority: 0.2 },
  { path: "/blog", priority: 0.6 },
  ...POSTS.map((p) => ({ path: `/blog/${p.slug}`, priority: 0.6 })),
  { path: "/platform", priority: 0.8 },
  { path: "/tools/front-desk-health-score", priority: 0.8 },
  { path: "/tools/build-your-agent", priority: 0.8 },
  { path: "/learn", priority: 0.6 },
  ...LEARN_PAGES.map((p) => ({ path: `/learn/${p.slug}`, priority: 0.7 })),
  { path: "/integrations", priority: 0.7 },
  ...INTEGRATIONS.map((i) => ({ path: `/integrations/${i.slug}`, priority: 0.7 })),
  { path: "/about", priority: 0.5 },
  { path: "/partners", priority: 0.5 },
  { path: "/compare/hiring-a-receptionist", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: new Date(),
    priority: r.priority,
  }));
}
