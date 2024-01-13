import type { ClientDirective } from "astro";

export default (function (load, _opts, element) {
  element.addEventListener(
    "mouseover",
    async () => {
      const hydrate = await load();
      await hydrate();
    },
    { once: true },
  );
} satisfies ClientDirective);
