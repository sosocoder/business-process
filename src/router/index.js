import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tabChange',
    name: 'tabChange',
    component: () => import ('../views/tabChange.vue')
  },
  {
    path: '/carChange',
    name: 'carChange',
    component: () => import ('../views/carChange.vue')
  },
  {
    path: '/chinaMap',
    name: 'chinaMap',
    component: () => import ('../views/chinaMap.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
