import Vue from 'vue'
import VueRouter from 'vue-router'
import ExposureChecker from '../components/ExposeChecker.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ExposureChecker',
    component: ExposureChecker
  },
  {
    path: '/beta',
    name: 'Beta',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/ExposeCheckerV2.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
