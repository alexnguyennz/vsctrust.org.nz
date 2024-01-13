import type { AstroIntegration } from "astro";

export default (): AstroIntegration => ({
  name: "client:mouseover",
  hooks: {
    "astro:config:setup": ({ addClientDirective }) => {
      addClientDirective({
        name: "mouseover",
        entrypoint: "./src/lib/client-directives/mouseover.ts",
      });
    },
  },
});
