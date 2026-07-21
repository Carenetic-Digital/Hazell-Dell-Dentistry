# Reference Site Analysis

**Source:** https://www.hazeldelldentistry.com
**Live site status:** UNREACHABLE — returns HTTP 404 from Wix's edge (`x-wix-request-id` header present, so the Wix hosting infrastructure responds, but the domain/site is not resolving to live content). Confirmed via `curl -I`.
**Fallback used:** Wayback Machine captures, closest available snapshots to the Jan 21, 2026 target date (per-page timestamps below). This is the same fallback approach used for the prior text-content scrape in `intake/hazel-dell-dentistry-content-sitemap.md`.
**Crawled:** 2026-07-20
**Pages captured:** 5 of 5 requested

| Page | Wayback timestamp used | Snapshot URL |
|---|---|---|
| Home | 20260121163022 | https://web.archive.org/web/20260121163022/https://www.hazeldelldentistry.com/ |
| Tour The NEW Office | 20260121155807 | https://web.archive.org/web/20260121155807/https://www.hazeldelldentistry.com/tour-the-new-office |
| Meet Dr. Nikas | 20260121145231 | https://web.archive.org/web/20260121145231/https://www.hazeldelldentistry.com/meet-dr-nikas |
| Services | 20260208045612 | https://web.archive.org/web/20260208045612/https://www.hazeldelldentistry.com/services-2 (no Jan 2026 capture existed for this page; closest available is Feb 8, 2026) |
| Patient Resources | 20251209130415 | https://web.archive.org/web/20251209130415/https://www.hazeldelldentistry.com/patient-resources (closest available is Dec 9, 2025) |

## Discovered Pages

Real, navigable content pages only. Wix system/app-scaffolding routes (`/booking-calendar`, `/checkout`, `/cart-page`, `/account/*`, `/thank-you-page`, `/service-page`, `/popup-h2agg`, `/fullscreen-page`, `/booking-form`, `/book-online`) are excluded per instructions — these are Wix Bookings/Stores/Members-Area scaffolding, not intentional content pages, matching what's already flagged in the content-sitemap doc.

| Path | Title | In Nav | Has Form |
|------|-------|--------|----------|
| `/` | Home | Yes | No (embeds Google Map + reviews widget, no lead form) |
| `/tour-the-new-office` | Tour The NEW Office | Yes | No |
| `/meet-dr-nikas` | Meet Dr. Nikas | Yes | No |
| `/services-2` | Services | Yes | No |
| `/patient-resources` | Patient Resources | Yes | No (links out to a New Patient Registration PDF and an FAQ PDF; no on-page form) |

Note: "Contact Us" in the nav is an anchor link (`#contactus`) to a section on the homepage, not a separate route. It is not counted as a distinct page.

This matches the "Full Sitemap" table in `intake/hazel-dell-dentistry-content-sitemap.md` exactly for real content pages — no additional content pages were found during this crawl, and no content pages from that list were missed.

**Sitemap discrepancy to flag:** `intake/sitemap.md` (the dev's planned IA) restructures Services as `/services` with 15 individual child routes (`/services/emergency-dental-care`, etc.) and adds an `/about` page. The reference site itself has no individual service subpages — it's a single flat `/services-2` page with all 15 services stacked as sections, and no `/about` page exists (About-page content in the content doc is explicitly marked as placeholder/no-source-content). This is presumably an intentional IA upgrade for the new site, not something believed to exist on the reference — just flagging so it's a deliberate choice, not a misunderstanding.

## Design Patterns

### Layout Types
- **Homepage:** Full-bleed hero (image slideshow gallery, currently broken in this Wayback capture — shows as a gray placeholder box with only the slideshow arrow visible) overlapping three stacked category tiles (General Dentistry / Cosmetic Dentistry / Emergency Dental Care). Below: centered headline + body copy, then a 2-column x 7-row grid of dark gray service-name tiles (14 total, "Panoramic & CBCT" combines the last two services into one tile), then a 2-column "Meet Our Doctor" block (photo + bio), then a full-bleed photographic background "CONTACT US" section, then a minimal footer with social icons only.
- **Interior pages (Meet Dr. Nikas, Patient Resources):** Same header/nav, then a two-column layout — a left-hand narrow column of Times-New-Roman serif category/section labels, paired with a wider right-hand content column (body copy, bulleted lists, or black CTA buttons). Very generous vertical whitespace between sections.
- **Services page (`/services-2`):** Single flat page, 15 stacked service entries, each following the same left-label / right-description two-column pattern as Patient Resources, no imagery, no per-service icons — pure text list separated by large vertical gaps.
- **Tour The NEW Office:** Pure photo-dump layout — full-color, full-width interior photography (waiting room, reception desk, treatment room) with no accompanying body copy visible on this page. Several image slots didn't render in this Wayback capture (broken image icons with only alt text showing), suggesting some images live on Wix's media CDN and weren't fully archived.

### Components
- **Header/Nav:** White bar. Logo lockup (grayscale line-art tooth icon + "Hazel Dell Dentistry" wordmark in ITC-Tiffany-style serif, confirmed rendering correctly via custom `@font-face`) on the left. Horizontal nav links (Home / Tour The NEW Office / Meet Dr. Nikas / Services / Patient Resources / Contact Us) centered/right. Two solid-black rectangular buttons on the far right: "Call: 317-706-1111" and "Patient Registration," white text on near-black (`#101010`) background.
- **Hero:** Full-width photo gallery/slideshow (3 images per the content doc) with a right-arrow nav control, layered under three stacked "category" tiles (alternating dark-charcoal / light-gray-mint / dark-charcoal fills) that read as decorative rather than functional links.
- **Cards/tiles (service grid):** Solid dark-gray rectangular tiles, underlined white serif text centered, 2-column grid, no icons, no imagery — flat/minimal.
- **CTA buttons (global):** Solid near-black background, white sans text, sharp rectangular corners (no visible border-radius), no drop shadow.
- **Footer:** Minimal — just Instagram and Facebook icon links on a white background, no column-based link structure, no address/hours repeated in the footer.

### Screenshots
- Home: `reference/screenshots/home.png`
- Tour The NEW Office: `reference/screenshots/tour-the-new-office.png`
- Meet Dr. Nikas: `reference/screenshots/meet-dr-nikas.png`
- Services: `reference/screenshots/services-2.png`
- Patient Resources: `reference/screenshots/patient-resources.png`

## Extracted Design Values

### Colors

Extracted via computed-style inspection (`getComputedStyle`) across ~2,000 DOM nodes per page, cross-checked against visual inspection of the screenshots.

```
Background (page): #ffffff (white) — confirmed
Header/footer background: #ffffff (white) — confirmed
Primary CTA button (nav "Call" / "Patient Registration" / Patient Resources buttons): #101010 bg, near-black — confirmed matches content doc
Heading text (h2 "Beautiful Smiles", h3 section labels): #101010 — confirmed
Body text: #333333 (charcoal) and #666666 (medium gray, used for longer paragraph copy e.g. service descriptions) — confirmed, doc lists both
Muted/tertiary: #999999 — present in computed styles, used for borders/secondary fills — confirmed
Service-grid tile background: #666666-#999999 range observed (doc's documented ~#404040 charcoal reads lighter in this capture, closer to medium gray than true charcoal — minor discrepancy, possibly a rendering/compression artifact of the Wayback capture)
Middle category tile ("Cosmetic Dentistry"): observed as a very pale mint/sage tone, ~#e9f4f0, NOT a neutral gray #cccccc as documented — the one place a slight color tint appears to break from strict monochrome. Treat #e9f4f0 as the more likely actual value pending live-site confirmation.
Default/unstyled link color: #0000ee observed on at least one element (browser-default blue) — likely an unstyled fallback link Wix didn't theme, not an intentional brand color.
```

**Overall: the monochrome/grayscale claim in the content doc holds true for UI chrome** (nav, buttons, headings, tiles, footer) **but does NOT hold for photography.** See Notes below — this is the single biggest discrepancy found.

### Typography

```
Wordmark ("Hazel Dell Dentistry" logo, header): custom web font wfont_ec82ce_ebf785c94a2e4c12811428e3776c06ff (loaded from Wix's font CDN, family reported as "orig_itc_tiffany_light") — confirms ITC Tiffany Light per content doc. Renders at ~78px in the header, elegant high-contrast serif with flourishes as described.
Headings (h2 "Beautiful Smiles", service names, page titles like "Patient Resources"): "Times New Roman", Times, serif — confirmed matches content doc. h2 observed at ~70px on the homepage hero headline; service-entry headings on /services-2 render much smaller, ~20px.
Body copy (paragraphs, service descriptions, patient-resources copy): "Times New Roman", Times, serif, ~20px, color #666666, line-height "normal" (browser default ~1.15, not deliberately loosened) — confirmed serif-everywhere pattern from doc, but the line-height is tighter than a typical "relaxed" body rhythm; no explicit override found.
Navigation: computed style on the rendered nav items in this capture resolves to "Times New Roman", Times, serif at 14px — NOT "DIN Next" as the content doc states. However, a `din-next-w01-light` @font-face IS declared and its woff2 files ARE present in the page's loaded stylesheets — so DIN Next is real and available on the site, but it is not actually applied to the main nav <p> labels in this snapshot (no CSS rule matching the nav item's class sets font-family; it inherits Times New Roman from a higher-level default). Flagging as a discrepancy worth a second look rather than asserting confidently either way.
CTA button text (Call/Patient Registration/Patient Resources buttons): Arial/Helvetica sans-serif, ~10px, visually tracked-out/letter-spaced in the screenshots — this is the one place a sans-serif is confirmed in use, consistent with a nav-adjacent utility font role even if it isn't literally DIN Next.
```

### Spacing

```
Container width: page renders at a fixed ~1440px desktop canvas (typical of a Wix "fixed-width" editor site rather than a fluid responsive container) — no evidence of a constrained max-width content column narrower than the viewport.
Section vertical rhythm: very large — multiple hundreds of pixels of whitespace between content blocks on Patient Resources and Meet Dr. Nikas pages (partly inflated by broken/blank image embeds in this Wayback capture, so treat exact px gaps as approximate, but the visual intent — generous negative space, editorial pacing — is clearly deliberate).
Service-grid layout: 2-column x 7-row grid of tiles on the homepage, tiles roughly equal width, small (~8-16px) gaps between tiles.
Two-column interior layout: consistent left label column (~250-370px) + right content column pattern across Patient Resources, Services, and (implicitly) Meet Dr. Nikas.
Header height: ~150-200px including logo, nav row, and CTA buttons in a single generous header band.
```

## Homepage Content (Extracted)

Content below is corroborated against this capture and matches `intake/hazel-dell-dentistry-content-sitemap.md` — no material differences in the copy itself, only in the visual/photographic treatment (see Notes).

```
Navigation:
  Logo: tooth icon (grayscale line-art) + "Hazel Dell Dentistry" wordmark
  Nav items: Home, Tour The NEW Office, Meet Dr. Nikas, Services, Patient Resources, Contact Us
  Header CTAs: "Call: 317-706-1111", "Patient Registration"

Hero:
  Category tiles (decorative labels): "GENERAL DENTISTRY" / "COSMETIC DENTISTRY" / "EMERGENCY DENTAL CARE"
  Headline: "Beautiful Smiles"
  Subheadline: "We are focused on the needs of patients of all ages and strive to make every visit with us as comfortable and stress-free as possible. With a wide range of treatments and the latest advancements in dental technology we can show you everything we can do to improve your oral health."
  (No distinct hero CTA button rendered visibly in this capture beyond the header's "Patient Registration"/"Call" buttons — content doc's noted "Request Appointment" button linking to /contact-us was not visually present; may not have rendered, or may sit within the broken gallery area.)

Services grid (homepage teaser, 14 tiles — "Panoramic & CBCT" combines two services into one tile):
  Emergency Dental Care, Dental Cleanings & Exams, Intraoral Camera, Snore Guard, Dental Crowns, Composite Dental Filings, Digital X-Rays, Clear Aligners, Teeth Whitening, Dental Veneers, Dentures & Partials, Implant Crowns, Dental Bridges, Panoramic & CBCT

Meet Our Doctor:
  Headline: "Meet Our Doctor"
  Body: "Dr. Nikas's mission at Hazel Dell Dentistry is to provide every patient with evidence based dentistry for a lifetime of optimal oral health. We are a full service, neighborhood dentist in Carmel, IN, dedicated to our patients needs with any of our Services." (links out to Services page)
  Name caption: "Dr. Suzette Nikas"
  Photo: full-color headshot, white coat, present in this capture (not desaturated — see Notes)

Testimonials: none present — confirms content doc's note that homepage relies on a reviews embed, not authored quotes. No visible review widget rendered in this Wayback capture (likely a live third-party embed Wayback can't replay).

CONTACT US section:
  Headline: "CONTACT US"
  Email Address: hazeldelloffice@gmail.com
  Phone: 317-706-1111
  Our Address: 13190 Hazel Dell Pkwy #160, Carmel, IN 46033
  Open Hours: Monday - Thursday 7:00AM - 4:00PM
  Background: full-color ocean/beach wave photograph (stock image) — NOT desaturated, NOT a dental-office photo (see Notes)

Footer:
  No company description or contact info repeated
  Social links: Instagram, Facebook icons only
```

### Homepage Section Order

```
1. Navigation bar (white bg, logo left, nav center/right, two black CTA buttons far right)
2. Hero: photo gallery/slideshow (broken/placeholder in this capture) with 3 stacked category tiles overlaid near the bottom (General Dentistry / Cosmetic Dentistry / Emergency Dental Care)
3. Headline + body copy ("Beautiful Smiles" + supporting paragraph), centered, white background
4. Services grid — 14 dark-gray tiles, 2 columns x 7 rows, underlined white serif labels
5. "Meet Our Doctor" — 2-column: doctor photo (left) + headline/bio copy (right), name caption below photo
6. "CONTACT US" — full-bleed photographic background section with email/phone/address/hours in a 2x2 grid, white text
7. Footer — white background, Instagram + Facebook icons only, no other content
```

## Notes

- **Live site is down.** `https://www.hazeldelldentistry.com` returns a Wix-served HTTP 404 (confirmed via `curl -I`), not a normal page. All visual/design analysis in this document comes from Wayback Machine captures dated between Dec 9, 2025 and Feb 8, 2026, closest available to the Jan 21, 2026 target used for the earlier text-content scrape. If the live site comes back online before the homepage build phase, it would be worth a quick re-check, particularly of the two flagged color/font discrepancies below.

- **Biggest discrepancy: photography is NOT monochrome/desaturated.** The content doc states "Photography (hero images, doctor photo) is desaturated with a gray overlay for a consistent black-and-white look." This capture shows the opposite on every page where images actually rendered:
  - `/tour-the-new-office` is entirely full-color interior photography — vivid teal/turquoise accent walls, burnt-orange lounge chairs, a colorful abstract sculpture at the reception desk, gray herringbone flooring. Nothing about it is desaturated.
  - The homepage "Meet Our Doctor" photo of Dr. Nikas is a normal full-color headshot (natural skin tones, white coat).
  - The homepage "CONTACT US" section uses a full-color ocean/wave stock photo background, which is also thematically disconnected from a dental practice (likely a generic Wix stock placeholder never swapped out, similar to the "Carmel Distinctive Dental" boilerplate text already flagged in the content doc).
  - Recommendation for the new build: treat the monochrome/grayscale direction as intentional for **UI chrome** (nav, buttons, text, tile backgrounds) but don't force real practice photography through a desaturation filter unless that's a deliberate art-direction choice — the reference site's actual (if accidental) photography is full-color, and the office itself has colorful, modern interior design (teal walls, orange furniture) worth showcasing in true color on the Tour page.

- **Secondary discrepancy: nav font.** Content doc states nav uses "DIN Next (Light)." This capture's computed styles show nav items actually rendering in Times New Roman (the DIN Next font file is loaded on the page via `@font-face` but no CSS rule applies it to the nav labels sampled). Treat "DIN Next for nav" as unconfirmed pending a live-site recheck; Times New Roman throughout (nav included) is what's actually observed rendering.

- **Middle category tile color:** observed as a pale mint/sage (~`#e9f4f0`) rather than the documented neutral `#CCCCCC`. Minor, but if strict monochrome is a hard requirement for the new site, don't carry this exact tint forward — normalize it to a true gray.

- **Broken/missing imagery in this capture:** the homepage hero gallery, and most images on `/meet-dr-nikas`, failed to load in the Wayback replay (shown as gray placeholder boxes or broken-image icons with only alt text visible, e.g. "GOPR0408_1672205659530.jpg", "Dr. Nikas Hazel Dell Dentistry Carmel IN"). This is a Wayback archiving gap (likely the images live on Wix's media CDN under a different host that wasn't fully crawled), not necessarily reflective of the live site. No client-supplied images exist per the content doc's notes, so the new build should source new stock/placeholder photography regardless — but the interior office photos on `/tour-the-new-office` (which DID render) are the one piece of real, usable brand photography available from the reference, and they are in full color.

- **Reviews/testimonials widget did not render** in the archive (third-party embeds generally don't replay from Wayback) — corroborates the content doc's note that there's no authored testimonial copy to fall back on.

- **Hero "Request Appointment" CTA** noted in the content doc was not visually confirmed in this capture — it may be embedded in the broken gallery overlay area and simply didn't render. Not a hard contradiction, just unconfirmed.

- **Overall aesthetic confirmed:** minimalist, editorial, generous whitespace, black/white/gray UI with a decorative serif wordmark — matches the content doc's "minimalist, editorial, black-and-white" framing for structure and chrome, just not for photography.
