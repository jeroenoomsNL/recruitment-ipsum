<script setup>
import { computed } from "vue";
import { useTheme } from "@/composables/useTheme";
import AppIcon from "./AppIcon.vue";

const { theme, toggle } = useTheme();
const label = computed(() =>
  theme.value === "dark" ? "Switch to light mode" : "Switch to dark mode",
);
</script>

<template>
  <button
    type="button"
    class="theme-toggle"
    :aria-label="label"
    :title="label"
    @click="toggle"
  >
    <AppIcon :name="theme === 'dark' ? 'sun' : 'moon'" />
  </button>
</template>

<style scoped>
.theme-toggle {
  display: inline-grid;
  place-items: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border: 1px solid var(--line);
  border-radius: 50%;
  background: var(--surface);
  color: var(--ink);
  font-size: 1.125rem;
  cursor: pointer;
  transition:
    border-color 0.15s,
    transform 0.2s;

  &:hover {
    border-color: var(--accent);
    transform: rotate(-15deg);
  }
}
</style>
