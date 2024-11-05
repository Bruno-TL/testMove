<script setup lang="ts">
import facebook from '@/assets/svg/footer/facebook.svg'
import instagram from '@/assets/svg/footer/instagram.svg'
import linkedIn from '@/assets/svg/footer/linkedIn.svg'
import twitter from '@/assets/svg/footer/twitter.svg'
import telephone from '@/assets/svg/footer/telephone.svg'
import email from '@/assets/svg/footer/email.svg'
import gps from '@/assets/svg/footer/gps.svg'
</script>

<template>
  <footer class="w-100">
    <div class="container_line py-16">
      <div class="line line-left"></div>
      <div class="line line-right"></div>
      <div class="d-flex">
        <div class="w-33">
          <div class="container__footer__text_midia_social">
            <p class="text__footer_link">Arquitetos apaixonados e dedicados à arte da arquitetura e da visualização
              arquitetônica.</p>
          </div>
          <div class="d-flex ga-2">
            <div>
              <v-img :src="facebook" width="24" height="24" />
            </div>
            <div><v-img :src="instagram" width="24" height="24" /></div>
            <div><v-img :src="linkedIn" width="24" height="24" /></div>
            <div><v-img :src="twitter" width="24" height="24" /></div>
          </div>
        </div>
        <div class="w-33">
          <h5 class="title__footer_link">Empresa</h5>
          <ol>
            <ul class="text__footer_link mb-4">Home</ul>
            <ul class="text__footer_link mb-4">Cases</ul>
            <ul class="text__footer_link mb-4">Quem Somos</ul>
            <ul class="text__footer_link mb-4">Orçamentos</ul>
          </ol>
        </div>
        <div class="w-33">
          <h5 class="title__footer_link">Contato</h5>
          <div class="d-flex mb-5 ga-2">
            <div><v-img :src="telephone" width="24" height="24" /></div>
            <p class="text__footer_link">(+1) 765-446-4351</p>
          </div>
          <div class="d-flex mb-5 ga-2">
            <div><v-img :src="email" width="24" height="24" /></div>
            <p class="text__footer_link">info@przarquitetura.com.br</p>
          </div>
          <div class="d-flex mb-5 ga-2">
            <div><v-img :src="gps" width="24" height="24" /></div>
            <p class="text__footer_link">Av. das Nações Unidas, 771 - Sala 23
              São Paulo - SP</p>
          </div>
        </div>
      </div>

    </div>
    <div class="container__footer_end w-100">
      <p class="text__footer_end">Termos de Uso & Privacidade</p>
      <p class="text__footer_end">©2024 - Todos os direitos reservados a PRZ Arquitetura</p>
      <p class="text__footer_end">Desenvolvido por <a class="span__footer_end" href="https://movedigital.com.br/">Move
          Digital</a></p>
    </div>
  </footer>
</template>

<style scoped>
.container_line {
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

.container__footer_end {
  background-color: rgba(250, 69, 21, 1);
  padding-left: 72px;
  padding-right: 72px;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text__footer_link {
  font-family: 'DisplayRegular', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: rgba(133, 133, 133, 1);
  display: flex;
}

.container__footer__text_midia_social {
  width: 426px;
  margin-bottom: 26px;
}

.title__footer_link {
  font-family: 'DisplayRegular', sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 24px;
}

.text__footer_end {
  font-family: 'DisplayRegular', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 15.6px;
  text-align: left;
  color: rgba(255, 255, 255, 0.836);
}

.span__footer_end {
  font-size: 700;
  text-decoration: none;
  color: #FFFFFF;
}
</style>
