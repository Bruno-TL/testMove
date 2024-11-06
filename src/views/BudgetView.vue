<template>
  <section class="w-100 d-flex justify-center container__budget_main">
    <div class="container__background">
      <div class="container__budget_back_select_step fundo_img">
        <div class="container__budget_buttons">
          <v-btn :class="['button__budget_top', showStep1 && 'button__budget_actived']" @click="activeStep(1)">
            <span :class="['span_budget_top_number', showStep1 && 'span_budget_actived']">1</span>
            <span class="span_budget_top_text">Dados do<br> Projeto</span>
          </v-btn>
          <v-btn :class="['button__budget_bottom', showStep2 && 'button__budget_actived']" @click="activeStep(2)">
            <span :class="['span_budget_bottom_number', showStep2 && 'span_budget_actived']">2</span>
            <span class="span_budget_bottom_text">Dados<br> Pessoais</span>
          </v-btn>
        </div>
      </div>
    </div>

    <div class="container__budget_content_form">

      <div class="d-flex justify-space-between">
        <h2 class="title_content_form">Orçamentos</h2>
        <div>
          <v-img :src="logoPRZ" width="123" height="43" @click="goHome" />
        </div>
      </div>

      <v-form @submit.prevent="handleSubmit" class="pt-8" ref="formRef">

        <div id="step-1" v-if="showStep1">
          <div>
            <span class="span__form_budget">Natureza do Projeto</span>
            <v-radio-group inline class="input__chekbox__radio" v-model="formData.natureProject"
              :rules="[requiredText]">
              <v-radio label="Comercial" value="Comercial"></v-radio>
              <v-radio label="Residencial" value="Residencial"></v-radio>
            </v-radio-group>
          </div>
          <div>
            <span class="span__form_budget">Tipo de Projeto Comercial</span>
            <v-text-field variant="outlined"
              placeholder="Ex. Prédio Comercial, Galpão, Loja no centro, Shopping Center..."
              class="input__chekbox__radio" :rules="[requiredText]"
              v-model="formData.typeCommercialProject"></v-text-field>
          </div>
          <div>
            <span class="span__form_budget">Onde está situado o seu projeto?</span>
            <v-select placeholder="Selecione"
              :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="outlined"
              class="input__chekbox__radio" :rules="[requiredText]" v-model="formData.situatedProject"></v-select>
          </div>
          <div>
            <span class="span__form_budget">Você já possui o projeto executivo finalizado?</span>
            <v-select class="input__chekbox__radio" placeholder="Selecione"
              :items="['Sim', 'Não', 'Incompleto', 'Depende']" variant="outlined" :rules="[requiredText]"
              v-model="formData.hasProject"></v-select>
          </div>
          <v-btn rounded="lg" append-icon="mdi-arrow-top-right" class="animated-button text-none"
            @click="activeStep(2)">
            <span class="button-content">Avançar</span>
          </v-btn>
          <p v-show="erroShow" class="span__error">Preencha os dados do formulário !</p>
        </div>

        <div id="step-2" v-if="showStep2">
          <div>
            <span class="span__form_budget">Serviços Desejados</span>
            <div class="d-flex ga-3">
              <v-checkbox class="input__chekbox__radio" label="Imagens Estáticas" value="Imagens Estáticas"
                v-model="formData.desiredServices"></v-checkbox>
              <v-checkbox class="input__chekbox__radio" label="Vídeo" value="Vídeo"
                v-model="formData.desiredServices"></v-checkbox>
            </div>

          </div>
          <div>
            <span class="span__form_budget ">Arquivos do Projeto</span>
            <p class="parag__form_step2 mt-3">Possui algum arquivo do projeto que possa compartilhar para facilitar a
              elaboração de um orçamento mais
              preciso?</p>
            <v-radio-group inline class="input__chekbox__radio" :rules="[requiredText]" v-model="formData.hasQualifier">
              <v-radio label="Sim" value="Sim"></v-radio>
              <v-radio label="Não" value="Não"></v-radio>
            </v-radio-group>
          </div>
          <div>
            <span class="span__form_budget">Informação Adicionais</span>
            <v-text-field variant="outlined" placeholder="Digite aqui" class="input__chekbox__radio"
              :rules="[requiredText]" v-model="formData.additionalInformation"></v-text-field>
          </div>
          <div class="mb-4">
            <span class="span__form_budget">Contato para Dúvidas</span>
            <v-text-field variant="outlined" placeholder="Deixe aqui seu contato (Telefone ou E-mail)"
              class="input__chekbox__radio" :rules="[requiredText]" v-model="formData.contactQuestion"></v-text-field>
          </div>
          <v-btn rounded="lg" type="submit" append-icon="mdi-arrow-top-right" class="animated-button text-none"
            :loading="loading">
            <span class="button-content">Finalizar</span>
          </v-btn>
          <p v-show="erroShowEnd" class="span__error">Preencha os dados do formulário !</p>
        </div>
      </v-form>

      <template>
        <div>
          <v-dialog v-model="dialog" width="auto" class="container__popup">
            <v-card max-width="400" class="card_popup" height="370">
              <div class="container_circle">
                <div class="container_circle_2">
                  <v-icon icon="mdi-alert-circle-outline" color="orange-darken-2" size="large"></v-icon>
                </div>
              </div>


              <h4 class="title_popup">Não foi possível solicitar no momento.</h4>
              <p class="parag_popup">Por favor, entre em contato diretamente pelo<br> WhatsApp ou tente novamente.
                Desculpe por isso.</p>
              <div class="d-flex flex-column justify-center ga-4 mt-4">
                <v-btn class=" button_popup button_home text-none" text="Ir para a Home" @click="goHome"></v-btn>
                <v-btn class=" button_popup button_whatsapp text-none" text="Falar no WhatsApp"
                  @click="goHome('thankyou')"></v-btn>
              </div>
            </v-card>
          </v-dialog>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import logoPRZ from '@/assets/logoPRZ.svg';
import { ref } from 'vue';
import { useFormStore } from '@/stores/useFormStore';
import { useRouter } from 'vue-router';

const router = useRouter();
const formStore = useFormStore();
const { formData, validateForm, submitFormData } = formStore;

const showStep2 = ref(false);
const showStep1 = ref(true);
const formRef = ref();
const erroShow = ref(false);
const erroShowEnd = ref(false);
const dialog = ref(false);
const loading = ref(false);

const activeStep = (step: number) => {
  if (step === 2) {
    erroShow.value = false;
    if (!formData.natureProject || !formData.typeCommercialProject || !formData.situatedProject || !formData.hasProject) {
      erroShow.value = true;
      setTimeout(() => { erroShow.value = false; }, 3000)
      return;
    }
  }

  showStep1.value = step === 1;
  showStep2.value = step === 2;
}


const handleSubmit = async () => {
  if (!validateForm()) {
    erroShowEnd.value = true;
    setTimeout(() => { erroShowEnd.value = false; }, 3000)
    return
  }
  loading.value = true;
  const response = await submitFormData();
  loading.value = false;
  if (response) {
    await formStore.resetForm();
    router.push({ name: 'thankyou' });
  } else {
    dialog.value = true;
  }
};

const requiredText = (v: string) => !!v || 'Campo obrigatório';

const goHome = (name: string | null) => {
  dialog.value = false;
  if (name === 'thankyou') {
    router.push({ name: name });
  } else {
    router.push({ name: 'home' });
  }

}

</script>

<style scoped>
.container__budget_main {
  background-color: #000 !important;
  height: 127vh;
}

.container__background {
  height: 920px;
  background-color: var(--bg-frame);
}

.container__budget_back_select_step {
  width: 597px;
  height: 919px;
  padding: 111px 98px;

}

.fundo_img {
  background-image: url('../assets/png/Stats.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0 32px 32px 0;
}

.container__budget_buttons {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.button__budget_top {
  height: 45%;
  border-radius: 32px 32px 0 0;
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 146, 46, 0.3);
}

.span_budget_top_number {
  width: 70px;
  height: 70px;
  border-radius: 100px;
  padding: 8px 16px;
  background-color: rgba(224, 224, 224, 1);
  color: rgba(155, 159, 166, 1);
  font-family: 'DisplayRegular';
  font-size: 36px;
  font-weight: 600;
  line-height: 54px;
  text-align: center;
}



.span_budget_top_text {
  font-family: 'DisplayRegular';
  font-size: 36px;
  font-weight: 600;
  line-height: 46.8px;
  text-align: left;
  color: #FFFFFF;
  margin-left: 20px;
}

.span_budget_bottom_number {
  width: 70px;
  height: 70px;
  border-radius: 100px;
  padding: 8px 16px;
  background-color: rgba(224, 224, 224, 1);
  color: rgba(155, 159, 166, 1);
  font-family: 'DisplayRegular';
  font-size: 36px;
  font-weight: 600;
  line-height: 54px;
  text-align: center;
}

.span_budget_bottom_text {
  font-family: 'DisplayRegular';
  font-size: 36px;
  font-weight: 600;
  line-height: 46.8px;
  text-align: left;
  color: #FFFFFF;
  margin-left: 20px;
}

.button__budget_bottom {
  height: 45%;
  border-radius: 0 0 32px 32px;
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 146, 46, 0.3);
}

.span_budget_actived {
  background-color: rgba(250, 69, 21, 1);
  color: #FFFFFF;
}

.button__budget_actived {
  border: 2px solid rgba(255, 146, 46, 0.7);
}

.container__budget_content_form {
  height: 920px;
  background-color: var(--bg-frame);
  padding: 0 48px;
  width: 55%;
  padding-top: 111px;
}

.title_content_form {
  font-family: 'DisplayRegular', sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
  text-align: left;
  color: #FFFFFF;
}

.animated-button {
  position: relative;
  overflow: hidden;
  color: #333;
  transition: color 0.3s ease;
  height: 55px;
}

.animated-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4%;
  height: 100%;
  background-color: #FF5722;
  transition: width 0.8s ease;
  z-index: 0;
}

.animated-button:hover::before {
  width: 100%;
}

.animated-button:hover {
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

.span__form_budget {
  font-family: 'DisplayRegular', sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  text-align: left;
  color: #FFFFFF;
}

.input__chekbox__radio {
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.32);
}

.span__error {
  font-family: 'DisplayRegular';
  font-size: 16px;
  font-weight: 400;
  line-height: 36px;
  text-align: left;
  color: rgb(240, 12, 12);
}

.parag__form_step2 {
  font-family: 'DisplayRegular';
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(255, 255, 255, 1);
}

.container__popup {
  height: 370px;
}

.card_popup {
  border-radius: 18px !important;
  padding: 24px;
  background-color: rgba(28, 28, 28, 1);
  gap: 10px;
}

.title_popup {
  font-family: 'DisplayRegular';
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
}

.parag_popup {
  font-family: 'DisplayRegular', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: rgba(133, 133, 133, 1);
}

.button_popup {
  font-family: 'DisplayRegular', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
}

.button_home {
  background-color: rgba(250, 69, 21, 1);
}

.button_whatsapp {
  border: 1px solid rgba(223, 223, 223, 1);
  background-color: #ffffff00;
}

.container_circle {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(252, 252, 252);
  border-radius: 100%;
}

.container_circle_2 {
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 221, 218);
  border-radius: 100%;
}
</style>
