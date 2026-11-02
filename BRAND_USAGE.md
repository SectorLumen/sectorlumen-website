# SectorLumen symbol spacing

Working usage guidelines introduced on 2 November 2026 for the public landing page and favicon. No numerical clear-space rule was verified in the supplied brief, supplied asset documentation or accessible portion of the earlier logo conversation. These are new application rules, not a claim about the original designer’s specifications.

## Artwork and colour

Retain `assets/sectorlumen-symbol.svg` unchanged as the master. The landing uses `assets/sectorlumen-symbol-fitted.svg`, whose viewBox is fitted to the visible artwork for predictable edge alignment; paths, clips, gradient definitions and proportions are identical to the master. Preserve the approved supplied geometry, breaks, diagonal, proportions and gold gradient. The supplied asset describes itself as a reconstructed vector, not the original designer source.

Use the approved navy `#0D1C2E` behind the gold symbol. Do not change the favicon background with the browser’s light/dark theme. Do not stretch the symbol or round its corners.

## Measurement

Let W be the width of the visible gold artwork, excluding transparent SVG bounds. The supplied artwork’s visible bounds are x=406.1105…617.8959 and y=347.8436…553.0556. Its visible width is 211.7854 units and height is 205.212 units. Preserve this slightly wider-than-tall ratio.

## Normal clear space

Keep at least W/4 of clear space on every side of the visible symbol, measured to other content or a container edge. This is a minimum exclusion zone, not a requirement to add padding inside every SVG. Larger layout spacing is appropriate where needed.

### Landing composition

Treat the text and gold symbol as one composition. Do not change logo size, content width or vertical placement independently without reviewing the complete page.

The desktop composition is horizontally centred with a maximum width of 1040 CSS px. The title/copy start at its left edge and the visible gold ends at its right edge. At a 1440 px viewport this produces 200 px outer margins; at 1728 px it produces 344 px. These are deliberate whitespace choices for this minimal identity page, not a universal definition of an ideal margin.

Place the composition toward the upper part of the viewport: body top padding is `clamp(88px, 20svh, 200px)`. The copy includes 18 px vertical padding, and its visible title begins approximately another 8.5 px into the title line box. This puts the visible top near 23% of a typical 900 px-tall viewport, avoiding the previously low, vertically centred placement. Bottom padding remains at least 64 px; short viewports may scroll naturally.

The visible desktop symbol is 275 px wide and approximately 266.46 px high. Its 26.5 px top inset aligns the gold top with the visible title top; its bottom sits near the bottom of the information links. This ties its size to the complete left-hand content rather than treating it as a floating decorative icon. Preserve the symbol’s native aspect ratio.

The default column gap is 110 px. At 1100 px viewport width and below, the gap becomes 60 px and the symbol scales between 200 and 275 px using `clamp(200px, 25vw, 275px)`. Desktop page gutters use `clamp(56px, 6.25vw, 80px)`; this keeps the normal W/4 minimum clear space around the visible gold. The description keeps its deliberate two-line break throughout the side-by-side layout.

At 720 px and below, stack the symbol above the text, sharing one left edge and a 32 px gap. The centred content group is at most 440 px wide. Gutters are `clamp(28px, 7.5vw, 32px)` with safe-area inset protection. Logo width is `clamp(112px, 30vw, 120px)` with its native aspect ratio. Top padding is `clamp(40px, 7svh, 64px)` and bottom padding is at least 40 px. Reset the logo inset to zero and let the description wrap naturally. Contact and information links have a minimum 44 px tap height. Allow the links to wrap rather than overflow narrow or enlarged layouts. Short landscape viewports use the compact two-column exception documented below.

## Favicon / compact navy tile — final midpoint

Approved on 2 November 2026. This supersedes both the original 75% visible-gold width and the neighbouring prototype’s approximately 59.47% visible-gold width. The new visible-gold width is **67.25% of the canvas**, approximately the midpoint.

Use a 96 × 96 navy canvas. Place the fitted symbol viewBox `406.1105 347.8436 211.7854 205.212` in a 64.56 × 64.56 square at (15.72, 15.72), preserving its aspect ratio. The visible gold width is 64.56 px. Horizontal padding is 16.375% per side. The slightly wider-than-tall mark gives approximately 17.42% padding above and below. Centre the visible artwork, not the original padded viewBox.

| Canvas | Visible gold width | Side padding |
| --- | --- | --- |
| 16 × 16 | 10.76 px | 2.62 px |
| 32 × 32 | 21.52 px | 5.24 px |
| 64 × 64 | 43.04 px | 10.48 px |
| 96 × 96 | 64.56 px | 15.72 px |

Keep the navy background `#0D1C2E` fixed across light/dark themes. Preserve sharp square corners. Do not add extra internal padding to the complete tile. `sectorlumen-favicon.svg` and `sectorlumen-app-tile.svg` are the same padded artwork for their respective uses. CSS dimensions set the canvas size; the internal padding is already built in.

## Approved SS3 gradient and geometric background

SS3 is the approved production direction. The more aggressive SSS studies are not part of the approved brand pack.

### Canvas

Desktop: `linear-gradient(117deg, #0D1C2E 28%, #10243B 64%, #1B334A 100%)`.

Mobile, at 720 px and below: `linear-gradient(150deg, #11243A 0%, #0D1C2E 50%, #192F45 100%)`.

These are CSS angles: 0° points upward and 90° points right. Do not reinterpret them as SVG coordinate angles; use the provided SVG exports or explicit SVG gradient endpoints.

### Decorative silhouette

Use the exact fitted symbol as a monochrome mask. This is decorative secondary geometry, not a replacement for the gold logo. Its fill is `linear-gradient(135deg, #354D63, #20384F)`, with opacity 0.48 desktop and 0.28 mobile. Desktop correction: multiply the silhouette by a vertical alpha fade, measured from its own top: 100% at 0%, 82% at 20%, 42% at 45%, 12% at 70%, and fully transparent at 92% of its height. CSS uses alpha bytes FF/D1/6B/1F/00; the SVG exports use those exact values. This makes the lower edge disappear even on tall screens. Keep the gold foreground logo fully opaque. Mobile uses a softer top-band fade starting at 45% of the band height. No blur, animation or distortion is applied.

On a 1440 × 900 canvas, the decorative mark is 720 px wide at (805, 276), cropped at the right and bottom edges of the canvas. It preserves the symbol’s native aspect ratio. The foreground gold logo remains 275 px wide at (965, 206.5).

On a 390 × 844 canvas, the decorative mark is 330 px wide at (101.25, 22). The foreground gold logo is 117 px wide at (29.25, 59.08). Anchor mobile decoration to the centred content column, rather than the viewport right edge, to preserve its relationship to the logo across phone widths.

### Worksheet geometry

Desktop grid: 96 × 40 px cells with 1 px rules in `#A0BBD21B`. Its 768 × 640 px field starts at (773, 166.5) on the desktop reference. Fade with `radial-gradient(ellipse at 47% 37%, black 20%, transparent 73%)` as a mask.

The selected-cell accent is 192 × 40 px at (869, 526.5), border `#94AEC32B`, fill `#8AA9C307`. Its 4 × 4 px handle is `#8DA8BB`. It is a decorative reference to worksheet geometry, not a functional control.

Mobile grid: 64 × 28 px cells in a 480 × 260 px field at (-44.75, 30). Fade with `radial-gradient(ellipse at 50% 35%, black 15%, transparent 80%)`. Apply overall grid opacity 0.6. The accent is 128 × 28 px at (189.25, 153), with overall opacity 0.55.

The final two hex digits above are alpha values, not separate RGB colours. Exact tokens and all gold-gradient stops are supplied in `guidelines/tokens.json`.

### Responsive placement

The background and foreground share the same centred 1040 px composition. At 721–1100 px, fade the decorative frame from transparent through 56% of its width to fully visible at 72%, keeping geometry out of the copy. At 720 px and below, confine decoration to a top band equal to the mobile top padding + visible logo height + 24 px. Start fading at 45% and reach transparency at 100%. The artwork disappears 8 px before the title line box. Use the same centred maximum-440 px content column as the foreground. For short landscape viewports (width ≤960 px and height ≤500 px), use a compact two-column layout with a 112 px logo and omit the decorative layer.

The provided CSS is the canonical responsive implementation. Desktop/mobile SVGs are fixed reference compositions at 1440 × 900 and 390 × 844. Preserve their viewBox and aspect ratio. For a differently proportioned wizard panel, crop deliberately or adapt the CSS composition; do not stretch the SVG unevenly or blindly scale a desktop composition into a phone.

## Typography and hierarchy

Wordmark/title: Arial Regular (400), with Helvetica and sans-serif fallbacks. Desktop landing title: 48 px, line-height 1.12, letter-spacing -1.25 px. Mobile title: `clamp(34px, 9vw, 39px)`, letter-spacing -0.8 px. The text SVG wordmarks remain editable text and require Arial for an exact rendering; they are not outlined artwork.

Foreground text: `#F5F6F8`. Supporting text: `#C3CCD6`. Muted links: `#ADB9C7`. Description: 19 px desktop / 17 px mobile, weight 400, line-height 1.6. Do not turn the company title into a heavy display headline.

## Wizard handoff

Use `logo/sectorlumen-app-tile.svg` for a navy application tile and `logo/sectorlumen-symbol-fitted.svg` when the symbol needs no surrounding tile. Set size on the complete tile rather than adding padding inside it again. Keep the full-colour gold mark as the primary identity.

Use the SS3 background or overlay as optional decorative artwork in introduction/splash/cover regions. Keep worksheet data, file names, form labels and actions on stable readable surfaces. Do not place the decorative grid under dense financial data or make it resemble an interactive worksheet when it is not one. Decorative background images should be ignored by assistive technology (`aria-hidden="true"` or CSS backgrounds); actionable images need meaningful labels.

Use the supplied `*-background.svg` for a complete navy artwork; `*-overlay.svg` is transparent and assumes a dark navy/SS3 background. `*-with-symbol.svg` includes the gold foreground logo, so do not place another logo on top of it. All background SVGs have inline vector geometry and gradients, with no external files, embedded raster images or scripts.

## Preservation rules

- Preserve all primary logo paths, proportions, diagonal breaks and gold/rim gradient stops.
- Never stretch, rotate, recolour or simplify the primary gold mark.
- Cropping and monochrome fills are for the decorative silhouette only.
- Keep favicon/app-tile padding separate from ordinary logo clear space.
- Retain the unmodified master alongside fitted and padded derivatives.
- New visual experiments do not silently replace these approved specifications.
