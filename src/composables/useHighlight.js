import { ref, watch } from "vue";

const KEY = "recruitment-ipsum:highlight";

function read() {
  try {
    return localStorage.getItem(KEY) === "true";
  } catch {
    return false;
  }
}

// Shared between pages, remembered between visits.
const highlight = ref(read());

watch(highlight, (value) => {
  try {
    localStorage.setItem(KEY, String(value));
  } catch {
    // storage unavailable, the toggle still works for this visit
  }
});

export function useHighlight() {
  return highlight;
}
