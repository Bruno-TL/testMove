<script setup lang="ts">
import BaseBannerImages from '@/components/base/BaseBannerImages.vue';
import gps_2 from '@/assets/svg/cases/gps_2.svg';
import soluction from '@/assets/svg/cases/soluction.svg';
import trophy from '@/assets/svg/cases/trophy.svg';
import img_cases_1 from '@/assets/png/cases/img_case_1.png';
import img_cases_2 from '@/assets/png/cases/img_case_2.jpeg';
import img_cases_3 from '@/assets/png/cases/img_case_3.jpeg';
import img_cases_4 from '@/assets/png/cases/img_case_4.jpeg';
import image1 from '@/assets/png/image1.png';
import image2 from '@/assets/png/image2.png';
import image3 from '@/assets/png/image3.png';
import image4 from '@/assets/png/image4.png';
import image5 from '@/assets/png/image5.png';
import image6 from '@/assets/png/image6.png';
import image7 from '@/assets/png/image7.png';
import ScrollToTopButton from '@/components/ScrollToTopButton.vue';
import CardBudgetProposal from '@/components/budget/CardBudgetProposal.vue';
import BaseNamePRZ from '@/components/base/BaseNamePRZ.vue';

const scrollToDiv = () => {
  const element = document.getElementById('desafios');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<template>
  <section class="mt-16 pt-16 w-100">
    <h1 class="title__cases"> Interiores do Escritório<br> de Advocacia</h1>
    <BaseBannerImages />
    <div class="d-flex justify-center pt-13 pb-13">
      <v-btn icon="mdi-arrow-down-thin" @click="scrollToDiv">
      </v-btn>
    </div>

    <section>
      <div id="desafios" class="d-flex pt-16">
        <div class="w-25 d-flex justify-center">
          <v-chip variant="outlined" class="custom-chip">
            <v-img :src="gps_2" width="20" height="20" class="mr-2" />
            Desafios
          </v-chip>
        </div>
        <div class="w-75">
          <p class="title__desafio">
            <span class="span_title__desafio">O projeto de interiores</span> do escritório de advocacia apresentou
            desafios significativos,
            principalmente
            relacionados à necessidade de combinar uma estética formal e sofisticada com a funcionalidade exigida por um
            ambiente de trabalho intenso.
          </p>
          <p class="sub_title__desafio">
            A restrição de espaço foi uma das maiores dificuldades, exigindo soluções de design inteligentes para
            maximizar a área utilizável sem comprometer o conforto e a privacidade. Além disso, a representação realista
            do projeto através de visualização arquitetônica 3D (Archviz) exigiu uma atenção meticulosa aos detalhes
            para assegurar que as visualizações finais refletissem precisamente o conceito e o design planejados.
          </p>
        </div>
      </div>

    </section>
    <ScrollToTopButton />
    <section class="mt-16 pt-16">
      <div class="d-flex pt-16">
        <div class="w-25 d-flex justify-center">
          <v-chip variant="outlined" class="custom-chip">
            <v-img :src="soluction" width="20" height="20" class="mr-2" />
            Solução
          </v-chip>
        </div>
        <div class="container__img__cases_all">
          <div class="container__img_cases">
            <v-img :src="img_cases_1" width="536" height="394" cover />
          </div>
          <div class="container__img_cases">
            <v-img :src="img_cases_2" width="536" height="394" cover />
          </div>
          <div class="container__img_cases">
            <v-img :src="img_cases_3" width="536" height="394" cover />
          </div>
          <div class="container__img_cases">
            <v-img :src="img_cases_4" width="536" height="394" cover />
          </div>
        </div>
        <div class="w-33">
          <p class="title__cases_soluction">
            Utilizamos técnicas de visualização arquitetônica 3D (Archviz) para simular várias configurações de design,
            o que permitiu aos clientes visualizar opções e tomar decisões informadas sobre materiais e layouts antes do
            início da construção. Através de renderizações realistas, foi possível explorar diferentes soluções de
            isolamento e ventilação, garantindo conforto térmico sem comprometer a estética. A maquete eletrônica foi
            essencial para testar a interação entre luz natural e os espaços internos, otimizando o uso de grandes
            janelas para maximizar a entrada de luz e calor durante os meses mais frios.
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="d-flex mt-16 pt-16">
        <div class="w-25 d-flex justify-center">
          <v-chip variant="outlined" class="custom-chip">
            <v-img :src="trophy" width="20" height="20" class="mr-2" />
            Resultados
          </v-chip>
        </div>
        <div class="w-75">
          <p class="title__result">
            O projeto foi <span class="span_title__result">concluído com sucesso</span>, resultando em um espaço que não
            apenas atende às necessidades
            funcionais de um escritório de advocacia moderno, mas também promove um ambiente de trabalho estimulante e
            confortável.
          </p>
          <p class="sub_title__result">
            As visualizações em 3D foram fundamentais para a aprovação do design pelos stakeholders, pois permitiram que
            eles visualizassem o produto final com grande precisão antes da realização das reformas. Este projeto não
            apenas elevou o padrão de design interior para ambientes corporativos, mas também demonstrou o poder da
            Archviz em transformar e concretizar visões arquitetônicas em realidades palpáveis.
          </p>
        </div>
      </div>
    </section>
    <div class="w-100 d-flex justify-center my-16 pb-16">
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
    <div class="my-16 py-16">
      <BaseBannerImages />
    </div>
    <section class="mb-16 pb-16">
      <div class="d-flex justify-center container__button_back">
        <div class="d-flex flex-column w-50 align-start container__individual_button">
          <v-btn prepend-icon="mdi-chevron-left" variant="plain" density="compact" class="button__back_project"
            size="small">
            Projeto anterior
          </v-btn>
          <span class="span__button__back">
            Cozinha Industrial
          </span>
        </div>
        <div class="d-flex flex-column align-end w-50  container__individual_button">
          <v-btn append-icon="mdi-chevron-right" variant="plain" density="compact" class="button__back_project"
            size="small">
            Projeto anterior
          </v-btn>
          <span class="span__button__back">
            Residência Moderna<br>
            em Campos do Jordão
          </span>
        </div>
      </div>
    </section>
    <section class="my-16">
      <CardBudgetProposal />
    </section>
    <section class="py-16">
      <BaseNamePRZ />
    </section>
  </section>
</template>

<style scoped>
.title__cases {
  font-family: 'DisplayRegular', sans-serif;
  font-size: 110px;
  font-weight: 700;
  line-height: 121px;
  text-align: center;
  letter-spacing: 3px;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 150px;
}

.custom-chip {
  color: #FFFFFF;
}

.title__desafio {
  font-family: 'DisplayRegular', sans-serif;
  font-size: 48px;
  font-weight: 400;
  line-height: 72px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 32px;
}

.span_title__desafio {
  color: rgba(250, 69, 21, 1) !important;
}

.sub_title__desafio {
  font-family: 'DisplayRegular', sans-serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 48px;
  text-align: left;
  color: rgba(133, 133, 133, 1);
}

.container__img__cases_all {
  width: 536px;
  margin-right: 26px;
}

.container__img_cases {
  width: 536px;
  height: 394px;
  border-radius: 32px;
  overflow: hidden;
  margin-bottom: 24px;
}

.title__cases_soluction {
  font-family: 'DisplayRegular', sans-serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 48px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
}

.title__result {
  font-family: 'DisplayRegular', sans-serif;
  font-size: 48px;
  font-weight: 400;
  line-height: 72px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
}

.span_title__result {
  color: rgba(250, 69, 21, 1) !important;
}

.sub_title__result {
  font-family: 'DisplayRegular', sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  text-align: left;
  color: rgba(133, 133, 133, 1);
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

.button__back_project {
  color: rgba(133, 133, 133, 1);
  font-family: 'DisplayRegular', sans-serif;

  padding-bottom: 32px;
}

.span__button__back {
  font-family: 'DisplayRegular', sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
  text-align: right;
  color: rgba(255, 255, 255, 1);
  padding: 0 20px;
}

.container__button_back {
  height: 240px;
  background-color: var(--bg-frame);
}

.container__individual_button {
  border: 1px solid rgba(223, 223, 223, 0.2);
  padding-top: 40px;
}

@media (min-width: 1024px) {}
</style>
