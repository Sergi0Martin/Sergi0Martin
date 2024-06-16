import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import tailwindcssNesting from 'tailwindcss/nesting'
import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({ applyBaseStyles: true }),
    robotsTxt()
  ],
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcssNesting()]
      }
    }
  },
  site: 'https://Sergi0Martin.github.io',
})
