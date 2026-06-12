# Roth Versicherungen

Website for **Roth Versicherungen Maklergesellschaft m.b.H.** and **Roth Finanz Maklergesellschaft m.b.H.** in Langen.

Built with React 18, TypeScript, Vite 6, Tailwind CSS, React Router 7, and react-helmet-async.

---

## Local development

```bash
npm install
npm run dev       # → http://localhost:5173
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Type-check + Vite production build (emits `dist/`, including `sitemap.xml`) |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint over the codebase |
| `npm test` | Run Vitest once |
| `npm run test:ui` | Vitest with the interactive UI |
| `npm run test:coverage` | Vitest with coverage report |

## Project layout

```
src/
├── App.tsx              # Routes (lazy-loaded), ErrorBoundary, Suspense
├── main.tsx             # Entry
├── index.css            # Tailwind + Inter / Source Serif Pro fonts
├── assets/site/         # Real images downloaded from roth-makler.de
├── components/
│   ├── layout/          # Layout, Header, Footer
│   ├── sections/        # PageHero, Section, CallToAction
│   ├── team/            # Member
│   ├── forms/           # ContactForm
│   └── ErrorBoundary.tsx
├── config/
│   ├── routes.ts        # ROUTES — single source of truth for paths
│   └── seo.ts           # SITE config + title builder
├── content/             # All UI strings, one file per page (German)
├── hooks/
│   └── usePageMeta.ts   # Sets <title> + <meta name="description">
├── pages/               # Route components
│   ├── versicherungen/  # Roth Versicherungen legal pages
│   └── finanz/          # Roth Finanz legal pages
└── utils/
    ├── company.ts       # COMPANY + TEAM data + re-exports IMAGES
    └── images.ts        # Local image imports for Vite
```

## Key conventions

- **Paths**: never hard-code a URL — use `ROUTES.*` from `@/config/routes`.
- **Strings**: never inline UI text — add it to `src/content/<page>.ts` and import.
- **SEO**: every page calls `usePageMeta({ title, description })` at the top.
- **Path alias**: `@/foo` resolves to `src/foo` (configured in `tsconfig.app.json`, `vite.config.ts`, `vitest.config.ts`).
- **Lazy loading**: every route is `React.lazy()` in `App.tsx` so initial JS stays small.

## Build pipeline highlights

- `tsc -b` first → strict TypeScript with `noUnusedLocals`, `strict`, etc.
- Vite emits per-route chunks (Suspense fallback in `App.tsx`).
- Custom `sitemapPlugin` in `vite.config.ts` walks `ROUTES` and emits `dist/sitemap.xml` on `closeBundle`. `public/robots.txt` references it.

## Editing content

To change wording on any page, edit the matching file in `src/content/`. Pages are thin JSX that consume these objects, so prose updates rarely touch React code.

## Testing

`npm test` runs Vitest in JSDOM. Coverage:

- `src/__tests__/config/routes.test.ts` — route shape invariants
- `src/__tests__/hooks/usePageMeta.test.ts` — meta tag behaviour
- `src/__tests__/useLocalStorage.test.ts` — legacy template hook

## Progress tracking

See `PROGRESS.md` for the current backlog, tech debt, and proposed work. Maintained by `.claude/commands/loop.md`.

## Status

Two legally separate Maklergesellschaften share the same office. Each has its own Impressum, Datenschutz and Erstinformation (different HRB / USt-IdNr / Vermittlerregister-Nr / aufsichtsbehörden) under `/roth-versicherungen/*` and `/roth-finanz/*`. Roth Versicherungen since 1907; Roth Finanz since 1970.
