import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'animate.css'
import '@/assets/css/tailwild.css'
import '@/assets/css/fonts.css'

const App = createApp(App)
App.use(router)
App.mount('#app')
