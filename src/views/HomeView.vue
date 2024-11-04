<template>
  <section class="section__home">
    <h1 class="title-h1">A melhor maneira de visualizar o futuro é projetando ele.</h1>
    <p class="p__home">Nosso estúdio se destaca pela excelência e precisão de nossos trabalhos, com um
      enfoque especial em aprimorar as apresentações dos projetos de nossos clientes,
      ajudando-os a vender melhor seu trabalho.</p>

    <div class="d-flex justify-center">
      <BaseButtonBudget />
    </div>

    <div class="d-flex justify-center pt-13 pb-13">
      <v-btn icon="mdi-arrow-down-thin" @click="scrollToVideo">
      </v-btn>
    </div>
    <div ref="videoContainer" class="video__container">
      <video autoplay loop muted class="video">
        <source src="@/assets/videos/3773488-hd_1920_1080_30fps.mp4" type="video/mp4" />
        Seu navegador não suporta o vídeo.
      </video>
      <div class="related-videos">
        <h5 class="related-title">Assista também:</h5>
        <div class="video-thumbnail"><v-img :width="123" :src="videoFake_1"></v-img> </div>
        <div class="video-thumbnail"><v-img :width="123" :src="videoFake_2"></v-img> </div>
        <div class="video-thumbnail"><v-img :width="123" :src="videoFake_3"></v-img> </div>
      </div>
    </div>
    <div class="d-flex justify-center">
      <div class="container__video_previous"></div>
    </div>
  </section>
  <BaseBannerImages />
  <section class="mt-16">
    <div class="d-flex justify-space-between pt-16">
      <div class="container__hidden "></div>
      <p class="text__aboult_prz">
        <RouterLink to="#quem-somos" class="link__text">A PRZ</RouterLink> se destaca pela excelência e precisão de
        <RouterLink to="#servicos" class="link__text">nossos
          trabalhos</RouterLink>, com um enfoque especial em aprimorar as apresentações dos projetos de
        nossos clientes, ajudando-os a vender melhor
        seu trabalho
      </p>
    </div>
  </section>
  <section>

  </section>
</template>


<script setup lang="ts">
import '@/assets/fonts.css'
import BaseButtonBudget from '@/components/base/BaseButtonBudget.vue';
import BaseBannerImages from '@/components/base/BaseBannerImages.vue';
import { RouterLink } from 'vue-router'


import videoFake_1 from '@/assets/svg/videoFake_1.svg'
import videoFake_2 from '@/assets/svg/videoFake_2.svg'
import videoFake_3 from '@/assets/svg/videoFake_3.svg'

import { ref } from 'vue';

const videoContainer = ref<HTMLDivElement | null>(null);

function scrollToVideo() {
  if (videoContainer.value) {
    videoContainer.value.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
</script>

<style scoped>
.content {
  position: relative;
  z-index: 2;
}

.title-h1 {
  font-family: 'DisplaySemibold', sans-serif;
  font-size: 80px;
  color: #FFFFFF;
  line-height: 104px;
  font-weight: 700;
  text-align: center;
  padding: 5px 95px;
  margin-top: 150px;
}

.p__home {
  margin-top: 24px;
  margin-bottom: 48px;
  font-family: 'DisplayRegular';
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  text-align: center;
  color: #858585;
  padding: 5px 95px;
}

.section__home {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;
}

.video__container {
  width: 100%;
  position: relative;
}

.video {
  width: 100%;
  height: 646px;
  border-radius: 32px;
  object-fit: cover;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
}

.related-videos {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 2;
}

.related-title {
  display: block;
  font-family: 'DisplayRegular';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  width: 90px;
}

.video-thumbnail {
  padding: 5px 0;
  cursor: pointer;
  transition: color 0.3s;
}

.video-thumbnail:hover {
  color: #f0f0f0;
}

.container__video_previous {
  width: 96%;
  height: 100px;
  background-color: rgba(54, 56, 58, 1);
  border-radius: 32px;
  margin-top: -85px;
}

.container__hidden {
  width: 329px;
}

.text__aboult_prz {

  font-family: "DisplayRegular", sans-serif;
  font-size: 48px;
  font-weight: 400;
  line-height: 72px;
  text-align: left;
  width: 960px;
  color: #FFFFFF;
}

.link__text {
  text-decoration: underline;
  color: #FA4515;
}
</style>
