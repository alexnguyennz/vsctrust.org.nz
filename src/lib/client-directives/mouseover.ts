type DirectiveLoad = () => Promise<() => Promise<void>>;

export default (load: DirectiveLoad) => {
  window.addEventListener(
    "mouseover",
    async () => {
      const hydrate = await load();
      await hydrate();
    },
    { once: true },
  );
};
