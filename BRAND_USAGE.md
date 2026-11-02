# SectorLumen symbol spacing

Working usage guidelines introduced on 2 November 2026 for the public landing page and favicon. No numerical clear-space rule was verified in the supplied brief, supplied asset documentation or accessible portion of the earlier logo conversation. These are new application rules, not a claim about the original designer’s specifications.

## Artwork and colour

Retain `assets/sectorlumen-symbol.svg` unchanged as the master. The landing uses `assets/sectorlumen-symbol-fitted.svg`, whose viewBox is fitted to the visible artwork for predictable edge alignment; paths, clips, gradient definitions and proportions are identical to the master. Preserve the approved supplied geometry, breaks, diagonal, proportions and gold gradient. The supplied asset describes itself as a reconstructed vector, not the original designer source.

Use the approved navy `#0D1C2E` behind the gold symbol. Do not change the favicon background with the browser’s light/dark theme. Do not stretch the symbol or round its corners.

## Measurement

Let W be the width of the visible gold artwork, excluding transparent SVG bounds. The supplied artwork’s visible bounds are x=406.1105…617.8959 and y=347.8436…553.0556. Its visible width is 211.7854 units and height is 205.212 units. Preserve this slightly wider-than-tall ratio.

## Normal clear space

Keep at least W/4 of clear space on every side of the visible symbol, measured to other content or a container edge. This is a minimum exclusion zone, not a requirement to add padding inside every SVG. Larger layout spacing is appropriate where needed.

On the landing page, the visible symbol is 175 CSS px wide, preserving the visible size of the preceding 190 px image with transparent bounds. Minimum clear space is therefore approximately 44 px.

The text-and-symbol group uses a centred 940 px maximum-width grid. The visible gold right edge sits on the grid’s right edge; the title and copy begin at its left edge. This produces equal outer margins instead of shifting the symbol inside an oversized right column. The minimum page gutter is 48 px above the stacked breakpoint. Do not use independent horizontal transforms to reposition the symbol.

The visible gold top edge aligns with the visible top of the SectorLumen title. A 26.5 CSS px top inset compensates for the copy’s 18 px vertical padding and the 48 px Arial title’s line box. Keep the title and symbol on this shared visual top line, not merely on equal element-box coordinates.

At 680 CSS px and below, the symbol stacks above the text at 110 CSS px of visible gold, with a 42 px row gap and 28 px minimum page gutter. The symbol and copy share the same left edge; the top inset resets to zero. The centred content group is at most 440 px wide. Minimum clear space is approximately 28 px.

## Favicon / compact tile exception

For compact browser and app tiles, use a square navy canvas with a centred symbol fitted into the middle 75% of its width and height: minimum padding is 12.5% of the full canvas on every side. Measure this from the visible gold artwork, not the transparent bounds of the original SVG. Fit uniformly; the slight aspect-ratio difference creates marginally more padding above and below.

| Canvas | Minimum padding per side | Maximum visible artwork extent |
| --- | --- | --- |
| 16 × 16 px | 2 px | 12 px |
| 32 × 32 px | 4 px | 24 px |
| 64 × 64 px | 8 px | 48 px |

`assets/favicon.svg` implements this rule on a 64 × 64 navy canvas. Its nested SVG fits the unmodified gold artwork into a 48 × 48 region at (8, 8). The visible result is 48 × approximately 46.51 px, centred on both axes. Do not add another layer of padding when consuming this asset.
