import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

const page = (p) => fileURLToPath(new URL(p, import.meta.url))

// Same logical page in each language. Keep in sync with `languages` in src/i18n/index.jsx.
const alternates = [
  { fr: '/', en: '/en/' },
  { fr: '/carte/', en: '/en/menu/' },
]

// hreflang + canonical need absolute URLs, so they are only emitted when SITE_URL is set
// (e.g. SITE_URL=https://www.majesticindia.fr pnpm build). Runs after Vite's asset pass,
// which would otherwise try to bundle "/carte/" as a file.
function seoLinks() {
  const origin = process.env.SITE_URL?.replace(/\/$/, '')
  return {
    name: 'seo-links',
    transformIndexHtml: {
      order: 'post',
      handler(_html, { path }) {
        if (!origin) return
        const url = path.replace(/index\.html$/, '')
        const set = alternates.find((a) => Object.values(a).includes(url))
        if (!set) return
        const link = (attrs) => ({ tag: 'link', attrs, injectTo: 'head' })
        return [
          link({ rel: 'canonical', href: origin + url }),
          ...Object.entries(set).map(([lang, href]) => link({ rel: 'alternate', hreflang: lang, href: origin + href })),
          link({ rel: 'alternate', hreflang: 'x-default', href: origin + set.fr }),
        ]
      },
    },
  }
}

// One real HTML entry per language × page, so every URL works on any static host without rewrites.
export default defineConfig({
  plugins: [react(), seoLinks()],
  build: {
    rollupOptions: {
      input: {
        frHome: page('index.html'),
        frMenu: page('carte/index.html'),
        enHome: page('en/index.html'),
        enMenu: page('en/menu/index.html'),
      },
    },
  },
})
