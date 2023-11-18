import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueScreen from 'vue-screen'

import App from './App.vue'
import router from './router'

// import './assets/main.css'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'

const app = createApp(App)
app.component('HeroSection', HeroSection)
app.component('AboutSection', AboutSection)

app.use(createPinia())
app.use(router)
app.use(VueScreen, 'bootstrap')

app.mount('#app')
