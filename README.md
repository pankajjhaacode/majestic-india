# Majestic India — Lounge & Restaurant Indien

Static React + Vite site, bilingual:

| | Français | English |
| --- | --- | --- |
| Home | `/` | `/en/` |
| Menu | `/carte/` | `/en/menu/` |

Each URL is a real HTML file with its own `lang`, title and description.

```bash
pnpm install
pnpm dev          # http://localhost:5173
pnpm build        # → dist/
pnpm check:menu   # validates menu data + that every FR string has an EN translation
```

## Deploy

`dist/` is plain static files — every URL is a real `index.html`, so no rewrite rules are needed.

Set `SITE_URL` at build time (e.g. `SITE_URL=https://www.example.fr pnpm build`) to emit the canonical and
`hreflang` links search engines use to pair the French and English pages. They need the final domain, so they are
omitted when it is not set.

- **Vercel / Netlify:** build command `pnpm build`, output directory `dist`.
- **Hostinger / any host:** upload the contents of `dist/` to `public_html`.

## Languages

- UI text: `src/i18n/fr.js` and `src/i18n/en.js` (same keys — the check fails if they drift).
- Menu: `src/data/menu.js` stays the printed French source of truth; `src/data/menu.en.js` holds the English,
  keyed by the exact printed French names. Prices exist only in `menu.js`.
- Adding a language: copy `en.js` / `menu.en.js`, register it in `src/i18n/index.jsx`, add its two HTML
  entries (copy `en/`) and list them in `vite.config.js`.

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

`salle-miroirs`, `bar-lounge`, `decor-krishna`, `cave-elephants` and `terrasse` are the restaurant's own photos
(from `public/other-images/`). The food photos and hero are **placeholders** (Unsplash licence) — replace them with the
restaurant's own photos, keeping the file names, and update the dimensions and alt text in `src/data/site.js`.
