import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import mouseoverDirective from "/src/lib/client-directives/register";

// https://astro.build/config
export default defineConfig({
  site: "https://vsctrust.org.nz",
  server: {
    port: 3000,
  },
  redirects: {
    "/news/1/": {
      status: 301,
      destination: "/news/",
    },
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    prefetch(),
    sitemap({
      filter: (page) =>
        page !== "https://vsctrust.org.nz/news/1/" &&
        page !== "https://vsctrust.org.nz/success/",
    }),
    mouseoverDirective(),
  ],
  experimental: {
    devOverlay: false,
  },
});
