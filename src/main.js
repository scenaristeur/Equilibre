import './assets/main.css'

import { createApp } from 'vue'
// import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store'

import i18n from './i18n';


//import messages from '@/lang/en'


const app = createApp(App)

// const locale = navigator.language
// console.log(locale)

// const i18n = createI18n({
//   // something vue-i18n options here ...
//   locale: locale || 'en', // set current locale
//   fallbackLocale: 'en',
//   //messages // set locale messages

// })



app.use(router)
app.use(store)
app.use(i18n())

app.mount('#app')


