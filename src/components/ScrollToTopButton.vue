<template>
  <div v-if="isVisible" class="container__scroll">
    <v-btn class="scroll-to-top-btn" @click="scrollToTop" icon="mdi-whatsapp"></v-btn>
    <v-btn class="scroll-to-top-btn mt-2" @click="scrollToTop" icon="mdi-arrow-up-thin">

    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const toggleVisibility = () => {
  isVisible.value = window.scrollY > 900;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', toggleVisibility);
});

onUnmounted(() => {
  window.removeEventListener('scroll', toggleVisibility);
});
</script>

<style scoped>
.container__scroll {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  background-color: rgba(224, 224, 224, 0.6);
  padding: 8px;
  z-index: 10;
  border-radius: 32px;
}

.scroll-to-top-btn {
  background-color: #FFF;
  color: rgb(0, 0, 0);
}

.scroll-to-top-btn:hover {
  background-color: rgba(28, 28, 28, 1);
  color: rgba(255, 255, 255, 1);
}
</style>
