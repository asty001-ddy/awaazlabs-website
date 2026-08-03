# Home page: as-shipped design system (overrides MASTER.md)

Direction: **editorial monochrome**. Synthesized from four references
(aceternity schedule template, Magic UI sage startup template, NexStudio,
SynthAI) plus the generator's Bento Grids / monochrome recommendation.

## Tokens (app/globals.css)

| Token | Value | Use |
|---|---|---|
| `--color-paper` | `#FAFAF7` | page background |
| `--color-ink` | `#0F0E0C` | text, primary buttons |
| `--color-ink-soft` | `#57534E` | body copy |
| `--color-faint` | `#79716B` | labels, meta |
| `--color-hairline` | `#E5E2DC` | all rules and borders |
| `--color-signal` | `#0E8A48` | ticker word, small green text |
| `--color-signal-bright` | `#17B26A` | status dots only |
| `--color-void` | `#0D0C0A` | dark sections (problem, final CTA, footer) |

## Rules

- Typography IS the design: Bricolage Grotesque display at 44 to 76px,
  weight 500, tight tracking. Inter body. `.label` = 11px uppercase 0.22em.
- Monochrome first. Green appears only as: hero ticker word, status dots,
  small check icons. Never as button fills or card tints.
- No rounded cards, no soft shadows, no pastel icon chips. Structure comes
  from hairline rules, `gap-px` bento grids, and whitespace.
- Buttons: ink pill with uppercase label text (paper pill on dark sections).
- Section markers: uppercase label above a large display headline.
- Mock UI (hero feed, bento cells) is monochrome with green status dots and
  must stay capability-level: no invented result metrics.
- Hero ticker cadence: ~1.2s (`TICKER_MS` in components/Hero.tsx).

## v2.1 addendum: de-monotone pass (aceternity-informed)

- Amber accent added: `--color-amber #FFC800`. Uses: icon chips inside primary
  buttons (26px rounded square + Radar icon), marker highlights under one key
  word per dark section headline, Reviews/Calendar icon tiles. Never body text.
- Labels are now DM Mono (`--font-dm-mono`), 11px/500, 0.14em tracking.
- Ink sections (Problem, Final CTA) are inset rounded panels (`.panel-void`,
  32px radius, `.dots` texture, one blurred color glow per panel), not
  full-bleed strips. Footer stays full-bleed as the page anchor.
- `.gridlines` texture on hero (masked fade to paper) and chat vignette.
- Bento cells carry tinted icon tiles (emerald/amber/sky/violet/rose 100-tint
  bg + 700 text). Color lives in vignettes and tiles, never section paint.

## v2.2 addendum: premium rebrand + conversion copy pass

- Brand accent is now magenta (fuchsia): `--color-signal #A21CAF`,
  `--color-signal-bright #D946EF`. Green retired. Amber unchanged.
- Window chrome dots are macOS traffic lights (#FF5F57 / #FEBC2E / #28C840).
- Copy tightened per Hormozi/Haines/Sanchez: outcome-led hero subhead,
  punchy fragment leak list, one-line bento bodies. If it can be shown as
  UI, it is not written as prose.
- Problem benchmarks carry animated proportion bars (magenta on ink).
- Nav: The leak / The fix / Setup / Who it's for / Results / FAQ.
- Hero has a slow-drifting magenta glow (24s loop).
