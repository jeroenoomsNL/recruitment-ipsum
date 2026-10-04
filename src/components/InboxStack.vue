<script setup>
import content from "@/lib/content";
import { greeting, greetingName, GREETING_STYLES } from "@/lib/generator";
import { pick, shuffle } from "@/lib/random";

// Decorative inbox: real openers, addressed the way recruiters really do it.
// Sometimes by name, sometimes not at all, sometimes with the placeholder
// still in, sometimes to someone else entirely.
const corpus = content.en;
const times = ["09:41", "08:12", "Yesterday", "Mon", "Sun"];
const styles = shuffle([...GREETING_STYLES, "name"]);
const openers = shuffle(corpus.openers);

const rows = times.map((time, index) => ({
  sender: pick(corpus.names),
  preview: `${greeting(corpus, greetingName(corpus, styles[index], "Jeroen"))} ${openers[index]}`,
  time,
}));
</script>
<template>
  <ul
    class="inbox"
    aria-hidden="true"
  >
    <li
      v-for="row in rows"
      :key="row.time"
    >
      <span class="dot" />
      <span class="sender">{{ row.sender }}</span>
      <span class="time">{{ row.time }}</span>
      <span class="preview">{{ row.preview }}</span>
    </li>
  </ul>
</template>

<style scoped>
.inbox {
  list-style: none;
  margin: 0;
  padding: 6px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  transform: rotate(1.5deg);
}

li {
  display: grid;
  grid-template-columns: 14px 1fr auto;
  column-gap: 8px;
  padding: 12px 14px;
  border-radius: var(--radius-sm);
  animation: arrive 0.5s backwards cubic-bezier(0.2, 0.8, 0.2, 1);

  & + li {
    border-top: 1px solid var(--line);
  }

  &:first-child {
    background: color-mix(in srgb, var(--accent) 8%, transparent);
  }

  &:nth-child(2) {
    animation-delay: 0.08s;
  }

  &:nth-child(3) {
    animation-delay: 0.16s;
  }

  &:nth-child(4) {
    animation-delay: 0.24s;
  }

  &:nth-child(5) {
    animation-delay: 0.32s;
  }
}

.dot {
  width: 8px;
  height: 8px;
  margin-top: 0.55em;
  border-radius: 50%;
  background: var(--accent);
}

.sender {
  font-weight: 700;
  font-size: 0.9375rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.time {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--muted);
  padding-top: 0.2em;
}

.preview {
  grid-column: 2 / -1;
  font-size: 0.875rem;
  color: var(--muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@keyframes arrive {
  from {
    opacity: 0;
    transform: translateY(-12px);
  }
}
</style>
