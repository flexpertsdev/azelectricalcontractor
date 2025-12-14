<path>astro.config.mjs</path>
<content>
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Astro Configuration File
 * @see https://astro.build/config
 */
export default defineConfig({
  // The `site` property is crucial for SEO, sitemaps, and generating absolute URLs.
  // This is the production domain for Westgate Enterprises.
  site: 'https://azelectricalcontractor.com/',

  // Integrations add new features and rendering support to your Astro project.
  integrations: [
    // Enables Tailwind CSS for styling. It automatically finds and uses
    // the `tailwind.config.mjs` file in the project root.
    tailwind(),
  ],

  // Configure the build output and deployment adapter.
  // Using 'server' output with the Netlify adapter enables server-side rendering,
  // edge functions, and Netlify's form handling capabilities.
  output: 'server',
  adapter: netlify(),

  // Vite-specific configuration.
  // This is where we define path aliases for cleaner, more maintainable imports.
  vite: {
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, './src/components'),
        '@layouts': path.resolve(__dirname, './src/layouts'),
        '@styles': path.resolve(__dirname, './src/styles'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@config': path.resolve(__dirname, './src/config'),
      },
    },
  },
});
</content>