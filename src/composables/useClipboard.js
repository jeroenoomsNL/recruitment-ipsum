import { onBeforeUnmount, ref } from "vue";

/** Copies text and exposes a short-lived `copied` flag for feedback. */
export function useClipboard(resetAfter = 2000) {
  const copied = ref(false);
  const failed = ref(false);
  let timer;

  async function copy(text) {
    clearTimeout(timer);
    try {
      await navigator.clipboard.writeText(text);
      copied.value = true;
      failed.value = false;
    } catch {
      copied.value = false;
      failed.value = true;
    }
    timer = setTimeout(() => {
      copied.value = false;
      failed.value = false;
    }, resetAfter);
  }

  onBeforeUnmount(() => clearTimeout(timer));

  return { copy, copied, failed };
}
