// src/index.ts
export const triggerHaptics = (pattern) => {
    if ('vibrate' in navigator) {
        return navigator.vibrate(pattern || 50);
    }
    else {
        // iOS fallback: WebKit browsers do not support the Vibration API.
        // However, you can trigger a light haptic feedback by associating
        // a label to an invisible switch input and toggling it programmatically.
        const el = document.createElement('div');
        const id = Math.random().toString(36).slice(2);
        el.innerHTML = `<input type="checkbox" id="${id}" switch /><label for="${id}"></label>`;
        el.setAttribute('style', 'display:none !important;opacity:0 !important;visibility:hidden !important;');
        const body = document.querySelector('body');
        if (body) {
            body.appendChild(el);
            const label = el.querySelector('label');
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
// React hook for easier integration
export const useHaptics = () => {
    const triggerHapticsHook = (pattern) => {
        triggerHaptics(pattern);
    };
    return triggerHapticsHook;
};
