import { ref } from "vue";

const KEY = "recruitment-ipsum:theme";
const COLORS = { light: "#edeff8", dark: "#12132a" };
const system = window.matchMedia("(prefers-color-scheme: dark)");

function stored() {
  try {
    const value = localStorage.getItem(KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function apply(value) {
  document.documentElement.dataset.theme = value;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", COLORS[value]);
}

// index.html already applied the theme before the first paint
const theme = ref(
  document.documentElement.dataset.theme ??
    stored() ??
    (system.matches ? "dark" : "light"),
);

// Follow the system setting until someone picks a theme themselves
system.addEventListener("change", (event) => {
  if (stored()) return;
  theme.value = event.matches ? "dark" : "light";
  apply(theme.value);
});

export function useTheme() {
  function toggle() {
    theme.value = theme.value === "dark" ? "light" : "dark";
    apply(theme.value);
    try {
      localStorage.setItem(KEY, theme.value);
    } catch {
      // storage unavailable, the choice lasts for this visit
    }
  }

  return { theme, toggle };
}
