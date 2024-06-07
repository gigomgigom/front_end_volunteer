import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path : '/layout',
    name: 'layout',
    component: () => import('@/views/DetailBody.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
