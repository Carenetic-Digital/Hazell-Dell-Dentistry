# Brand Colors

Sourced from `intake/hazel-dell-dentistry-content-sitemap.md` (Brand Guidelines section — archived from the live site).

## Palette

Monochrome/grayscale — no brand color accent anywhere on the site. Photography is desaturated with a gray overlay for a consistent black-and-white look.

**Primary (CTA/buttons):** `#101010` (Near-black)
- Used for: header/hero CTA buttons ("Request Appointment", "Call", "Patient Registration")
- Hover state: inverts to white background with black text/border

**Secondary / Accent:** none — this site intentionally has no color accent. Do not introduce a brand hue; all emphasis comes from value contrast (black/white/gray) and typography.

## Neutral Colors

**Text (primary):** `#333333` (Charcoal) — body/heading copy
**Muted Text (secondary):** `#666666` (Medium gray)
**Tertiary text/borders/dividers:** `#999999` (Muted gray)
**Background:** `#FFFFFF` (White) — primary background
**Panel fill (light):** `#CCCCCC` (Light gray) — secondary backgrounds/panel fills
**Panel fill (dark):** `#404040` (Dark charcoal) — alternating panel fill (used on homepage category tiles)

## Semantic Colors

Not specified by the client — the source site has no form/alert states to reference. Keep these desaturated/neutral to stay consistent with the monochrome aesthetic rather than introducing saturated semantic colors:

**Success:** `#4d4d4d` (dark gray) — pair with a checkmark icon rather than color for meaning
**Warning:** `#666666` (medium gray)
**Error:** `#1a1a1a` (near-black) — pair with icon/text, not red, to preserve the grayscale aesthetic
**Info:** `#666666` (medium gray)

## Notes

- Form validation is the one place a strict monochrome error state may hurt usability — if the design-reviewer flags it, a muted red for error text only is an acceptable exception; everything else should stay grayscale.
- `reference/analysis.md` observed the middle "Cosmetic Dentistry" homepage tile rendering as a pale mint/sage (~`#e9f4f0`) in the archived capture rather than the `#CCCCCC` documented here. Unconfirmed (live site is down, so this can't be rechecked directly) — keeping `#CCCCCC` as the source of truth since it matches the stated monochrome brand direction; the mint tint may be a Wayback rendering artifact.
- For Tailwind v4 with oklch, colors will be converted automatically.
