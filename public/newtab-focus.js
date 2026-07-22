(function () {
  function focusSearch() {
    const el = document.querySelector('.app-header__search input');
    if (!el) return false;
    if (document.activeElement === el) return true;
    window.focus();
    el.focus();
    return document.activeElement === el;
  }

  function tryFocusFor(durationMs = 8000) {
    if (focusSearch()) return;
    const interval = setInterval(() => {
      if (focusSearch() || document.hidden) {
        clearInterval(interval);
      }
    }, 50);
    setTimeout(() => clearInterval(interval), durationMs);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tryFocusFor);
  } else {
    tryFocusFor();
  }

  window.addEventListener('pageshow', () => setTimeout(tryFocusFor, 50));
})();
