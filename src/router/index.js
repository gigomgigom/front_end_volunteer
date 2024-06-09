import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/Main',
    name: 'Main',
    component: () =>  import(/* webpackChunkName: "MainPage" */ '@/views/MainPage.vue')
  },
  {
    path: '/Details',
    name: 'Details',
    component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/DetailBody.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
