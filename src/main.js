import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createMetaManager } from 'vue-meta'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'

const app = createApp(App)
const head = createHead()
app.use(createMetaManager())
app.use(createPinia())
app.use(router)
app.use(head)
app.mount('#app')
