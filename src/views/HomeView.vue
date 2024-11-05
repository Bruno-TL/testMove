<template>
  <section class="section__home">
    <h1 class="title-h1">A melhor maneira de visualizar o futuro é projetando ele.</h1>
    <p class="p__home">Nosso estúdio se destaca pela excelência e precisão de nossos trabalhos, com um
      enfoque especial em aprimorar as apresentações dos projetos de nossos clientes,
      ajudando-os a vender melhor seu trabalho.</p>

    <div class="d-flex justify-center">
      <BaseButton :titleButton="titleButtonBudget" :namePage="namePageBudget" />
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
  <section id="cases" class="mt-16 cases-section">
    <CasesComponent :button-text="'Ver o case'"
      :description="'O projeto de interiores do escritório de advocacia apresentou desafios significativos, principalmente relacionados à necessidade de combinar uma estética formal e sofisticada com a funcionalidade exigida por um ambiente de trabalho intenso.'"
      :title="'Interiores do Escritório de Advocacia'" :imageSrc="img_cases_1" :numberImg="'img1'" />
    <div class="card1">
      <CasesComponent :button-text="'Ver o case'"
        :description="'O projeto de uma residência moderna em Campos do Jordão trouxe consigo desafios únicos, principalmente relacionados ao clima frio da região e à topografia montanhosa.'"
        :title="'Residência Moderna em Campos do Jordão'" :imageSrc="img_cases_2" :numberImg="'img2'" />
    </div>

    <CasesComponent :button-text="'Ver o case'"
      :description="'O projeto de uma residência moderna em Campos do Jordão trouxe consigo desafios únicos, principalmente relacionados ao clima frio da região e à topografia montanhosa.'"
      :title="'Cozinha Industrial'" :imageSrc="img_cases_3" :numberImg="'img3'" />
    <div class="card1">
      <CasesComponent :button-text="'Ver o case'"
        :description="'O projeto de interiores do escritório de advocacia apresentou desafios significativos, principalmente relacionados à necessidade de combinar uma estética formal e sofisticada com a funcionalidade exigida por um ambiente de trabalho intenso.'"
        :title="'Residência Moderna em Condomínio em Taubaté'" :imageSrc="img_cases_4" :numberImg="'img4'" />
    </div>
  </section>
  <section id="servicos" class="w-100 mb-16">
    <v-chip variant="outlined" class="custom-chip">
      <v-img :src="computerIcon" width="20" height="20" class="mr-2" />
      Serviços
    </v-chip>
    <h2 class="title__servicos mb-16">Visualize o futuro através de </h2>
    <CardServicoComponent />
    <CardServicoComponent />
    <CardServicoComponent />
    <CardServicoComponent />
    <CardServicoComponent />
    <CardServicoComponent />
  </section>
  <section id="quem-somos" class="w-100 container__quem_somos">
    <div class="d-flex justify-end sticky-image-container">
      <div class="image-wrapper">
        <v-img :src="img_dupla" width="576" height="600" />
      </div>
    </div>
    <div class="container__icon_who_us">
      <div class="d-flex justify-space-between align-center">
        <v-chip variant="outlined" class="custom-chip">
          <v-img :src="thunderIcon" width="20" height="20" class="mr-2" />
          Quem Somos
        </v-chip>
        <div class="pr-8">
          <v-img :src="seeFutureIcon" width="120" height="120"></v-img>
        </div>
      </div>

      <div class="container__text__about">
        <p class="text__who_us">Combinamos <span class="span__who_us">técnicas avançadas com criatividade</span> para
          transformar ideias em
          visualizações que
          inspiram e convencem.</p>
        <p class="text__who_us_2">Nosso estúdio se destaca pela excelência e precisão de nossos trabalhos, com um
          enfoque
          especial em aprimorar
          as apresentações dos projetos de nossos clientes, ajudando-os a vender melhor seu trabalho. Na PRZ Arqstudio,
          combinamos técnica avançada com criatividade para transformar ideias em visualizações que inspiram e
          convencem.
        </p>
      </div>
    </div>
    <div class="w-100">
      <div class="profile-container d-flex justify-end">
        <div>
          <div>
            <v-img :src="img_daniel" width="196" height="218" />
          </div>
        </div>
        <div class="container__who_us_text profile_container_text">
          <h4 class="name__who_us">Daniel <span class="name__who_us_span">Matias</span></h4>
          <p class="text__who_us_simple">Arquiteto formado pela Universidade de Taubaté, Daniel sempre se dedicou ao
            processo
            criativo em 3D. </p>
          <p class="text__who_us_simple">Ele vê a maquete eletrônica como essencial para simplificar e viabilizar
            projetos.</p>
        </div>
      </div>
      <div class="profile_container2">
        <div class="container__who_us_text ">
          <h4 class="name__who_us">João <span class="name__who_us_span">Marcos Franco</span></h4>
          <p class="text__who_us_simple">Formado em Arquitetura pela Universidade de Taubaté em 2018, João Marcos já
            trabalhava
            com maquetes
            eletrônicas antes de se formar, atendendo renomados arquitetos da região. Sua pós-graduação impulsiona sua
            especialização em visualização arquitetônica, elevando sempre a qualidade de seus serviços.</p>
        </div>
        <div class="profile_container_text2">
          <div>
            <v-img :src="img_joao" width="197" height="219" />
          </div>
        </div>
      </div>
    </div>


  </section>
</template>


<script setup lang="ts">
import '@/assets/fonts.css'
import BaseButton from '@/components/base/BaseButton.vue';
import BaseBannerImages from '@/components/base/BaseBannerImages.vue';
import CasesComponent from '@/components/Cases/CasesComponent.vue';
import CardServicoComponent from '@/components/servicos/CardServicoComponent.vue';
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

import videoFake_1 from '@/assets/svg/videoFake_1.svg';
import videoFake_2 from '@/assets/svg/videoFake_2.svg';
import videoFake_3 from '@/assets/svg/videoFake_3.svg';
import img_cases_1 from '@/assets/svg/cases/img_cases_1.svg'
import img_cases_2 from '@/assets/svg/cases/img_cases_2.svg'
import img_cases_3 from '@/assets/svg/cases/img_cases_3.svg'
import img_cases_4 from '@/assets/svg/cases/img_cases_4.svg'
import computerIcon from '@/assets/svg/computer.svg'
import img_dupla from '@/assets/svg/quemSomos/img_dupla.svg'
import thunderIcon from '@/assets/svg/thunder.svg'
import seeFutureIcon from '@/assets/svg/quemSomos/see_future.svg'
import img_daniel from '@/assets/svg/quemSomos/img_daniel.svg'
import img_joao from '@/assets/svg/quemSomos/img_joao.svg'


const titleButtonBudget = ref('Orçamento');
const namePageBudget = ref('budget');


const videoContainer = ref<HTMLDivElement | null>(null);
function scrollToVideo() {
  if (videoContainer.value) {
    videoContainer.value.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

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

.cases-section {
  display: grid;
  width: 100%;
}

.card1 {
  display: flex;
  justify-content: end;
}

.custom-chip {
  color: #FFFFFF;
}

.title__servicos {
  font-family: 'DisplaySemibold', sans-serif;
  font-size: 64px;
  font-weight: 700;
  line-height: 83.2px;
  text-align: left;
  color: #FFFFFF;
}

.container__quem_somos {
  margin-top: 226px;
  margin-bottom: 195px;
}

.container__icon_who_us {
  margin-top: -50px;
}

.container__text__about {
  width: 856px;
  margin-bottom: 358px;
}

.text__who_us {
  font-family: 'DisplayRegular', sans-serif;
  font-size: 64px;
  font-weight: 400;
  line-height: 83.2px;
  text-align: left;
  color: #FFFFFF;
}

.text__who_us_2 {
  font-family: 'DisplayRegular', sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  text-align: left;
  color: rgba(133, 133, 133, 1);
}

.span__who_us {
  color: #FA4515;
}

.name__who_us {
  font-family: 'DisplayBold', sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  text-align: left;
  color: #FFFFFF;
}

.name__who_us_span {
  color: rgba(250, 69, 21, 1);
}

.text__who_us_simple {
  font-family: 'DisplayBold', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  text-align: left;
  color: rgba(133, 133, 133, 1);
}

.container__who_us_text {
  width: 283px;
}

.profile-container {
  position: relative;
  width: fit-content;
  margin-bottom: 450px;
  margin-left: 19%;
}

.profile_container2 {
  position: relative;
  width: fit-content;
  margin-left: 46%;
}

.profile_container_text {
  position: absolute;
  bottom: -220px;
  right: -290px;
}

.profile_container_text2 {
  position: absolute;
  top: -220px;
  right: -190px;
}
</style>
