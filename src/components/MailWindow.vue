<script setup>
import { useHighlight } from "@/composables/useHighlight";
import { useClipboard } from "@/composables/useClipboard";
import AppIcon from "./AppIcon.vue";

const props = defineProps({
  from: { type: String, required: true },
  to: { type: String, default: "" },
  subject: { type: String, required: true },
  /** Plain-text version of the body, used for the copy button. */
  plainText: { type: String, required: true },
  /** Changes whenever new content is generated, restarts the reveal animation. */
  version: { type: Number, default: 0 },
});

const emit = defineEmits(["regenerate"]);

const highlight = useHighlight();
const { copy, copied, failed } = useClipboard();
</script>

<template>
  <article class="mail">
    <div
      v-if="$slots.controls"
      class="mail-controls"
    >
      <slot name="controls" />
    </div>

    <dl class="mail-headers">
      <div>
        <dt>From</dt>
        <dd>{{ props.from }}</dd>
      </div>
      <div v-if="props.to">
        <dt>To</dt>
        <dd>{{ props.to }}</dd>
      </div>
      <div>
        <dt>Subject</dt>
        <dd class="subject">
          {{ props.subject }}
        </dd>
      </div>
    </dl>

    <div
      :key="props.version"
      class="mail-body"
      aria-live="polite"
    >
      <slot :highlight="highlight" />
    </div>

    <div class="mail-actions">
      <button
        type="button"
        class="button button-primary"
        @click="emit('regenerate')"
      >
        <AppIcon name="shuffle" /> Shuffle again
      </button>
      <button
        type="button"
        class="button"
        @click="copy(props.plainText)"
      >
        <AppIcon :name="copied ? 'check' : 'copy'" />
        {{ copied ? "Copied" : failed ? "Copy failed. Select the text instead." : "Copy text" }}
      </button>
      <button
        type="button"
        class="button marker-toggle"
        :aria-pressed="highlight"
        @click="highlight = !highlight"
      >
        <AppIcon name="marker" /> Highlight buzzwords
      </button>
    </div>
  </article>
</template>

<style scoped>
.mail {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
}

.mail-controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 16px;
  padding: 16px clamp(16px, 3vw, 28px);
  background: var(--surface-sunken);
  border-bottom: 1px solid var(--line);
}

.mail-headers {
  margin: 0;
  padding: 18px clamp(16px, 3vw, 28px) 14px;
  border-bottom: 1px solid var(--line);
  font-size: 0.9375rem;

  div {
    display: grid;
    grid-template-columns: 5.5em 1fr;
    gap: 0.5em;
    padding: 2px 0;
  }

  dt {
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--muted);
    padding-top: 0.15em;
  }

  dd {
    margin: 0;
    min-width: 0;
    overflow-wrap: anywhere;
  }

  .subject {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.25;
  }
}

.mail-body {
  padding: clamp(20px, 4vw, 40px) clamp(16px, 3vw, 28px);
  font-size: 1.0625rem;
  line-height: 1.7;
  animation: reveal 0.35s ease-out;

  :deep(> :last-child),
  :deep(> :last-child > :last-child) {
    margin-bottom: 0;
  }

  :deep(ul) {
    margin: 0 0 1.5em;
    padding-left: 1.25em;
  }

  :deep(li) {
    margin-bottom: 0.35em;
  }

  :deep(li::marker) {
    color: var(--accent);
  }
}

.mail-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 14px clamp(16px, 3vw, 28px);
  border-top: 1px solid var(--line);
}

.marker-toggle {
  margin-left: auto;
}

@media (max-width: 560px) {
  .marker-toggle {
    margin-left: 0;
  }
}

@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
}
</style>
