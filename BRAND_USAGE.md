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

At 720 px and below, stack the 128 px-wide symbol above the text. Both share the same left edge. The centred content group is at most 440 px wide, with at least 32 px outer gutters and a 36 px gap between symbol and text. Reset the logo inset to zero. Top padding is `clamp(48px, 8svh, 72px)` and bottom padding is 48 px, keeping the mobile composition higher as well. Let the description wrap naturally in this layout.

## Favicon / compact tile exception

For compact browser and app tiles, use a square navy canvas with a centred symbol fitted into the middle 75% of its width and height: minimum padding is 12.5% of the full canvas on every side. Measure this from the visible gold artwork, not the transparent bounds of the original SVG. Fit uniformly; the slight aspect-ratio difference creates marginally more padding above and below.

| Canvas | Minimum padding per side | Maximum visible artwork extent |
| --- | --- | --- |
| 16 × 16 px | 2 px | 12 px |
| 32 × 32 px | 4 px | 24 px |
| 64 × 64 px | 8 px | 48 px |

`assets/favicon.svg` implements this rule on a 64 × 64 navy canvas. Its nested SVG fits the unmodified gold artwork into a 48 × 48 region at (8, 8). The visible result is 48 × approximately 46.51 px, centred on both axes. Do not add another layer of padding when consuming this asset.
