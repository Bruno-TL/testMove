<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Cases</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
