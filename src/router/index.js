import { createRouter, createWebHistory } from 'vue-router'
import ContentView from '../views/ContentView.vue'

const routes = [
  {
    path: '/',
    name: 'Content',
    component: ContentView,
    meta: {
      title: 'single page web'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
