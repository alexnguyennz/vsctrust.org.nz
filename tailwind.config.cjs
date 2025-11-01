/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["selector"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "accordion-down": "accordion-down 0s ease-out",
        "accordion-up": "accordion-up 0s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-out",
        "collapsible-up": "collapsible-up 0.2s ease-out",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
      },
      boxShadow: {
        box: "1px 1px 0 0 black, 2px 2px 0 0 black, 3px 3px 0 0 black, 4px 4px 0 0 black, 5px 5px 0 0 black",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
