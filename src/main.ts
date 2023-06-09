import { createApp } from 'vue'
import { createHead } from "@unhead/vue"
import App from './App.vue'

import routes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'

import './assets/css/style.css'

const app = createApp(App)
const head = createHead()

app.use(
  createRouter({
    history: createWebHistory(),
    routes
  })
)

app.use(head)

app.mount('#app')
