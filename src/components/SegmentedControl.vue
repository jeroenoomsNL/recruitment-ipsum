<script setup>
import { useId } from "vue";

defineProps({
  label: { type: String, required: true },
  options: { type: Array, required: true },
});

const model = defineModel({ type: String, required: true });
const name = useId();
</script>

<template>
  <fieldset class="segmented">
    <legend class="visually-hidden">
      {{ label }}
    </legend>
    <label
      v-for="option in options"
      :key="option.value"
    >
      <input
        v-model="model"
        type="radio"
        :name="name"
        :value="option.value"
      >
      <span>{{ option.label }}</span>
    </label>
  </fieldset>
</template>

<style scoped>
.segmented {
  display: inline-flex;
  margin: 0;
  padding: 3px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface-sunken);
}

label {
  position: relative;
  cursor: pointer;
}

input {
  position: absolute;
  opacity: 0;
  inset: 0;
  cursor: pointer;
}

span {
  display: flex;
  align-items: center;
  min-height: 38px;
  padding: 0 1em;
  border-radius: 999px;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--muted);
  transition:
    background-color 0.15s,
    color 0.15s;
}

input:checked + span {
  background: var(--surface);
  color: var(--ink);
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.12);
}

input:focus-visible + span {
  outline: 3px solid var(--accent);
  outline-offset: 1px;
}
</style>
