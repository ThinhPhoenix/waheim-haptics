(() => {
  // src/index.ts
  var triggerHaptics = (pattern) => {
    if ("vibrate" in navigator) {
      return navigator.vibrate(pattern || 50);
    } else {
      const el = document.createElement("div");
      const id = Math.random().toString(36).slice(2);
      el.innerHTML = `<input type="checkbox" id="${id}" switch /><label for="${id}"></label>`;
      el.setAttribute("style", "display:none !important;opacity:0 !important;visibility:hidden !important;");
      const body = document.querySelector("body");
      if (body) {
        body.appendChild(el);
        const label = el.querySelector("label");
        if (label) {
          label.click();
        }
        setTimeout(() => {
          el.remove();
        }, 1500);
      }
      return true;
    }
  };

  // src/browser.ts
  window.triggerHaptics = triggerHaptics;
})();
