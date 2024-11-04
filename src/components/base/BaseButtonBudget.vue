<script setup lang="ts">
import '@/assets/fonts.css'
const goPageBudget = () => {

}
</script>

<template>
  <v-btn rounded="lg" append-icon="mdi-arrow-top-right" class="animated-button" @click="goPageBudget()">
    <span class="button-content">Orçamento</span>
  </v-btn>
</template>

<style scoped>
.animated-button {
  position: relative;
  overflow: hidden;
  color: #333;
  transition: color 0.3s ease;
  height: 55px;
}

.animated-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4%;
  height: 100%;
  background-color: #FF5722;
  transition: width 0.3s ease;
  z-index: 0;
}

.animated-button:hover::before {
  width: 100%;
}

.animated-button:hover {
  color: #fff;
}

.button-content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  font-family: 'DisplayBold', sans-serif;
}
</style>
