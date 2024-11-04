import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'
import '@mdi/font/css/materialdesignicons.css'
import BaseButtonBudget from '@/components/base/BaseButtonBudget.vue'

const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

app.component('BaseButtonBudget', BaseButtonBudget)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
