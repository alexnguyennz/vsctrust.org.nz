/**
 * @type {import('astro').ClientDirective}
 */
export default (load, opts, element) => {
  element.addEventListener(
    "mouseover",
    async () => {
      const hydrate = await load();
      await hydrate();
    },
    { once: true },
  );
};
