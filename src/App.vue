<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import logoPRZ from '@/assets/logoPRZ.svg';
import BaseButtonBudget from './components/base/BaseButtonBudget.vue';
</script>

<template>
  <header>
    <div class="">
      <nav>
        <v-img :width="123" cover :src="logoPRZ"></v-img>
        <RouterLink to="/">Home</RouterLink>
        <!-- <RouterLink to="/about">Cases</RouterLink> -->
        <BaseButtonBudget />

      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
@media (min-width: 1024px) {}
</style>
