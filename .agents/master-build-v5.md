# Awaaz Labs Website: Master Build Document (v5, all gaps closed)

The single authoritative handoff. Supersedes all previous versions. Companion file: .agents/product-marketing.md.

## 1. Sitemap (final)

```
Homepage (/)
├── /industries                          hub
│   ├── /industries/aesthetics           base ── /industries/aesthetics/dubai
│   ├── /industries/real-estate          base ── /industries/real-estate/dubai
│   ├── /industries/dental               base (Phase 3)
│   ├── /industries/restaurants          base (Phase 3)
│   ├── /industries/home-services        base (Phase 3)
│   └── {base}/{city}                    added only where actively selling
├── /platform                            product hub (child pages Phase 3)
├── /tools                               hub
│   ├── /tools/missed-revenue-calculator Phase 1
│   ├── /tools/build-your-agent          Phase 2 flagship
│   └── /tools/{pipeline}                gated on capture rates of first two
├── /leak-audit  +  /leak-audit/thanks   primary conversion, global fulfillment
├── /book-a-call                         secondary conversion (no pricing on site)
├── /demo                                recordings now, live line when TDRA number arrives
├── /customers  └── /customers/{slug}    case studies as pilots convert
├── /compare/{alternative}               Phase 2+: hiring-a-receptionist first
├── /learn/{term}                        evergreen AEO layer, 4 cornerstone pages Phase 2
├── /blog  └── /blog/{slug}              Phase 2, launches with 4 posts, never empty
├── /partners  /about  /contact
├── /security  /privacy  /terms  /404
```

Page math: 16 URLs at Phase 1 launch (incl. /customers hub + 2 named case studies) · ~29 unique designed pages across all phases (5 industry bases after vehicle recovery removal, +3 customer pages) · 45 to 60+ at maturity including programmatic children (open-ended by design).

Nav (5 + CTA): Industries ▾ · Platform · Tools ▾ · Customers · Blog · [Get your free leak audit]. CTA pair sitewide: Get your free leak audit (primary) · Book a free sales call (secondary). Hard rule: no pricing figures, tiers, or currency amounts anywhere on the public site.

## 2. Universal-base rules (global-first)

- No currency, no named regulators, no city names, no region-specific language lists on any base page. Loss expressed in percentages, hours, empty slots.
- Language claim on base pages: "answers in your customer's language and switches mid-conversation." Full supported-language list lives on /platform, stated honestly.
- Universal trust strip (confirmed true, approved): In-region data residency · HIPAA-architected · ISO 27001 aligned · End-to-end encrypted · Full audit trail. Substance on /security.
- Proof: three continents story (Sirius US, Advanzatech UAE, Telecom Foundation PK) is global and stays on universal pages.
- City pages swap in exactly five blocks: local money, local rules, local proof, local place, local contact. 35 to 40 percent unique content minimum. Self-canonical always, never canonicaled to base.

## 3. Gap closures (all 18 from the audit)

Gaps 1 to 4, 7, 8, 10, 11, 12, 14 closed in v4 (global audit fulfillment, 301 map, verified claims + /security, pricing removed, measurement layer, thank-you + email, calculator, book-a-call, demo recordings, Arabic deferral with 5-retainer trigger). The remaining eight:

- GAP 5 · SEO timeline framing (closed). awaazlabs.io is a new domain; global head terms are 12+ months out. Next two quarters: every page measured as a conversion asset for outbound traffic. Organic wins first from GCC geo long-tail and tools. KPIs: conversions by source, not rankings.
- GAP 6 · Keyword validation (closed). Mandatory gate: before any Phase 2/3 page is built, run one keyword pass (volume, difficulty, SERP shape). Aggregator-owned or zero-volume: re-scope or cut. Phase 1 exempt (outreach pages).
- GAP 9 · Map-pack reality (closed). City pages compete in organic only; map pack requires physical presence. Create Google Business Profile the day the UAE entity exists. Until then, no map-pack measurement.
- GAP 13 · Umbrella fit (closed, decided). Vehicle recovery removed from the site entirely (dispatch, not appointments). Five verticals: aesthetics, dental, real estate, restaurants, home services. Also removed from the live homepage industries section.
- GAP 15 · 404 page (closed). On-brand line ("This page missed the call"), search box, links to /industries, /tools, /leak-audit. Proper 404 status.
- GAP 16 · OG image system (closed). Every page ships an OG image from a shared template (logo, page title, one stat or line), generated at build time. Twitter card + OG tags in every page head. WhatsApp is the primary outreach channel.
- GAP 17 · Performance and accessibility budget (closed). LCP under 2.5s on mid-range mobile over 4G, total JS under 200KB gzipped on content pages, AVIF/WebP with explicit dimensions, fonts subset and preloaded, WCAG 2.1 AA basics. Mobile is the primary design target.
- GAP 18 · Governance (closed). Owner: Astafa until delegated. Website line in Friday 5-minute Sales Tracker (audit requests, calls booked, calculator completions, agent sessions, by source); full review in monthly 60-minute review. 1 to 2 blog posts/month max, /learn one page/month max, both only after Phase 1 and 2 ship. Any new page must name its target query and conversion action before build.

## 4. Technical SEO/AEO plumbing

- Subfolders never subdomains. Lowercase, hyphens, no dates, no IDs. Max depth 3. One consistent trailing-slash policy.
- 301 map from every currently indexed awaazlabs.io URL before the new build deploys (crawl + GSC export first).
- Self-canonical on every page. XML sitemap auto-generated, submitted to GSC. robots.txt clean. llms.txt at root.
- Schema: Organization sitewide · Service on industry pages · LocalBusiness with areaServed on city pages only · FAQPage on home, industries, /learn · SoftwareApplication on tools · BreadcrumbList sitewide, breadcrumbs mirror URLs.
- Title patterns: base "AI Front Desk for {Industry} | Awaaz Labs" · city "AI Front Desk for {City} {Industry} | Awaaz Labs" · tools "{Tool Name} (Free) | Awaaz Labs".
- Internal linking: industry base → live city children + 2 sibling verticals + /leak-audit + /book-a-call · city → base + same-city siblings + /leak-audit · /learn → one industry + one platform section; industries cite /learn stats · /compare → /book-a-call and /leak-audit only · every tool → its matching industry page.
- FAQ answers under 50 words, question-phrased H2/H3s, definitions in first sentences on /learn (AEO extraction format).
- No em dashes in any rendered copy. No fabricated numbers, counters, badges, or testimonials, ever.

## 5. Conversion system

- /leak-audit: global. Fields: business name, industry, country + city, phone, WhatsApp, email. Thanks page sets delivery expectation and fires conversion event. Confirmation email immediately; 3-email post-audit sequence.
- /book-a-call: embedded scheduler, max 3 qualifying fields, "30 minutes, no obligation, you leave with your leak numbers either way." Regional calendar routing.
- /tools/missed-revenue-calculator: on-screen result ungated; email gate only on the PDF version. Result CTA: "This is the estimate. The free leak audit gets you the real number."
- /tools/build-your-agent (Phase 2): paste URL → scrape → temporary agent → talk to it. Voice from day one, browser-based (WebRTC via LiveKit/Retell, no phone number). Guardrails in code before launch: email before session, 3 to 5 minute cap, per-domain and per-IP rate limits, daily cost ceiling, auto-expiry, "demo quality" framing. Transcript emailed with book-a-call CTA. Monitor cost per session weekly.
- Analytics: GA4 + GSC live on launch day. Events: audit_submitted, call_booked, calculator_completed, agent_session_started, demo_audio_played. UTM discipline on every outreach link. SDR traffic separable from organic day one.
- Internal SOP (not on the website): call-recording consent methodology per region for audit fulfillment.

## 6. Build order

Phase 1 · 16 URLs · blocks Dubai outreach: / (real demo destination, form CTA, schema, OG, custom domain + 301 map) · /industries/aesthetics · /industries/aesthetics/dubai · /industries/real-estate · /industries/real-estate/dubai · /leak-audit · /leak-audit/thanks · /book-a-call · /tools/missed-revenue-calculator · /demo · /security · /privacy + /terms + /contact · /404. Plus /customers hub with named Advanzatech and Sirius case studies (client sign-off on final drafts before publish). And: GA4/GSC/events, confirmation email, English + Arabic demo recordings.

Phase 2 · while pilots run: /tools/build-your-agent · /platform · first Dubai pilot case study within 30 days of go-live · /learn 4 cornerstone pages (incl. cost-of-an-ai-receptionist, missed-call-statistics) · /blog with 4 posts ready · /partners · /about · /compare/hiring-a-receptionist. All gated by the GAP 6 keyword pass.

Phase 3 · revenue-gated: remaining industry bases · city pages only where actively selling (leak-audit form city data decides order) · tool pipeline per capture rates · competitor compares per market · /platform children · Arabic homepage + top city pages at 5 GCC retainers.

## Decision log

All three resolved (Aug 2026): vehicle recovery removed from the site; build-your-agent ships voice-first; Advanzatech and Sirius named in full, case studies drafted immediately and pulled into Phase 1.
