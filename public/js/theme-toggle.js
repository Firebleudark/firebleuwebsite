function toggleTheme() {
  const html = document.documentElement;
  const current = html.dataset.theme;
  const next = current === "dark" ? "light" : "dark";
  html.dataset.theme = next;
  localStorage.setItem("theme", next);
}

(function () {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const html = document.documentElement;
  html.dataset.theme = saved || (prefersDark ? "dark" : "light");
})();
