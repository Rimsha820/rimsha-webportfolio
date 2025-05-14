import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/rimsha-webportfolio/', // 👈 IMPORTANT for GitHub Pages subfolder
  plugins: [react()],
})
