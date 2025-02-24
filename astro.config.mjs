import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
// import netlify from "@astrojs/netlify";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";
import remarkCodeTitles from 'remark-code-titles';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://christianbueno.me/",
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://christianbueno.me/sitemap-index.xml",
        "https://christianbueno.me/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
  ],
  markdown: {
    syntaxHighlight: "shiki", // Explicitly enable Shiki
    // syntaxHighlight: "prism", // Explicitly enable Prism
    // syntaxHighlight: false, // Turns off Shiki
    shikiConfig: {
      theme: "github-dark", // Change the theme (options: 'github-dark', 'dracula', 'nord', etc.)
    },
    remarkPlugins: [remarkReadingTime, remarkCodeTitles],
  },
  // output: "server",
  // adapter: netlify({ edgeMiddleware: true }),
  vite: {
    assetsInclude: "**/*.riv",
  },
});
