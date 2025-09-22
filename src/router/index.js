import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HowtoUse from '@/views/HowtoUse.vue'
import AboutView from '../views/AboutView.vue'
import FAQView from '@/views/FAQView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/how-to-use',
      name: 'HowToUse',
      component: HowtoUse,
    },
     {
      path: '/about',
      name: 'About',
      component: AboutView,
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQView,
    },
    
  ],
})

export default router
