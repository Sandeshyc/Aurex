---
name: Aurex Club
description: A premium Bangalore gym presented as a dark, quiet members' club in ivory and champagne gold.
colors:
  ink: "#0b0b0a"
  panel: "#151513"
  ivory: "#f2ede4"
  muted: "#aaa397"
  line: "rgb(242 237 228 / .14)"
  gold: "#c8a96a"
  gold-hi: "#d9bd82"
  err: "#f0a48a"
typography:
  display:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.9rem, 7.2vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.4rem, 5.4vw, 4.8rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 125"
  title:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.8rem, 3vw, 2.8rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 125"
  statement:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.6rem, 3.4vw, 3rem)"
    fontWeight: 300
    lineHeight: 1.22
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 112"
  body:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 600
    letterSpacing: "0.14em"
    fontVariation: "'wdth' 112"
  fine:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  none: "0px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "36px"
  xl: "64px"
  gutter: "clamp(20px, 5vw, 72px)"
  section: "clamp(96px, 14vh, 160px)"
  section-lg: "clamp(96px, 16vh, 180px)"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 28px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.gold-hi}"
    textColor: "{colors.ink}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ivory}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 28px"
    height: "52px"
  button-outline-hover:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink}"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.gold}"
    typography: "{typography.label}"
    padding: "6px 0"
  input-line:
    backgroundColor: "transparent"
    textColor: "{colors.ivory}"
    rounded: "{rounded.none}"
    padding: "10px 0"
  choice-slot:
    backgroundColor: "transparent"
    textColor: "{colors.ivory}"
    rounded: "{rounded.none}"
    padding: "12px 8px"
  choice-slot-selected:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink}"
  nav-link:
    textColor: "{colors.ivory}"
    typography: "{typography.label}"
    padding: "8px 0"
---

# Design System: Aurex Club

## Overview

**Creative North Star: "The Members' Room After Dark"**

Aurex is a premium club seen at night: a near-black room, warm ivory type, and one thread of champagne gold taken from the name (aurum). Photography does the emotional work. It runs full-bleed and dark, sits under soft ink scrims, and is never boxed or decorated. Around it the interface stays quiet, with hairline rules, square edges, generous dark space and very little copy.

Type carries the identity. Archivo, a single variable family, is stretched wide (108 to 125% width) for uppercase display and left at normal width for reading. Wide uppercase headlines next to plain sentence-case body text give the page its club register without a second typeface. Density is low. Sections breathe on viewport-scaled padding, and lists run as ruled rows, not cards.

The world follows the category standard set by the best premium gym sites (Equinox for craft, Indian gym conventions for the free-trial-first offer), executed at full craft. It refuses the cheap gym vocabulary: neon, glow, stock badges, crowded cards.

**Key Characteristics:**
- Near-black ground with one warm-ivory text colour and one champagne-gold accent.
- One variable family: wide uppercase display, normal-width body.
- Full-bleed dark photography under ink gradient scrims.
- Hairline rules (1px, ivory at 14%) separate everything; no card boxes.
- Square corners everywhere.
- Slow, long-eased motion: image settle, clip reveals, rising copy.

## Colors

A near-monochrome warm-dark palette with a single metallic accent used sparingly.

### Primary
- **Champagne Gold** (gold): the only accent. It fills the primary call to action, colours the arrow link buttons, plan numerals, column headings in the visit grid, the short tick dashes in feature lists, the "CLUB" half of the wordmark, the focus ring, text selection and the input caret.
- **Lit Champagne** (gold-hi): the hover state of the gold button, and nothing else.

### Neutral
- **Club Ink** (ink): the page ground, the nav when it turns solid (at 94% opacity), the base of every photo scrim, and the text colour on gold and ivory fills.
- **Panel Black** (panel): one tonal step up from ink. It marks alternating bands (training, trial), always topped by a hairline.
- **Warm Ivory** (ivory): all headings and body text on ink. It is also the fill of a selected choice slot and of the outline button on hover.
- **Stone** (muted): supporting copy, form labels, table row headers, the +91 prefix, fine print and footer links at rest.
- **Hairline** (line): the 1px rule used for section tops, ruled lists, the plan table, the visit grid, the footer and the solid nav's bottom edge.

### Functional
- **Clay Error** (err): invalid input underline and error messages only. It is a status colour, not a second accent.

### Named Rules
**The Single Thread Rule.** Gold is the only hue in the interface. Use it for one filled action per view at most, and otherwise in small amounts: numerals, arrows, dashes, short headings. Never use it for body copy or large fills.

**The Ink Scrim Rule.** Text over photography sits on a gradient of ink (rgb 11 11 10), never on a box or a blur. Use a bottom scrim reaching about 85 to 88% opacity, plus a side scrim when copy sits lower-left.

## Typography

**Display Font:** Archivo (self-hosted variable, weight 100–900, width 62–125%), falling back to system-ui, -apple-system, Segoe UI, sans-serif
**Body Font:** Archivo at normal width

**Character:** One family, two widths. At 125% width in uppercase it reads like an engraved club nameplate. At 100% it is plain and legible. The contrast between widths does the job a second typeface would.

### Hierarchy
- **Display** (500, clamp 2.9–6rem, line-height 0.98, 125% width, uppercase): the hero headline only. Under 860px it switches to 11.2vw at 108% width so two short lines still fit.
- **Headline** (500, clamp 2.4–4.8rem, 1.02, 125% width, uppercase): section titles (h2). The trial h2 uses a slightly smaller clamp (2.2–3.8rem).
- **Title** (500, clamp 1.8–2.8rem, 1.02, 125% width, uppercase): feature titles. Tile, plan and confirmation titles use the same style one step smaller (roughly 1.5–2.3rem).
- **Statement** (300, clamp 1.6–3rem, 1.22, 112% width, sentence case, max 28ch): the single large light-weight intro paragraph. Light and sentence case on purpose, so it reads as voice, not headline.
- **Body** (400, 1.0625rem, 1.6): all running copy, capped at 40–46ch in feature and section-head text.
- **Label** (600, 0.82rem, letter-spacing 0.14em, 112% width, uppercase): buttons, link buttons, nav links (0.8rem, weight 500) and footer links. Form labels use a tighter variant (0.75rem, 0.16em, Stone).
- **Fine** (400, 0.88rem, Stone): placeholder disclosures, error text, notes.

### Named Rules
**The Two Widths Rule.** Uppercase is always set wide (112% or more). Sentence case is always normal width, except the light 112% statement. Never set body text wide, and never set narrow uppercase.

**The No Second Face Rule.** Archivo carries every role. Add hierarchy with width, weight and case, not another family.

## Layout

The page is a vertical run of full-width bands with a fluid side gutter (clamp 20–72px). Band padding scales with the viewport (clamp 96–160px; the intro opens at up to 180px). The hero fills the screen (100svh), with copy anchored lower-left and capped at 1100px.

Features use an asymmetric 7/5 split. The image runs to the viewport edge on one side, the copy sits inside the gutter on the other, and the split alternates sides. Section heads are a two-column grid: the headline on the left, a muted paragraph aligned to the bottom and pushed right. Training is a three-up grid of 3:4 photo tiles. Membership is a ruled table of rows (title, description, action). Trial is a 50/50 split with the photo on one side and the form panel on the other. Visit is a three-column grid under a hairline.

At 860px and below, everything collapses to one column. Nav links and the nav call to action are hidden, tiles become 4:3, and a fixed gold "Book a free trial" button docks at the bottom (12px inset). It hides while the hero or the trial form is on screen. At 1000px the nav link gap tightens from 36px to 24px.

**The Ruled Row Rule.** Lists of peers (feature ticks, plans, hours, visit columns) are separated by hairline rules top and bottom, not by containers or background fills.

## Elevation & Depth

The system is flat. Depth comes from photography, ink scrims and one tonal step (ink to panel), not from shadows. There is exactly one shadow, on the floating mobile call to action, because it sits above scrolling content.

### Shadow Vocabulary
- **Float** (`box-shadow: 0 10px 30px rgb(0 0 0 / .45)`): the fixed mobile trial button only.

**The Flat Club Rule.** Surfaces never lift. Show hierarchy with tone (panel band), rules (hairline) and imagery. A shadow is allowed only on something that genuinely floats over the page.

## Shapes

Every corner is square (0px): buttons, inputs, choice slots, images, tiles. Inputs are bare underlines with no box. Photographs are clipped to fixed ratios (4:3 feature, 3:4 tile, 16:10 trial on mobile) with object-fit cover. The only drawn geometry is line: the 1px hairline, the 18px by 1px gold tick dash, and the 1.5px-stroke arrow on link buttons.

## Components

### Buttons
Square, wide-set and quiet. They read as engraved plates, not pills.
- **Shape:** square (0px), minimum height 52px (44px in the nav), 0 28px padding (0 20px in the nav), 1px border.
- **Primary (gold):** gold fill, ink label. Used for the booking action.
- **Hover / Focus:** gold to lit champagne over 0.3s on the house ease. Focus is a 2px gold outline offset 4px. While submitting, the button drops to 70% opacity with a progress cursor.
- **Outline:** transparent fill, ivory label, ivory border at 55%. On hover it fills solid ivory with an ink label. Used as the secondary hero action and the nav call to action.
- **Link button:** no box. A gold uppercase label followed by a 24×12 line arrow that slides 6px right on hover (0.4s). Used for row-level actions such as Enquire and Start again.

### Choice Slots
- **Style:** a three-up grid with an 8px gap. Each slot is square, padded 12px 8px, with a 1px ivory border at 30%, an ivory label at 0.92rem, and normal case.
- **State:** on hover the border turns solid ivory. When selected, the slot fills ivory with an ink label. Keyboard focus shows a 2px gold outline offset 3px. The native radio stays in place, invisible, over the slot.

### Inputs / Fields
- **Style:** an underline only. Transparent fill, a 1px ivory bottom border at 35%, 10px 0 padding, 1.1rem ivory text and a gold caret. The label above is small uppercase Stone.
- **Focus:** the underline turns gold.
- **Error:** the underline turns Clay Error, with a fine error line below. The phone field shows a muted +91 prefix inline.

### Navigation
- **Style:** fixed and transparent over the hero. The wordmark sits on the left (AUREX, 600 at 125% width, letter-spacing 0.24em, with CLUB smaller in gold at 0.4em spacing). Label-style links sit on the right with 36px gaps, followed by the outline button.
- **States:** a link gets a 1px gold underline on hover. Past 40px of scroll, the nav turns solid (ink at 94%), tightens its padding from 22px to 14px and shows a hairline bottom edge.
- **Mobile:** links and the call to action are hidden, the wordmark stays, and the docked gold button takes over the booking path.

### Photo Tile (signature)
A 3:4 full-bleed photo with an ink scrim running from clear at 45% to 85% at the bottom. The title and a short line sit at the bottom. On hover the image scales slowly to 1.04 over 1.2s.

### Ruled List
A hairline-topped list. Each row is separated by a hairline, padded 14px 0, and led by an 18px gold dash. Used for feature specifications.

### Motion
- **Easing:** one house curve, cubic-bezier(.16, 1, .3, 1).
- **Durations:** 0.25–0.4s for state changes.
- **Entrances:** the hero image settles from 1.08 scale over 2.4s, and hero copy rises 24px over 1.1s in staggered steps. Images reveal with a clip-path from 12% inset plus a 1.12 to 1 scale. Text blocks rise 28px and fade in.
- **Gating:** all entrance motion runs only under prefers-reduced-motion: no-preference.

## Do's and Don'ts

### Do:
- **Do** set every uppercase heading in Archivo at 112–125% width and weight 500 or lighter. Set body text at normal width.
- **Do** run photography full-bleed and dark, and put any overlaid text on an ink gradient scrim.
- **Do** keep gold to one filled action per view, plus small marks (numerals, arrows, dashes, short headings).
- **Do** separate peer items with 1px hairline rules (ivory at 14%).
- **Do** keep every corner square (0px).
- **Do** use the house ease, cubic-bezier(.16, 1, .3, 1), and gate entrance motion behind reduced-motion.

### Don't:
- **Don't** introduce a second accent hue. Clay Error is for validation only.
- **Don't** use neon, glow, stock badges or crowded card grids. The user rejected that gym vocabulary.
- **Don't** wrap content in bordered or shadowed cards. Use bands, rules and photographs.
- **Don't** add shadows to anything that does not float over the page.
- **Don't** add a second typeface. Get hierarchy from width, weight and case.
- **Don't** round corners or use pill buttons.


### Mobile menu

At 860px and below the nav links are replaced by a text button ("Menu" / "Close", uppercase label style). It opens a full-screen Club Ink overlay with the section links set large in expanded uppercase Archivo and a Champagne Gold "Book a free trial" link under a hairline. It closes on link tap, Escape, or widening past 860px, and locks page scroll while open.
