<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import logoPRZ from '@/assets/logoPRZ.svg';
import BaseButton from './components/base/BaseButton.vue';
import '@/assets/fonts.css'
import { computed, ref } from 'vue';
import FooterComponent from './components/Footer/FooterComponent.vue';
const route = useRoute();

const nameRoute = computed(() => route.name);

const titleButtonBudget = ref('Orçamento');
const namePageBudget = ref('budget');
</script>

<template>
  <header>
    <div v-if="nameRoute !== 'budget' && nameRoute !== 'thankyou'" class="">
      <nav class="container__nav">
        <RouterLink to="/" class="img__logo">
          <v-img :width="123" :src="logoPRZ"></v-img>
        </RouterLink>
        <div class="container__links__router">
          <a class="links__router link_home" href="#home">Home</a>
          <a class="links__router link_cases" href="#cases">Cases</a>
          <a class="links__router link_serv" href="#servicos">Serviços</a>
          <a class="links__router link_quemsomos" href="#quem-somos">Quem Somos</a>
        </div>
        <BaseButton :titleButton="titleButtonBudget" :namePage="namePageBudget" />
      </nav>
    </div>
  </header>

  <main v-if="nameRoute == 'budget' || nameRoute == 'thankyou'">
    <RouterView />
  </main>
  <main v-else id="container__main">
    <div class="line line-left"></div>
    <div class="line line-right"></div>
    <RouterView />
  </main>

  <FooterComponent v-if="nameRoute !== 'budget' && nameRoute !== 'thankyou'" />
</template>

<style scoped>
#container__main {
  border-left: 1px solid #4e4e4e9f;
  border-right: 1px solid #4e4e4e9f;
  margin-left: 72px;
  margin-right: 72px;
  position: relative;
  overflow: hidden;
}

.line {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: #4e4e4e9f;
  z-index: -1;
}

.line-left {
  left: 33%;
}

.line-right {
  left: 66%;
}


.container__nav {
  width: 100%;
  height: 87px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 72px;
  padding-right: 72px;
  border-bottom: 1px solid #4E4E4E;
  position: fixed;
  z-index: 1000;
  background-color: var(--bg-frame);
}

.container__links__router {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 48px;
}

.links__router {
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  transition: color 0.5s ease;
  font-family: 'DisplayRegular';
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
}

.links__router::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background-color: #FA4515;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.links__router:hover {
  color: #f0f0f0;
}

.links__router:hover::after {
  opacity: 1;
}
</style>
