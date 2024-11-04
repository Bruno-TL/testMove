<script setup lang="ts">
import imgBannerImages from '@/assets/svg/imgBannerImages.svg'
</script>
<template>
  <div class="image-slider">
    <div class="image-track">
      <v-img :width="123" :src="imgBannerImages"></v-img>
      <v-img :width="123" :src="imgBannerImages"></v-img>
      <v-img :width="123" :src="imgBannerImages"></v-img>
      <v-img :width="123" :src="imgBannerImages"></v-img>
      <v-img :width="123" :src="imgBannerImages"></v-img>
      <v-img :width="123" :src="imgBannerImages"></v-img>
      <v-img :width="123" :src="imgBannerImages"></v-img>
      <v-img :width="123" :src="imgBannerImages"></v-img>
      <v-img :width="123" :src="imgBannerImages"></v-img>
      <v-img :width="123" :src="imgBannerImages"></v-img>
      <v-img :width="123" :src="imgBannerImages"></v-img>
      <v-img :width="123" :src="imgBannerImages"></v-img>
      <v-img :width="123" :src="imgBannerImages"></v-img>
      <v-img :width="123" :src="imgBannerImages"></v-img>
      <v-img :width="123" :src="imgBannerImages"></v-img>
      <v-img :width="123" :src="imgBannerImages"></v-img>
      <v-img :width="123" :src="imgBannerImages"></v-img>
      <v-img :width="123" :src="imgBannerImages"></v-img>
      <v-img :width="123" :src="imgBannerImages"></v-img>
      <v-img :width="123" :src="imgBannerImages"></v-img>
      <v-img :width="123" :src="imgBannerImages"></v-img>
      <v-img :width="123" :src="imgBannerImages"></v-img>
      <v-img :width="123" :src="imgBannerImages"></v-img>
      <v-img :width="123" :src="imgBannerImages"></v-img>
      <v-img :width="123" :src="imgBannerImages"></v-img>
      <v-img :width="123" :src="imgBannerImages"></v-img>
      <v-img :width="123" :src="imgBannerImages"></v-img>

    </div>
  </div>
</template>

<style scoped>
.image-slider {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.image-track {
  display: flex;
  gap: 25px;
  animation: slide 20s linear infinite;
}

.image-track img {
  width: 200px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-30%);
  }
}
</style>
