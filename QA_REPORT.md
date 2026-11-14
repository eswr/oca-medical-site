# QA Report — OCA Medical Group site vs `OCA Home site.pdf`

**Date:** 2026-11-14 · **Scope:** homepage text fidelity to the PDF design + mobile/tablet/desktop responsiveness and functional testing across all 27 routes.
**Method:** Astro dev server (Node 26, `BASE_PATH=/`), in-app Chromium at 1440 / 768 / 375 / 360 px viewports, full-route HTTP and overflow audit, interactive testing of nav, accordions, carousel and forms. Final state re-verified after fixes: **27 routes × 4 viewports → 0 horizontal overflow, 0 broken images; `astro check` 0 errors; production build + smoke test pass.**

---

## 1. Text changes vs the PDF — restored (owner decision 2026-11-14)

The implementation had intentionally substituted several PDF texts (documented in `CONTENT_REVIEW.md`). Per the owner's decision, the homepage text now **matches the PDF**:

| Section | Restored text (PDF) | Component |
|---|---|---|
| Hero | “Pain Experts So Good, We Don't Want You Coming Back... We Want You Cured!” + “We identify and fix the biomechanical cause of your pain—so you can move on with your life” + **Book a Free Consultation** | `Hero.astro` |
| Stats strip | **50,000+** Happy Patients · **10** Referring Affiliates · **80+ Years** Experience | `TrustStrip.astro` |
| Care section | “When You Need the Next Level of Care” + full team paragraph; both card texts verbatim | `SpecialtyCards.astro` |
| Options | “KNOW ALL YOUR OPTIONS (BEFORE DRUGS OR SURGERY)” + diagnostic-test copy + **Book a Consultation**; “KNOW YOUR COVERAGE (YOU MAY BE COVERED)” + “Proud providers of major insurance companies” + **Verify My Insurance** | `Options.astro` |
| Insurance band | “Verify Your Insurance” + fill-out-form copy + **Claim Offer** | `InsuranceHighlight.astro` |
| About | “Welcome to the OCA Medical Group” + two **Goodlife Physical Medicine** paragraphs + **Read More About Us** | `AboutIntro.astro` |
| Booking | “Book an Appointment / FREE Consultations” + LOCATION/FIRST NAME/LAST NAME/PHONE/EMAIL fields + confidentiality note + **Schedule Appointment** | `BookingLocation.astro` |
| Testimonials | “How We've Helped Others the OCA Way” + the PDF's three quote cards | `Testimonials.astro` (replaces `Approach.astro`) |
| Header nav | ABOUT CONDITIONS SERVICES **PARTNERS** BLOG + CONTACT / VERIFY / BOOK (Providers removed from header, kept in footer via `footerNav`) | `site.ts`, `Header.astro` |

Also removed (not present in the PDF): hero pill “Pain management · Orthopedics · Spine care”, “Explore our services” secondary CTA, care-card “Explore … care” links and arrows, spine-care text link, Evaluate→Plan→Care journey chips, insurance benefit chips, “GET THE DETAILS FIRST” eyebrow, “WELCOME TO OCA MEDICAL GROUP” eyebrow, Newport Beach photo badge, about checkmark list, FAQ section (data kept in `src/data/faqs.ts`), the user-facing note about PDF testimonials, and the “For emergencies, call 911” small print.

### Compliance flags that still apply (from `CONTENT_REVIEW.md`, owner-accepted)

- **Unverified marketing claims** restored verbatim: “50,000+ Happy Patients”, “10 Referring Affiliates”, “80+ Years Experience”, “We Want You Cured!”, “FREE Consultations”, “Proud providers of major insurance companies”. Obtain written evidence/approval before public launch.
- **PDF grammar slip kept verbatim** as approved: Orthopedic Care card reads “surgical procedures relieve nerve pressure” (likely missing “to”). One-word fix if desired.
- **Testimonials are PDF placeholder text** — the first two cards are identical and unattributed. Patient consent/provenance required before launch.
- **Goodlife Physical Medicine** block: confirm the relationship between Goodlife and OCA and the correct legal clinic name.
- **Insurance logos** (`public/images/insurance-logos.webp`, cropped from the PDF): confirm in-network status and logo-usage permissions before launch.
- **Map markers** (`public/images/locations-map.webp`, extracted from the PDF with its transparency mask): El Segundo / Torrance / Redondo Beach / Seal Beach are shown as in the design; confirm these are active offices. The LOCATION select lists them + Newport Beach.

## 2. Responsive & functional issues found → fixed

| # | Severity | Issue | Fix |
|---|---|---|---|
| 1 | **P2** | `.faq-grid{grid-template-columns:40% 60%}` + px gap = grid blowout; viewport overflow up to ~30 px in the 761–980 px band (6 px measured at 768 px) | `global.css`: columns changed to `2fr 3fr` |
| 2 | P3 | 1 px horizontal scroll on mobile (fractional-px leak from decorative bleeds) | `body{overflow-x:clip}` |
| 3 | **P2** | Testimonial row collapsed to ~100 px-wide cards on mobile, clipping text | Responsive `grid-auto-columns:82%` below 760 px (one card + peek) |
| 4 | P3 | Map card at 761–980 px went portrait; `object-fit:cover` cropped out El Segundo/Redondo Beach markers | `object-fit:contain` in that band |
| 5 | P3 | Small tap targets: footer links ≈22 px tall, phone/text links ≈20–26 px, FAQ summaries 39 px | Vertical padding added (footer links, `.text-link`, FAQ summary ≥44 px) |
| 6 | P3 | Providers page orphaned after nav restore (footer also mapped over header `nav`) | `footerNav` in `site.ts`; footer links Providers again |
| 7 | P3 | `astro check` ts(2322): invalid `rel` attribute on `<form>` | Removed attribute |

**Verified working (no fix needed):** all 29 routes HTTP 200 + proper 404; no broken images; mobile hamburger sheet opens/closes with scroll-lock and 9 links; FAQ `<details>` accordions; testimonial arrows scroll; `tel:`/`mailto:`/Maps links; Google Form links wired on `/book/` and `/insurance/`; images lazy-load; no console-visible failures during runs.

**Known tooling note (not a site bug):** `html{scroll-behavior:smooth}` makes full-page screenshot stitching unreliable in some capture tools; captures here were done per-viewport-scroll instead. Left in place as intentional UX.

## 3. PDF image assets (best effort, extracted from the PDF)

- `public/images/insurance-logos.webp` — 300 dpi crop of the 7-logo grid (kept opaque; card background ≈ `#f7f7f7` matches the crop).
- `public/images/locations-map.webp` — embedded map composited with its smask → true transparency; rounded green border intact.
- Video thumbnail rebuilt in HTML/CSS (existing `therapy.webp` + navy overlay + “NEW PATIENT EXPERIENCE: WHAT TO EXPECT”) — crisper than a raster crop.
- `scripts/smoke.mjs` asset list updated to cover the new files.

## 5. Styling pass — PDF button styling + trust strip (owner feedback, 2026-11-14)

Verified against high-resolution PDF crops (`pdftoppm` of each button region):

| PDF button | State in PDF | Implementation |
|---|---|---|
| BOOK A FREE CONSULTATION (hero) | uppercase, **italic**, black on cyan, rounded rect, largest | `.button-primary.button-xl` — uppercase italic 16px black on cyan, radius 22px |
| BOOK A CONSULTATION / VERIFY MY INSURANCE (option cards) | uppercase, **italic**, black on cyan | `.button-primary` — uppercase italic 15px |
| CLAIM OFFER, READ MORE ABOUT US | uppercase, **upright** (not italic), black on cyan | `.button-primary.button-roman{font-style:normal}` on those two |
| SCHEDULE APPOINTMENT | uppercase, upright, white on green pill | `.button-green` — uppercase 14px, keeps pill radius |

- All cyan buttons switched from navy to **black** label text (`#0b0b0d`) and from full-pill to the PDF's 22px rounded-rect — applies site-wide (404, contact, partners, provider/condition detail CTAs, mobile-nav CTA, CTABanner outline buttons get uppercase via the shared rule; header CONTACT/VERIFY/BOOK were already uppercase).
- Trust strip: numerals ("50,000+", "10", "80+ YEARS") `font-weight 800 → 400`; labels ("HAPPY PATIENTS" etc.) `10px → 13px` (8px → 11px on ≤560px viewports).
- Regression: 27 routes × 5 viewports (1440/768/375/360/320) — 0 overflow, 0 broken images; `astro check` 0 errors; build + smoke pass.

## 6. Typography & spacing fidelity pass (owner feedback round 2, 2026-11-14)

Root cause of "fonts are not correct": the PDF (Canva export) embeds **Canva Sans** (body/UI/buttons) and **Noto Sans** (ExtraBold headings; Black Italic for the "VERIFY YOUR INSURANCE" band title) — the site rendered everything in Manrope.

- **Font system**: headings → **Noto Sans** (800; band title 900 italic uppercase); body/UI/buttons/labels → **Figtree** (closest free substitute for proprietary Canva Sans); global heading letter-spacing relaxed to −0.02em. Loaded in `BaseLayout.astro`.
- **Hero**: H1 resized to the PDF's ~37px (was 76px), single white color; subtext 20px/600 spanning one line; hero tightened to ~505px.
- **Hero button**: radius 22px → **14px** (less rounded), text 16px → **20px**.
- **Trust strip**: numerals keep PDF size (~41px) in Figtree regular; labels "HAPPY PATIENTS" etc. **13px → 17px** with 0.14em tracking; numeral→label gap 3px → 14px; padding below the labels increased (strip padding-bottom 28px → 48px); ≤560px override rebalanced (numerals 21px) to kill a 7px overflow at 320px.
- **"When You Need the Next Level of Care"**: single ink color (span removed), **one line** at desktop (heading container widened to 1120px, size 39px per PDF), paragraph "Our team of…" **21px / bold / 1120px width** (was 16px regular in 720px).
- **Care cards**: border-radius removed (square, like the PDF), large shadow removed, card titles 42px on one line ("Interventional Care" no longer forced onto two lines).
- **Insurance band title**: Noto Sans 900 italic uppercase (was bold upright).
- Regression: 27 routes × 5 viewports — 0 overflow, 0 broken images; `astro check` 0 errors; build + smoke pass.

## 7. Deliberate deviation kept

- **Booking form has no local submission backend** (GitHub Pages static hosting; README forbids collecting PHI). Fields render exactly as the PDF; submitting opens the existing Google Form (`site.bookingFormUrl`) in a new tab — entered values are **not** transferred, and a one-line note under the button says so. A real intake backend (or Google-Forms prefill entry IDs) is required to carry the data.
- Footer design kept as implemented — the PDF shows only a “[FOOTER]” placeholder.
- ~~Colors/typography follow the existing site design system; the PDF's exact palette was not reproduced~~ **superseded by §8 (2026-11-14): the PDF palette and scale are now reproduced per the owner's explicit instruction.**

---

## 8. Full palette + scale fidelity pass (owner feedback round 3, 2026-11-14)

Owner provided target-vs-current screenshots of the first viewport; per the standing "find and fix all of them" instruction the sweep covered the whole page. **Method:** every color and size was pixel-measured from 300 dpi PDF crops (`pdftoppm` + numpy: glyph-row bands, color masks, corner-radius fits) and calibrated against the rendered DOM (`getBoundingClientRect`/computed styles) at 1440 px. This round **supersedes the §7 "PDF palette not reproduced" deviation** — the PDF palette is now reproduced.

**Palette (exact PDF samples):** navy `#122f83 → #0c2b81` (strip/booking bg, hero H1, header buttons; `--deep` aligned), cyan `#4cdef2 → #4ee4ff` (buttons, numerals, cyan card, BOOK), blue `#2da6dd → #2ca8e0` (ortho card, testimonial cards, booking card), ink `#15233a → #0b0b0d`, option-card gray `#f6f6f6`, insurance band `#e5eef3 → #d9d9d8`, green button `#0d8a3e → #386e4f`. PDF headings/body on light grounds are pure black (care titles + body text are black, not navy); hero H1 is the PDF navy; stat numerals are PDF cyan.

**Scale (measured → applied):**
- Header 82→**140px** tall; logo 120→**166px**; nav links 11→**20px/800** (tracking ~0, gap 25px); CONTACT/VERIFY/BOOK 10px/34px → **20px text, 44px tall, 13px radius**, container widened to 1317px.
- Buttons: standard cyan/navy 46px/15px → **60px tall / 26px text / 35px radius** (PDF shows near-pill ends; hero `.button-xl` = **68px / 21px text / 14px radius** — radii differ per button in the PDF); option-card buttons 416×72; CLAIM/READ-MORE 340-416×60; header buttons as above; green SCHEDULE 374×56 pill, 24px text.
- Hero: H1 white→**navy**, 3 explicit lines (40px, line stride 52 = PDF), subtext 20→**26px/700 white**, overlay lightened to PDF steel-blue (`#43abdc→#2f95c2` gradient so the photo shows through), hero 505→**461px** (padding 82/46), glow removed.
- Trust strip: vertical dividers **removed** (PDF has none); numerals 41→**56px** (PDF cap 39.1px), color cyan; labels keep 17px but tracking .14em→.08em, white, "REFERRING AFFILIATES" wraps 2 lines (max-width 190px) as in the PDF; strip height 194px = PDF.
- Specialty section: heading 39→**44px black**, paragraph 21px/700 slate → **22px/400 black** (2-line wrap at 1180px = PDF); care-grid widened beyond the container to **1292px** (new `.care-wrap`), cards 646px wide touching, **557px tall**; titles 42→**46px black centered**; body text 14px→**28px/400 black, line stride 40px**, 6-line wrap = PDF; icons 72px navy → **black, spine 152px / bone 162px** (rendered glyph ≈130px, ~4.7px stroke like the PDF).
- Options: grid widened to **1360px** (margins 40px, gap 76px = PDF); cards 641×522, radius 28→**32px**, bg `#f6f6f6`; headings 28→**42px black** + 26px sub-line (one line each, = PDF); captions 13→**24px/400 black**; video thumb/logos 416px wide.
- Insurance band: bg gray `#d9d9d8`, columns **782/658** (54/46) like the PDF, height 433px; title black 900 italic **44px nowrap one line**; paragraph 14→**24px/400 black, centered** (4 lines like the PDF); text block moved from right-aligned to the PDF's left position (80px inset, 560px block, everything centered inside); CLAIM OFFER 340×60.
- About: wrapper widened to **1278px** (PDF 1277); photo **599×628** = PDF; heading 44→**58px black, weight 800, line-height 1.05** (PDF's tight 2-line set); paragraphs 14→**22px/400 black**; READ MORE 416×60.
- Booking: section bg navy `#0c2b81`, card **blue** `#2ca8e0` (was cyan) radius 22→**40px**; title navy→**black 35px**; "FREE Consultations" 15→**28px/400 black**; inputs 44→**33px** tall with `2px #c9ced4` borders (PDF's outlined inputs), placeholders 15px dark; confidentiality note 9.5→**13.5px black centered**; SCHEDULE APPOINTMENT 14→**24px text**, muted green `#386e4f`; map card radius 40px.
- Testimonials: heading uppercase **black 50px one line** (PDF all-caps); row widened to **1277px** via `.testimonials-outer` with absolutely-positioned arrows overlapping the row edges (PDF placement); cards 378×260, radius 20→**42px**, bg PDF blue; text 15→**21px/400 black**, 4-line wrap = PDF; avatar 66px.

**Responsive:** all @media blocks rebalanced for the new scale (1280/1150/980/760/560); nowrap headings released ≤760px; arrows return in-flow ≤760px and clamp at ≤980px; care text/icons step down on small screens.

**Verification:** rendered DOM measured against every PDF target — section y-positions match within ~10px page-wide (about/band/booking exact to ±1px); overflow audit across 13 representative routes × 1440/768/375/360/320 → 0 visible overflow (remaining `scrollWidth` inflation is the testimonial row's intentional swipe content, contained by `overflow-x:auto` + `body overflow-x:clip`); `astro check` 0 errors; production build (37 pages) + smoke test pass.

**Known acceptable deviations:** Figtree digits/letters run slightly wider than the PDF's Canva Sans (stat numeral line ~30px wider at equal cap height); booking confidentiality note wraps to 3 lines vs the PDF's 2 (same 13.5px size, longer verbatim text); Canva's freehand ±20px element placements reproduced as clean symmetrical grids (stat centers, option-card content columns); footer remains the site design (PDF shows only a `[FOOTER]` placeholder).
