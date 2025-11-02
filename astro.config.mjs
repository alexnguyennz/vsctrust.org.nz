import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  site: "https://vsctrust.org.nz",
  trailingSlash: "always",
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
    sitemap({
      filter: (page) =>
        page !== "https://vsctrust.org.nz/news/1/" &&
        page !== "https://vsctrust.org.nz/success/",
    }),
    icon({
      iconDir: "src/assets/icons",
      include: {
        lucide: ["person-standing", "shirt", "award"],
        tabler: [
          "at",
          "phone",
          "backpack",
          "friends",
          "bottle",
          "pizza",
          "plus",
          "users",
          "location",
          "calendar",
          "blender",
          "brand-facebook",
          "brand-instagram",
        ],
      },
      svgoOptions: {
        plugins: [
          {
            name: "inlineStyles",
            params: {
              onlyMatchedOnce: false,
            },
          },
        ],
      },
    }),
  ],

  prefetch: true,
});
