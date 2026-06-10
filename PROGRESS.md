# Progress Tracker

Last loop run: 2026-06-10T15:09Z
Stack: react

## Done

- [x] Scrape roth-makler.de — full text + 19 real images downloaded
- [x] React + TS + Vite scaffold migrated into this project
- [x] Routing for all 22 pages — split into Roth Versicherungen / Roth Finanz / Allgemein sections
- [x] Both entities have their own Impressum, Datenschutz, Erstinformation with the correct legal data (HRB, USt-ID, Vermittlerregister-Nr, §34c for Finanz)
- [x] Industry standardization round 1: extracted all strings into `src/content/*`, added `ROUTES` constants, path aliases (`@/`), `usePageMeta` hook, ErrorBoundary, React.lazy code splitting, component folder structure (layout / sections / team / forms), extracted ContactForm
- [x] Sitemap page at `/sitemap` mirroring the live site — built from `ROUTES` so it stays in sync

## In Progress

(none)

## Backlog (from spec, not started)

- [ ] Google Bewertung embed on homepage — live site has it; needs a Google Places API key or hard-coded reviews snapshot
- [ ] Cyber-Police downloads — `Broschüre öffnen` / `PDF herunterladen` buttons need real PDFs
- [ ] Sitemap.xml generated at build time — current `/sitemap` is the HTML page only; search engines also want the XML

## Proposed (NOT approved — do not implement)

- [ ] Newsletter signup component — Effort: S. Uses native `<form>` + a fetch to a future backend endpoint. Could surface in footer + a dedicated section.
- [ ] Cookie consent banner — Effort: S. Required by DSGVO once any non-essential cookies are added; uses `localStorage` + a portal.
- [ ] Skeleton screens during route load — Effort: M. Replace the generic spinner in `App.tsx` `<Suspense fallback>` with per-page shape skeletons for a richer perceived performance.
- [ ] Real backend for ContactForm — Effort: M. Wire `onSubmit` prop to a backend (Vercel function, Resend, etc.) and add server-side validation.
- [ ] Lighthouse CI in GitHub Actions — Effort: M. Block PRs that drop accessibility or performance scores below thresholds.

## Tech Debt / Improvements

- [ ] Unused `src/components/UI/` library (Button, Badge, Alert, Input, Container) — either delete or refactor pages to use it. Currently dead code from the template.
- [ ] Zustand installed but unused — remove from package.json OR adopt for global state (none needed yet).
- [ ] ContactForm has `noValidate` + `required` attributes — `noValidate` disables HTML5 validation popups so `required` is partially decorative. Decide: either remove `noValidate` or do JS validation.
- [ ] Only template's `Button.test.tsx` exists; no tests for `usePageMeta`, `ROUTES`, or any page. Add 3-5 smoke tests with Vitest + React Testing Library.
- [ ] No image optimization beyond `loading="lazy"` — could add responsive `srcset` for hero images (`roth-versicherungen-hero.png` is 541 kB).
- [ ] No Prettier config — formatting drift (e.g. mixed single/double quotes after linter ran on `altersversorgung.ts`). Add `.prettierrc`.
- [ ] No Husky pre-commit hook for `npm run lint && npm run build`.
- [ ] `package.json` name is still `react-web-template` — should be `roth-versicherungen`.
