<script setup lang="ts">
import { defineProps } from 'vue';
import BaseButton from '../base/BaseButton.vue';

const props = defineProps<{
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
  numberImg: string;
}>();

const widthContainer = () => {
  switch (props.numberImg) {
    case 'img3':
      return 'widthImg3';
    default:
      return 'container__cases'
  }
}

</script>

<template>
  <div :class="['pt-16', widthContainer()]">
    <div class="case-card">
      <div class="div__image">
        <v-img :src="props.imageSrc" class="img"></v-img>
      </div>

      <h2 class="title__cases">{{ props.title }}</h2>
    </div>
    <p class="text__cases">{{ props.description }}</p>
    <BaseButton :titleButton="props.buttonText" :namePage="'cases'" />
  </div>
</template>

<style scope>
.widthImg3 {
  width: 856px;
  margin-bottom: 113px;
}

.container__cases {
  width: 636px;
  margin-bottom: 113px;
}

.div__image {
  object-fit: cover;
  border-radius: 36px;
  overflow: hidden;
}

.img {
  transition: transform 1s ease;
}

.img:hover {
  transform: scale(1.1);
}

.title__cases {
  font-family: 'DisplayRegular', sans-serif;
  font-size: 48px;
  font-weight: 400;
  line-height: 57.6px;
  letter-spacing: -0.04em;
  text-align: left;
  color: #FFFFFF;
  margin-bottom: 8px;
  margin-top: 24px;
  padding-top: 10px;

  transition: color 0.8s ease;
}

.case-card:hover .title__cases {
  color: #FA4515;
}

.text__cases {
  font-family: 'DisplayRegular', sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  text-align: left;
  color: #858585;
  margin-bottom: 32px;
}

.case-card {
  position: relative;
  overflow: hidden;
  border-radius: 36px;
}
</style>
