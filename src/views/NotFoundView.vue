<template>
  <div class="wrap">
    <section class="page-intro">
      <p class="eyebrow">
        404
      </p>
      <h1>This vacancy has already been filled.</h1>
      <p class="lead">
        The page you're looking for doesn't exist (anymore).
      </p>
      <p>
        <RouterLink
          :to="{ name: 'Home' }"
          class="button button-primary"
        >
          Go to the generator
        </RouterLink>
      </p>
    </section>
  </div>
</template>
