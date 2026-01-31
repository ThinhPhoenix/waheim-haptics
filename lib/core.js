(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __moduleCache = /* @__PURE__ */ new WeakMap;
  var __toCommonJS = (from) => {
    var entry = __moduleCache.get(from), desc;
    if (entry)
      return entry;
    entry = __defProp({}, "__esModule", { value: true });
    if (from && typeof from === "object" || typeof from === "function")
      __getOwnPropNames(from).map((key) => !__hasOwnProp.call(entry, key) && __defProp(entry, key, {
        get: () => from[key],
        enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
      }));
    __moduleCache.set(from, entry);
    return entry;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, {
        get: all[name],
        enumerable: true,
        configurable: true,
        set: (newValue) => all[name] = () => newValue
      });
  };

  // src/index.ts
  var exports_src = {};
  __export(exports_src, {
    useHaptics: () => useHaptics,
    triggerHaptics: () => triggerHaptics
  });
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
  var useHaptics = () => {
    const triggerHapticsHook = (pattern) => {
      triggerHaptics(pattern);
    };
    return triggerHapticsHook;
  };
  window.triggerHaptics = triggerHaptics;
})();
