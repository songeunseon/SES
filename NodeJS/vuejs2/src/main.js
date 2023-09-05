import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia' //현재상태를 내가 직접제어할수있는 상태가 됨. 

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
