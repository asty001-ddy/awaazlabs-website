# Competitive Teardown: Clara AI, TezAds, old awaazlabs.io (Aug 2026)

Filtered through locked rules: outcome-first, defensible claims only, no pricing on site, universal base pages.

## Adopted into Phase 1 (SHIPPED)

- Homepage: embedded audio player + outcome caption (links /demo); 2-slider mini leak teaser outputting bookings (no currency on homepage), payback line "the system pays for itself with the first recovered booking each month"; founder block (Astafa Ali) above final CTA linking /book-a-call. Swap monogram for photo: drop founder.jpg in /public, edit components/home-cro.tsx.
- /leak-audit: 2-business-day SLA + "confidential, never shared with competitors" (form, steps, thanks page).
- /security + both /dubai pages: compliance-documentation-on-request line (medical director / DPO).
- Tool slug renamed to /tools/missed-call-cost-calculator (matches the query); old slug 301s via next.config + netlify.toml.
- Old-site 301s: /partners → / (update when partners page ships), /resources → /blog, /case-studies → /customers, /legal/privacy → /privacy, /legal/terms → /terms, /legal/cookies → /privacy.
- GSC + Bing verification via env vars (GOOGLE_SITE_VERIFICATION, BING_SITE_VERIFICATION).
- Link-integrity check added to DoD.
- URGENT (owner action): point awaazlabs.io DNS at the new build. The old site carries indefensible claims (fabricated counters, anonymous AED case studies, partner-implying logos, personal Calendly) indexed on the exact domain prospects google during outreach.

## Phase 2 backlog

- /integrations/{tool} pages for genuinely supported systems only (start 3 to 4: e.g. Zenoti, Fresha, Calendly/Google Calendar tier). Target "{tool} AI receptionist" queries (Clara's play; SERPs nearly empty).
- Front-desk health score quiz (question-format slug, scored diagnosis, feeds leak audit). TezAds pattern.
- Tool OG images show the tool's result screen, not a brand banner.
- Offer-stack decision (owner): "no long-term contracts" if true; pilot guarantee ("if the pilot doesn't book, you don't roll out") as honest money-back equivalent. Do NOT compete on 24-48h setup; compete on depth.

## Phase 3 backlog

- Sub-vertical children under /industries/aesthetics (laser clinics, dermatology, plastic surgery, multi-location groups) and /industries/dental (orthodontics, implant centers). "voice AI receptionist for {sub-niche}" long-tail.
- AI visibility checker for clinics (tool + AEO wedge).
- Narrative persona block per industry page (old site's chapter storytelling, e.g. the overseas investor WhatsApping at midnight).

## Never copy

- Public pricing (locked; consequence: /learn/cost-of-an-ai-receptionist must be genuinely good).
- Fabricated testimonials, fake-precision dashboard numbers, countdown scarcity (TezAds).
- Unattributable revenue case studies, deployment counters, partner-implying logos (old site kill list).
