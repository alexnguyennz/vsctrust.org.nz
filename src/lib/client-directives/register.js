/**
 * @type {() => import('astro').AstroIntegration}
 */
export default () => ({
  name: "client:mouseover",
  hooks: {
    "astro:config:setup": ({ addClientDirective }) => {
      addClientDirective({
        name: "mouseover",
        entrypoint: "./src/lib/client-directives/mouseover.js",
      });
    },
  },
});
