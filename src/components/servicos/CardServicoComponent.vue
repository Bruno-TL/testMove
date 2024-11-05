<script setup lang="ts">
import sofaIcon from '@/assets/svg/sofa.svg'
import sucessIcon from '@/assets/svg/sucess.svg';
</script>

<template>
  <v-card class="container__card_servico">
    <div class="d-flex px-5 justify-space-between pb-6">
      <span>01</span>
      <div>
        <v-img :src="sofaIcon" width="24" height="24" class="mr-2" />
      </div>
    </div>
    <v-card-title class="title__servico pb-6">Imagens 3D Internas</v-card-title>
    <div class="d-flex justify-space-between align-center pr-6">
      <v-card-text class="text__servico">Transforme espaços interiores com nossas imagens 3D detalhadas
        e realistas. Ideal para visualizar
        <span>decorações, layouts e o potencial completo de ambientes internos.</span>
      </v-card-text>
      <v-chip variant="outlined" class="custom-chip">
        <v-img :src="sucessIcon" width="13.48" height="13.48" class="mr-2" />
        A partir de R$ 150
      </v-chip>
    </div>
    <div class="hover-text">
      Imagens 3D Internas
    </div>
  </v-card>

</template>

<style scoped>
.container__card_servico {
  width: 100%;
  height: 250px;
  background-color: #ffffff00;
  border-top: 1px solid #4E4E4E;
  border-bottom: 1px solid #4E4E4E;
  color: #FFF;
  padding-top: 20px;
  transition: background-color 0.8s ease;

  position: relative;
  overflow: hidden;
}

.hover-text {
  position: absolute;
  right: 80%;
  transition: right 1.5s ease;
  white-space: nowrap;
  font-size: 180px;
  color: rgba(255, 255, 255, 0.144);
  font-family: 'DisplayHeavy';
  font-weight: 700;
  top: 50%;
  transform: translateY(-50%);
  width: 180px;
  text-align: center;
  opacity: 0;
  visibility: hidden;
}

.container__card_servico:hover .hover-text {
  right: 100%;
  opacity: 1;
  visibility: visible;
}


.container__card_servico:hover {
  background-color: #FA4515;
}

.container__card_servico:hover .text__servico {
  color: #FFFFFF;
}

.container__card_servico:hover .custom-chip {
  display: flex;
}

.title__servico {
  font-family: 'DisplayRegular', sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  text-align: left;
}

.text__servico {
  font-family: 'DisplayRegular', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  text-align: left;
  display: flex;
  flex-direction: column;
  color: #858585;
}

.custom-chip {
  display: none;
  background-color: #C83711;
}
</style>
