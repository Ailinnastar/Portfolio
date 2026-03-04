import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages: site is at https://<user>.github.io/<repo>/
// BASE_PATH is set in the deploy workflow to match your repo name
const base = process.env.BASE_PATH || '/'

export default defineConfig({
  plugins: [react()],
  base,
})
