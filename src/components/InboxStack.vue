<script setup>
import content from "@/lib/content";

// Decorative inbox: real openers, "sent" by real placeholder names that
// recruiters forgot to fill in.
const times = ["09:41", "08:12", "Yesterday", "Mon", "Sun"];
const rows = content.en.openers.slice(0, times.length).map((preview, index) => ({
  sender: content.en.placeholderNames[index],
  preview,
  time: times[index],
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
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: 0.875rem;
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
