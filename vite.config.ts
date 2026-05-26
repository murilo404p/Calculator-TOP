import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Calculator-TOP/',

  plugins: [
    tailwindcss(),
  ],
})