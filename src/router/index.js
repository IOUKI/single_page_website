import { createRouter, createWebHistory } from 'vue-router'
import ContentView from '../views/ContentView.vue'

const routes = [
  {
    path: '/',
    name: 'Content',
    component: ContentView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
