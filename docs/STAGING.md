# Staging environment: one-time Netlify setup (Astafa)

The code side is automatic: any deploy whose Netlify `CONTEXT` is not
`production` gets noindex on every page, a robots.txt that disallows
everything, no sitemap, no GA4, a "Staging: not public" ribbon, and
leak-audit submissions that are logged instead of forwarded to the
webhook. You only need the five steps below, once.

## 1. Enable the staging branch deploy

Site configuration → Build & deploy → Branches and deploy contexts →
Branch deploys → "Let me add individual branches" → add `staging`.

## 2. Find the staging URL

After the first push to `staging`, the deploy appears at:

    https://staging--<sitename>.netlify.app

That URL alone is a fully working staging environment. Share it for
review; the ribbon makes screenshots unambiguous.

## 3. Optional: staging.awaazlabs.io

Domain management → Add a domain → `staging.awaazlabs.io`, assigned to
the `staging` branch. Honest note: custom branch subdomains require the
domain's DNS to be on Netlify DNS (or a paid feature depending on
plan). If DNS stays external, the options are:

- (a) move awaazlabs.io nameservers to Netlify DNS, or
- (b) keep using the `staging--*.netlify.app` URL, which costs nothing
  and works today.

Recommendation: (b) until there is a concrete reason not to.

## 4. Protect main

GitHub → repo Settings → Branches → add a branch protection rule for
`main`: require a pull request before merging. One click of insurance
against accidental production pushes.

## 5. Environment variables

Nothing to change. Env vars apply to all deploy contexts by default,
which is what we want: identical build behavior everywhere, with the
code-level context guards handling the staging differences.

## The workflow from here

- All work is committed and pushed to `staging` only.
- `main` is production and auto-deploys awaazlabs.io.
- Promotion: on an explicit "promote", `staging` merges into `main`
  with a merge commit (no squash) and is pushed.
- Hotfixes to production require an explicit "hotfix to main"
  confirmation, then `main` is merged back into `staging` so the
  branches never diverge.
