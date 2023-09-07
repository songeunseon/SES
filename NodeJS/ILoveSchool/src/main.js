import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import VueSession from 'vue-session/index'

var sesstionOptions={
    persist:true
}

const firebaseConfig = {
    apiKey: "AIzaSyCwfLRgCQELstOL3as-QcyZiywbJh2LB9E",
    authDomain: "iloveschool-ede9c.firebaseapp.com",
    projectId: "iloveschool-ede9c",
    storageBucket: "iloveschool-ede9c.appspot.com",
    messagingSenderId: "199805185280",
    appId: "1:199805185280:web:90ec65598bab0cda8e17e5",
    measurementId: "G-L40B3WB86C"
    };

firebase.initializeApp(firebaseConfig)


const app = createApp(App)

app.use(VueSession,sesstionOptions)
app.use(createPinia())
app.use(router)

app.mount('#app')
