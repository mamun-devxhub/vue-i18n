import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

const i18n = createI18n({
  legacy: true,
  locale: 'bn',
  fallbackLocale: 'en',
  messages: {
    en: {
      welcome: 'Welcome'
    },
    bn: {
      welcome: 'স্বাগতম'
    }
  }
})
const app = createApp(App)

app.use(i18n)
app.mount('#app')
