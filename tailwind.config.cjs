/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        show: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      },
      animation: {
        show: "show 0.2s 1s forwards",
      },
      boxShadow: {
        box: "1px 1px 0 0 black, 2px 2px 0 0 black, 3px 3px 0 0 black, 4px 4px 0 0 black, 5px 5px 0 0 black",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
