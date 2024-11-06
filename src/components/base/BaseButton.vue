<script setup lang="ts">
import '@/assets/fonts.css'
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps<{
  titleButton: string;
  namePage: string;
}>();
const router = useRouter();

const goPage = (namePage: string) => {
  router.push({ name: namePage });
};
</script>

<template>
  <v-btn rounded="lg" append-icon="mdi-arrow-top-right" class="animated-button text-none"
    @click="goPage(props.namePage)">
    <span class="button-content">{{ props.titleButton }}</span>
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
  transition: width 0.8s ease;
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
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
}
</style>
