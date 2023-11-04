import "astro";
declare module "astro" {
  interface AstroClientDirectives {
    "client:mouseover"?: boolean;
  }
}
