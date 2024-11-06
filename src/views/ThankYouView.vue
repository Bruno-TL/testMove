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
      <div class="container">
        <!-- Lado Esquerdo -->
        <div class="left-side">
          <img src="path/to/image1.jpg" alt="Imagem 1" class="image image-1">
          <img src="path/to/image2.jpg" alt="Imagem 2" class="image image-2">
        </div>

        <!-- Central: Vídeo e Imagem sobreposta -->
        <div class="center">
          <div class="video-container">
            <video width="306" height="499" controls>
              <source src="path/to/video.mp4" type="video/mp4">
            </video>
            <img src="path/to/overlay-image.jpg" alt="Overlay Image" class="overlay-image">
          </div>
        </div>

        <!-- Lado Direito -->
        <div class="right-side">
          <img src="path/to/image3.jpg" alt="Imagem 3" class="image image-3">
        </div>
      </div>

      <!-- Segunda Linha: Duas imagens abaixo do vídeo -->
      <div class="bottom-row">
        <img src="path/to/image4.jpg" alt="Imagem 4" class="image image-4">
        <img src="path/to/image5.jpg" alt="Imagem 5" class="image image-5">
      </div>
    </section>
  </main>

</template>

<script setup lang="ts">
import logoPRZ from '@/assets/logoPRZ.svg';
import BaseButton from '@/components/base/BaseButton.vue';
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
</style>
