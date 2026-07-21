# Design System — Hazel Dell Dentistry

Strict monochrome/grayscale identity: no brand color hue anywhere. All emphasis comes from
value contrast (black/white/gray) and typography, per `intake/branding/colors.md`.

## Colors

Defined as OKLCH tokens in `src/styles/global.css` `@theme`. Source hexes: `intake/branding/colors.md`.

| Token | Value | Use |
|---|---|---|
| `--color-primary` | `#101010` | CTA buttons, dark section backgrounds |
| `--color-primary-foreground` | white | Text/icons on primary |
| `--color-primary-hover-*` | white bg / black text+border | Primary button hover (inverts) |
| `--color-neutral-50` … `-900` | white → `#333333` | Full neutral scale, see below |
| `--color-background` / `--color-foreground` | neutral-50 / neutral-900 | Page bg / body text |
| `--color-muted` | neutral-600 (`#666666`) | Secondary text **on white only** |
| `--color-panel` / `--color-panel-foreground` | neutral-300 (`#CCCCCC`) / neutral-900 | Light alternating section bg |
| `--color-panel-dark` / `--color-panel-dark-foreground` | neutral-800 (`#404040`) / white | Dark alternating section bg, footer |
| `--color-border` | neutral-400 (`#999999`) | **Decorative dividers only** — fails 3:1, don't use on interactive elements |
| `--color-border-interactive` | neutral-500 (`#808080`) | Input/button borders needing WCAG 1.4.11 (3:1) |
| `--color-success` / `--color-warning` / `--color-info` | desaturated grays | Pair with icon/text, not color, for meaning |
| `--color-error-mono` / `--color-error-accessible` | `#1A1A1A` / `#B91C1C` | Mono is the brand default; muted-red is the sanctioned exception for form validation if grayscale proves hard to scan |

**Contrast rules learned during build:**
- `--color-muted` (`#666666`) only clears AA (4.5:1) on white. On the light panel (`#CCCCCC`) it drops to 3.58:1 — use `--color-panel-foreground` (neutral-900) for body copy there instead.
- `--color-neutral-400` (`#999999`, the documented tertiary/border gray) is only 2.85:1 on white — below both the 4.5:1 text minimum and the 3:1 UI-component minimum. Never use it for text or interactive borders; `--color-border-interactive` exists specifically for that case.

## Typography

One serif typeface for everything except the logo, matching the reference site's actual (not
intended) rendering — see `intake/branding/fonts.md`.

| Token | Family | Scope |
|---|---|---|
| `--font-wordmark` | Playfair Display | "Hazel Dell Dentistry" logotype ONLY — never headings/nav/body |
| `--font-display` | PT Serif | h1–h6 |
| `--font-body` | PT Serif | Body copy, nav — same family as display, just weight 400 vs 700 |

Fluid type scale (`--font-size-xs` … `-5xl`) uses `clamp()`, wired to `h1`–`h6`/`p` via `@layer base`
in `global.css` — components generally don't need font-size utility classes, just semantic tags.

| Level | Size (mobile→desktop) | Weight |
|---|---|---|
| h1 | 44px → 70px | 700 |
| h2 | 36px → 52px | 700 |
| h3 | 30px → 40px | 700 |
| h4 | 24px → 32px | 700 |
| h5 | 20px → 26px | 700 |
| h6 | 18px → 22px | 700 |
| body | 17px → 20px | 400 |

## Spacing

- `--spacing-section` (5rem) / `--spacing-content` (2rem) tokens exist but most sections use
  explicit `py-16 md:py-24` for the generous editorial vertical rhythm the brand calls for.
- Content max-widths: `max-w-6xl` for full sections, `max-w-5xl`/`max-w-2xl` for hero/text-only.

## Component Patterns

- **Buttons**: solid `bg-primary` + white text for primary actions; outlined
  `border-border-interactive` for secondary actions. No border-radius, no drop shadow — sharp
  rectangular corners throughout, matching the reference site.
- **Panel tiles** (services grid, hero category tiles): flat `panel`/`panel-dark` fills, underlined
  serif labels, no icons/imagery — intentionally minimal per brand.
- **Alternating section backgrounds**: white → `panel` (light gray) → white → `panel` → `primary`
  (near-black) → footer (`panel-dark`), giving visual rhythm without introducing color.
- **Focus states**: every interactive element has an explicit `focus-visible:outline-2
  focus-visible:outline-offset-2(-4) focus-visible:outline-primary` (or `outline-neutral-50` on dark
  backgrounds) — the default browser outline isn't relied on.
- **Skip link**: `BaseLayout.astro` renders a "Skip to main content" link targeting `#main-content`.
  Every page's `<main>` must carry `id="main-content"`.

## Photography

Per `intake/INTAKE.md`, there are no client-provided images and the brand direction is to use
photography **sparingly** — only where a section structurally needs one, not full-bleed
hero/lifestyle treatment (this deliberately departs from the reference site, whose only actual
photography — the office interior tour and a stock ocean-wave background — was either real license-
free brand asset or an unrelated Wix stock placeholder never swapped out; see `reference/analysis.md`
Notes for detail).

- **Used**: real office interior photos (`public/images/office/`) in the homepage "Tour Our Office"
  section — the one place genuine, on-brand photography exists.
- **Deliberately NOT used**: a stock "doctor" headshot standing in for Dr. Nikas. Hazel Dell
  Dentistry is a real practice with a real doctor; using an unrelated stock photo captioned with her
  name would misrepresent a real person. The "Meet Our Doctor" section uses the logo mark on a dark
  panel instead of a fabricated headshot — replace with a real photo of Dr. Nikas if the client
  provides one.
- **Deliberately NOT used**: a generic full-bleed contact-section background photo (the reference
  site used an unrelated ocean-wave stock image here). The contact section instead uses the primary
  near-black background plus a real Google Maps embed of the actual office address.
- All photos use `<picture>` with AVIF/WebP sources + JPG fallback, explicit `width`/`height`, and
  `loading="lazy"` (nothing below the fold is `eager`).

## Third-party embeds

Google Maps iframe in the homepage contact section required adding `https://www.google.com` to
`frame-src` in `public/_headers`. See `docs/third-party-scripts.md` if adding further embeds.
