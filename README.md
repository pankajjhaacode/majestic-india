# Majestic India — Lounge & Restaurant Indien

Static React + Vite site. Two pages: `/` (home) and `/carte/` (full menu).

```bash
pnpm install
pnpm dev          # http://localhost:5173
pnpm build        # → dist/
pnpm check:menu   # validates src/data/menu.js (prices, columns, signature dishes)
```

## Deploy

`dist/` is plain static files. `/carte/` is a real `carte/index.html`, so no rewrite rules are needed.

- **Vercel / Netlify:** build command `pnpm build`, output directory `dist`.
- **Hostinger / any host:** upload the contents of `dist/` to `public_html`.

## Content

| What | Where | Source |
| --- | --- | --- |
| Menu, prices, set menus, wines | `src/data/menu.js` | Transcribed from *MENU MAJESTIC INDIA.pdf* |
| Phone, email, social handle | `src/data/site.js` | Printed on the menu |
| Address | `src/data/site.js` → `address` | **Not provided** — currently `[ADDRESS TO BE PROVIDED]` |
| Homepage highlights | `signatures` in `src/data/menu.js` | Must match a dish name exactly (checked at build/runtime) |

## Brand assets (`public/brand/`)

Extracted from the vector logo PDF with no redrawing. SVG + 2400px PNG for each:

- `logo-transparent` — original gold, transparent background (use on dark green)
- `logo-dark` — forest green (use on cream/ivory)
- `logo-light` — cream (use over photography)
- `logo-mark` — elephant only, gold

`src/components/ElephantMark.jsx` is the same elephant as an inline SVG using `currentColor`.

## Photography

`public/images/*` are **placeholder** photos (Unsplash licence) chosen for mood. Replace them with the
restaurant's own photos, keeping the file names, and update the dimensions and alt text in `src/data/site.js`.
