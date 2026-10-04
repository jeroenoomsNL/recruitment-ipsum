<script setup>
import AppIcon from "./AppIcon.vue";
</script>

<template>
  <footer class="site-footer wrap">
    <p>
      Made by
      <a
        href="https://github.com/jeroenoomsNL"
        rel="noopener"
      >Jeroen Ooms</a>
      with Vue. Special thanks to all those creative recruiters out there.
    </p>
    <a
      class="button"
      href="https://github.com/jeroenoomsNL/recruitment-ipsum"
      rel="noopener"
    >
      <AppIcon name="github" /> Source on GitHub
    </a>
  </footer>
</template>

<style scoped>
.site-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: clamp(64px, 10vw, 120px);
  padding-block: 28px 40px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.9375rem;

  p {
    margin: 0;
    max-width: 52ch;
  }
}
</style>
