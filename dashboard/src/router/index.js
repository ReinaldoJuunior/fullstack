/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router'
const FeedBacker = () => import('../views/FeedBacker/index.vue')
const Home = () => import('../views/Home/index.vue')
const Credentials = () => import('../views/Credencials/index.vue')
const routes = [

  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/feedbacker',
    name: 'FeedBacker [b]',
    component: FeedBacker,
    meta: {
      hasAuth: true
    }
  },

  {
    path: '/credencials',
    name: 'Credencials [b]',
    component: Credentials,
    meta: {
      hasAuth: true
    }
  },

  {
    path: '/:pathMatch(.*)',
    redirect: { name : 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
