<script setup>
import ThemeToggle from "./ThemeToggle.vue";

const links = [
  { name: "Home", label: "Ipsum generator" },
  { name: "MessageGenerator", label: "Message generator" },
  { name: "About", label: "About" },
];
</script>

<template>
  <header class="site-header wrap">
    <RouterLink
      :to="{ name: 'Home' }"
      class="brand"
    >
      Recruitment <span>Ipsum</span>
    </RouterLink>
    <div class="header-end">
      <nav aria-label="Main">
        <RouterLink
          v-for="link in links"
          :key="link.name"
          :to="{ name: link.name }"
          exact-active-class="active"
        >
          {{ link.label }}
        </RouterLink>
      </nav>
      <ThemeToggle />
    </div>
  </header>
</template>

<style scoped>
.site-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px 24px;
  padding-block: 20px;
}

.brand {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.375rem;
  letter-spacing: -0.03em;
  text-decoration: none;

  span {
    color: var(--accent);
  }
}

.header-end {
  display: flex;
  align-items: center;
  gap: 16px;
}

/* Small screens: toggle next to the logo, navigation on its own row */
@media (max-width: 640px) {
  .header-end {
    display: contents;
  }

  .theme-toggle {
    order: 1;
  }

  nav {
    order: 2;
    flex-basis: 100%;
  }
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-inline: -10px;

  a {
    padding: 8px 10px;
    border-radius: var(--radius-sm);
    color: var(--muted);
    font-weight: 600;
    font-size: 0.9375rem;
    text-decoration: none;

    &:hover {
      color: var(--ink);
    }

    &.active {
      color: var(--ink);
      text-decoration: underline;
      text-decoration-color: var(--badge);
      text-decoration-thickness: 3px;
      text-underline-offset: 0.45em;
    }
  }
}
</style>
