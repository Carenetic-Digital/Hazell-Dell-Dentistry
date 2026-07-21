# Brand Typography

Sourced from `intake/hazel-dell-dentistry-content-sitemap.md` (Brand Guidelines section) and confirmed/corrected against `reference/analysis.md` (live computed-style inspection of Wayback captures, 2026-07-20).

## Font Families

### Wordmark Font (logo only)
**Source font:** ITC Tiffany (Light) — elegant, high-contrast serif with decorative flourishes, used only for the "Hazel Dell Dentistry" logotype. Not a Google Font; confirmed via `reference/analysis.md` as a custom Wix web font (`orig_itc_tiffany_light`).
**Suggested substitute:** Playfair Display (or another decorative high-contrast serif) if no licensed ITC Tiffany font file is provided.
**Scope:** Logo/wordmark treatment only — do not use for page headings, nav, or body copy.

### Display Font (Headings, H2–H6)
**Source font:** Times New Roman (serif) — used for all page headings and paragraph copy site-wide, including the homepage hero.
**Google Fonts substitute:** PT Serif or Noto Serif (both close, readable serif matches); Times New Roman itself is also available as a system font stack if an exact match is preferred over a webfont.
**Weights:** 400 (Regular), 700 (Bold)

### Body Font (Text)
**Source font:** Times New Roman (serif) — same font as headings; the site does not use a separate sans body font.
**Google Fonts substitute:** PT Serif or Noto Serif (match the heading font choice)
**Weights:** 400 (Regular)

### Navigation Font (nav menu items — same as body/headings)
**Decision:** Times New Roman, same as headings/body — one serif typeface site-wide. The original content doc documented an intended "DIN Next (Light)" nav font, but `reference/analysis.md` confirmed the archived site actually renders nav items in Times New Roman (the DIN Next font file loads on the page but no CSS rule ever applies it). Build to what's actually observed rather than the undelivered intent — do not introduce a separate sans-serif for nav.

## Font Loading Strategy

Fonts are loaded via Google Fonts with `display=swap` to prevent layout shift.
The browser will show a system font fallback until the custom font loads.

## Custom Fonts

If the client can provide licensed ITC Tiffany and/or DIN Next font files later:
1. Place font files in `public/fonts/`
2. Create @font-face rules in global.css
3. Update `--font-display` / `--font-body` / `--font-nav` in @theme

Until then, use the Google Fonts substitutes above.
