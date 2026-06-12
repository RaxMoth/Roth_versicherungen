# Progress Tracker

Last loop run: 2026-06-12T13:45Z
Stack: react

## Done

- [x] Scrape roth-makler.de — full text + 19 real images downloaded
- [x] React + TS + Vite scaffold migrated into this project
- [x] Routing for all 22 pages — split into Roth Versicherungen / Roth Finanz / Allgemein sections
- [x] Both entities have their own Impressum, Datenschutz, Erstinformation with the correct legal data (HRB, USt-ID, Vermittlerregister-Nr, §34c for Finanz)
- [x] Industry standardization round 1: extracted all strings into `src/content/*`, added `ROUTES` constants, path aliases (`@/`), `usePageMeta` hook, ErrorBoundary, React.lazy code splitting, component folder structure (layout / sections / team / forms), extracted ContactForm
- [x] Sitemap page at `/sitemap` mirroring the live site — built from `ROUTES` so it stays in sync
- [x] `sitemap.xml` + `robots.txt` — sitemap.xml generated at build time from `ROUTES` via a small Vite plugin in `vite.config.ts`; robots.txt in `public/` references it
- [x] Remove dead template scaffolding — `src/components/UI/` (Button, Badge, Alert, Input, Container), `src/stores/`, `Button.test.tsx`, and `zustand` dep removed. No bundle/runtime changes (it was already unused).
- [x] Smoke tests for shared infrastructure — `routes.test.ts` (4 tests: canonical paths, format, no duplicates, parallel V/F legal triads) and `usePageMeta.test.ts` (4 tests: title suffix, description, no-dup meta tag). Vitest now resolves `@/` path alias.
- [x] Project identity — `package.json` renamed to `roth-versicherungen` with a real description; `README.md` rewritten with project-specific docs (layout, conventions, scripts, build pipeline).

## In Progress

(none)

## Backlog (from spec, not started)

- [ ] Google Bewertung embed on homepage — live site has it; needs a Google Places API key or hard-coded reviews snapshot
- [ ] Cyber-Police downloads — `Broschüre öffnen` / `PDF herunterladen` buttons need real PDFs

## Proposed (NOT approved — do not implement)

- [ ] Newsletter signup component — Effort: S. Uses native `<form>` + a fetch to a future backend endpoint. Could surface in footer + a dedicated section.
- [ ] Cookie consent banner — Effort: S. Required by DSGVO once any non-essential cookies are added; uses `localStorage` + a portal.
- [ ] Skeleton screens during route load — Effort: M. Replace the generic spinner in `App.tsx` `<Suspense fallback>` with per-page shape skeletons for a richer perceived performance.
- [ ] Real backend for ContactForm — Effort: M. Wire `onSubmit` prop to a backend (Vercel function, Resend, etc.) and add server-side validation.
- [ ] Lighthouse CI in GitHub Actions — Effort: M. Block PRs that drop accessibility or performance scores below thresholds.

## Tech Debt / Improvements

- [ ] ContactForm has `noValidate` + `required` attributes — `noValidate` disables HTML5 validation popups so `required` is partially decorative. Decide: either remove `noValidate` or do JS validation.
- [ ] Image optimization — `roth-versicherungen-hero.png` is 541 kB. Consider WebP fallback, responsive `srcset`, or a `vite-imagetools` plugin.
- [ ] Prettier config + `.editorconfig` — formatting drift visible in `altersversorgung.ts` (linter changed single quotes to double).
- [ ] Husky pre-commit hook running `npm run lint && npm test`.
- [ ] Only template's `Button.test.tsx` exists; no tests for `usePageMeta`, `ROUTES`, or any page. Add 3-5 smoke tests with Vitest + React Testing Library.
- [ ] No image optimization beyond `loading="lazy"` — could add responsive `srcset` for hero images (`roth-versicherungen-hero.png` is 541 kB).
- [ ] No Prettier config — formatting drift (e.g. mixed single/double quotes after linter ran on `altersversorgung.ts`). Add `.prettierrc`.
- [ ] No Husky pre-commit hook for `npm run lint && npm run build`.
- [ ] `package.json` name is still `react-web-template` — should be `roth-versicherungen`.
