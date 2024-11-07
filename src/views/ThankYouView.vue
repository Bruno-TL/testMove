<template>
  <main>
    <section>
      <div class="d-flex flex-column align-center container__thank_main">
        <v-img :src="logoPRZ" width="123" height="43" />
        <h2 class="title__thank">Obrigado!</h2>
        <p class="parag__thank">Em breve entraremos em contato.</p>

        <span class="span__thank">O que você deseja fazer agora?</span>
        <div class="buttons__thank">
          <BaseButton :name-page="'home'" :title-button="'Ir para a Home'" />
          <v-btn rounded="lg" append-icon="mdi-arrow-top-right" class="animated-button_whatsapp text-none">
            <span class="button-content">WhatsApp</span>
          </v-btn>
        </div>
      </div>
      <div class="w-100 d-flex justify-center my-16">
        <div class="wrapper">
          <div class="box1"><v-img :src="image1" width="350" height="470" cover class="img_box" /></div>
          <div class="box2"><v-img :src="image3" width="636" height="352" cover class="img_box" /></div>
          <div class="box3"><v-img :src="image4" width="306" height="650" cover class="img_box" /></div>
          <div class="box5">
            <video width="485" height="200" autoplay loop muted class="video">
              <source src="@/assets/videos/video1.mp4" type="video/mp4">
            </video>
          </div>
          <div class="box4"><v-img :src="image2" width="350" height="350" cover class="img_box" /></div>
          <div class="box7"><v-img :src="image6" width="306" height="301" cover class="img_box" /></div>
          <div class="box6"><v-img :src="image5" width="636" height="301" cover class="img_box" /></div>
          <div class="box8"><v-img :src="image7" width="306" height="486" cover class="img_box" /></div>
        </div>
      </div>

    </section>
  </main>
</template>

<script setup lang="ts">
import logoPRZ from '@/assets/logoPRZ.svg';
import BaseButton from '@/components/base/BaseButton.vue';
import image1 from '@/assets/png/image1.png';
import image2 from '@/assets/png/image2.png';
import image3 from '@/assets/png/image3.png';
import image4 from '@/assets/png/image4.png';
import image5 from '@/assets/png/image5.png';
import image6 from '@/assets/png/image6.png';
import image7 from '@/assets/png/image7.png';

</script>

<style scoped>
.animated-button_whatsapp {
  position: relative;
  overflow: hidden;
  color: #333;
  transition: color 0.3s ease;
  height: 55px;
  width: 190px;
  margin-left: 20px;
}

.animated-button_whatsapp::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4%;
  height: 100%;
  background-color: rgba(13, 166, 0, 1);
  transition: width 0.8s ease;
  z-index: 0;
}

.animated-button_whatsapp:hover::before {
  width: 100%;
}

.animated-button_whatsapp:hover {
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

.container__thank_main {
  height: 345px;
  margin-top: 97px;
}

.title__thank {
  font-family: 'DisplaBold', sans-serif;
  font-size: 64px;
  font-weight: 700;
  line-height: 83.2px;
  text-align: center;
  color: rgba(250, 69, 21, 1);
}

.parag__thank {
  font-family: 'DisplaBold', sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  text-align: center;
  color: rgba(133, 133, 133, 1);
  margin-bottom: 40px;
}

.span__thank {
  font-family: 'DisplayRegulas', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: rgba(133, 133, 133, 1);
}

.buttons__thank {
  margin-top: 24px;
}


.container__grid video {
  grid-area: video;
  width: 100%;
  height: 100%;
}

.wrapper {
  padding-top: 60px;
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.5fr 1fr;
  width: 1200px;
  gap: 10px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 5;
  overflow: hidden;
}

.box2 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 4;
  overflow: hidden;
  width: 600px;
}

.box3 {
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 6;
  overflow: hidden;
}

.box4 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 5;
  grid-row-end: 7;
  overflow: hidden;
}

.box5 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 7;
}

.box6 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 7;
  grid-row-end: 9;
  overflow: hidden;
}

.box7 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 7;
  grid-row-end: 9;
  overflow: hidden;
}

.box8 {
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 6;
  grid-row-end: 9;
  overflow: hidden;
}

.wrapper div {
  border-radius: 32px;
}

.img_box {
  transition: transform 0.3s ease, filter 0.3s ease;
}

.img_box:hover {
  transform: scale(1.05);
}

.video {
  width: 100%;
  height: 100%;
  border-radius: 32px;
  object-fit: cover;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
}
</style>
