# OCA Medical Group — Astro website

A **new implementation** of the OCA Medical Group marketing website using **Astro 7, React islands, Tailwind CSS 4, and local shadcn/ui-style components**. The single-page PDF `OCA Home site.pdf` supplied by the site owner is the visual reference. Public information from [ocamedical.com](https://ocamedical.com/) (visited 2026-11-14) informs the core content, contacts and service listings.

**This is a code delivery, not a deployed website.** There is no access to an existing source repository or production account. This environment could not access npm, so installation, `astro check`, and a production build **have not run**. The GitHub Action includes type-check, build, and smoke checks on the first push, and must pass before publication.

## Quick start

Requirements: **Node 26 LTS** (runs Astro) and **Bun 1.4+** (installs dependencies).

```bash
bun install
npm run dev
# browse http://localhost:4321
npm run check
npm run build
npm run test:smoke
npm run preview
```

Commit `bun.lock`; the workflow installs with `bun install --frozen-lockfile` for repeatable builds.

## What's built

- PDF-inspired responsive homepage: navigation, hero, credibility bar, two care cards, choice/coverage panels, insurance feature, clinic introduction, booking/location area, care-principle cards, FAQs and footer.
- About, services (three detail pages), conditions (six detail pages), providers (three detail pages), partners, three article drafts, contact, insurance, appointment request, location, website privacy information, 404 page.
- `src/config/site.ts` centralizes phone, address and outbound form links; `src/data/` centralizes editable content.
- Local PDF-extracted graphic assets in `public/images/` (optimized WebP); no externally hosted hero images.
- React **shadcn-style Sheet** island for mobile navigation, plus shadcn Button/Card source components under `src/components/ui/`.
- TypeScript, Tailwind CSS v4, sitemap, canonical/OG meta tags, MedicalClinic schema, accessibility baseline, GitHub Pages deployment workflow, generated smoke test.
- Static redirect files for several prior WordPress-style URLs.

## GitHub Pages setup

1. Create a GitHub repository, e.g. `oca-medical-astro`, and place this project at its root.
2. From the repository root, install locally, commit `bun.lock`, and push to `main`.
3. In **GitHub repository → Settings → Pages**, set **Build and deployment → Source: GitHub Actions**.
4. The bundled `.github/workflows/deploy.yml` publishes on pushes to `main` and on manual dispatch.
5. Default project Pages URL: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`.
6. The workflow automatically sets `SITE_URL=https://YOUR_USERNAME.github.io` and `BASE_PATH=/YOUR_REPOSITORY` for the initial project URL.
7. For a custom domain such as `www.example.com`, configure Pages & DNS, then set **Repository → Settings → Secrets and variables → Actions → Variables**:
   - `SITE_URL=https://www.example.com`
   - `BASE_PATH=/`
8. To run a local build for a project Pages path:

```bash
SITE_URL=https://YOUR_USERNAME.github.io BASE_PATH=/oca-medical-astro npm run build
npm run test:smoke
```

The code handles `/repository-name/` prefixes for navigation and images. Avoid switching the existing production site's DNS until all content and patient-intake handling has been approved.

## Appointments and insurance

GitHub Pages cannot execute a secure patient-data backend. This site **does not collect patient information**. It uses telephone links and opens existing Google Forms that were embedded on `ocamedical.com` when reviewed. Both are configured in `src/config/site.ts`. The forms and any required BAAs, privacy notices, consents, access controls, and data retention arrangements must be approved by OCA before production. Do not send PHI to analytics or append it to URLs.

If the team has a different approved scheduling or insurance provider, replace the two URLs in `src/config/site.ts`. **Never expose form-submission credentials in public code.**

## Content / design choices

The PDF shows a strong slogan about being “cured,” numeric claims (e.g., patient totals and years), a “Goodlife Physical Medicine” text block, generalized insurance logos, Los Angeles-area map markers, and unattributed testimonial text. Those elements were **not published as facts** here. They have been replaced by OCA-specific copy, verified service categories, nonnumeric care pillars, and a single Newport Beach office address. See [`CONTENT_REVIEW.md`](./CONTENT_REVIEW.md).

Three article drafts are original educational copy inspired by existing OCA topic areas; **all require clinical review**. Provider-directory information is inconsistent between OCA's homepage and physician directory; review the roster before publishing.

## Design adjustments

- Colors, white header, cyan/navy statistics strip, paired blue service cards, light-gray treatment cards, insurance imagery, two-column clinic feature, booking/map treatment and three-card closing row follow the PDF.
- On small screens, sections stack, controls remain touch-friendly, and the navigation uses a Radix-backed shadcn Sheet.
- The map is a vector *illustration* oriented around a single location card, not a street-level map or proof of other clinic addresses.
- All photos are extracted from the user-provided PDF; confirm ownership/licensing and whether the clinic-building image depicts OCA before public use.

## Prelaunch checklist

- [ ] Run `npm install`, `npm run check`, `npm run build`, and `npm run test:smoke` successfully.
- [ ] Test keyboard-only navigation and mobile menu on real devices.
- [ ] Confirm every staff member's current affiliation and credentials.
- [ ] Confirm address, contact information, any additional locations, and appointment availability.
- [ ] Obtain approval for all clinical and marketing copy, including article drafts.
- [ ] Review the outbound Google Forms and privacy/HIPAA compliance.
- [ ] Replace the technical privacy information with legally approved privacy notice(s).
- [ ] Verify user-provided photos/logos, rights to use, and office image accuracy.
- [ ] Verify URL redirects vs current site's indexed URL inventory.
- [ ] Confirm GitHub Pages is suitable for the intended production healthcare-marketing use under GitHub's terms; assess alternatives if needed.
- [ ] Check the deployed homepage at desktop, tablet, and mobile sizes and measure Lighthouse scores.

## Source structure

```text
src/
  components/home/       PDF-inspired homepage sections
  components/layout/     Header, footer, mobile navigation
  components/ui/         Local shadcn-style Button, Card, Sheet
  components/shared/     Icons, page hero, CTA, redirects
  config/site.ts         Practice details + outbound form URLs
  data/                  Content records
  layouts/               Global HTML and SEO
  lib/                   Link prefix and class helpers
  pages/                 Prerendered routes
  styles/global.css      Tokens, Tailwind, component styles
public/images/           Images derived from the reference PDF
.github/workflows/       Pages CI/CD
scripts/smoke.mjs        Built-output route/asset checks
```

### Source references reviewed

- https://ocamedical.com/
- https://ocamedical.com/about/
- https://ocamedical.com/meet-the-doctors/
- https://ocamedical.com/meet-the-doctors/dr-adam-weitzman/
- https://ocamedical.com/meet-the-doctors/dr-pranay-patel/
- https://ocamedical.com/orthopedic-surgery/
- https://ocamedical.com/insurance-cover/
- https://ocamedical.com/for-patients/
- https://docs.astro.build/en/guides/deploy/github/
- https://ui.shadcn.com/docs/installation/astro
