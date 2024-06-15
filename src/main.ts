import './assets/main.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // Importa o JavaScript do Bootstrap

import { createApp } from 'vue'
import App from './App.vue'
import VueApexCharts from 'vue3-apexcharts'

import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

// Configuração do Vuetify
const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
  },
})

// Cria a aplicação Vue e usa Vuetify e ApexCharts
createApp(App).use(VueApexCharts).use(vuetify).mount('#app')
