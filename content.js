(() => {
    const fuckoff = () => {
      document.querySelector("#desktop-dynamic-upsell")?.remove();
    };

    fuckoff();

    const observer = new MutationObserver(fuckoff);
    observer.observe(document.documentElement, { childList: true, subtree: true });
})();
