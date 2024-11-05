<script setup lang="ts">
const goPage = (namePage: string) => {
  console.log(namePage)
};

</script>

<template>
  <v-card class="container__card__budget_proposal">
    <v-card-title class="title__card__budget_proposal">
      Sua proposta em até 48h.
    </v-card-title>
    <v-card-text class="text__card__budget_proposal">
      Fale-nos sobre o futuro que deseja realizar, e nós te dizemos a visualizá-lo.
    </v-card-text>
    <template v-slot:actions>
      <v-btn rounded="lg" append-icon="mdi-arrow-top-right" class="animated-button-card text-none"
        @click="goPage('budget')">
        <span class="button-content-card">Orçamento</span>
      </v-btn>
    </template>
  </v-card>
  <div class="d-flex justify-center">
    <div class="container__shadow"></div>
  </div>
</template>

<style scoped>
.container__card__budget_proposal {
  width: 100%;
  background-color: rgba(250, 69, 21, 1);
  height: 326px;
  border-radius: 32px;
  padding: 60px 45px;
}

.container__shadow {
  width: 97%;
  background-color: rgba(54, 56, 58, 1);
  height: 100px;
  border-radius: 32px;
  margin-top: -80px;
}

.title__card__budget_proposal {
  font-family: 'DisplayRegular';
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
}

.text__card__budget_proposal {
  font-family: 'DisplayRegular';
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  margin: 10px 0;
}

.animated-button-card {
  position: relative;
  overflow: hidden;
  color: #333;
  transition: color 0.3s ease;
  height: 55px;
  background-color: rgba(255, 255, 255, 1);

  margin-left: 5px;
}

.animated-button-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4%;
  height: 100%;
  background-color: rgba(133, 133, 133, 0.171);
  transition: width 0.8s ease;
  z-index: 0;
}

.animated-button-card:hover::before {
  width: 100%;
}

.animated-button-card:hover {
  color: #FF5722;

}

.button-content-card {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  font-family: 'DisplayBold', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  margin: 0 10px;
}
</style>
