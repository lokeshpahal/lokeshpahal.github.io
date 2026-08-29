// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Drives canonical URLs, Open Graph URLs and JSON-LD. Must match the domain
  // actually serving the site, or search engines are pointed somewhere dead.
  // When lokeshpahal.com is live (add public/CNAME + DNS), change this back.
  site: 'https://lokeshpahal.github.io',
  build: {
    inlineStylesheets: 'always',
  },
});
