import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

// Two real HTML entries so /carte/ works on any static host without rewrite rules.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('index.html', import.meta.url)),
        carte: fileURLToPath(new URL('carte/index.html', import.meta.url)),
      },
    },
  },
})
