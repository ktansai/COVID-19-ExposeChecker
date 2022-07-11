import Vue from 'vue'
import VueRouter from 'vue-router'
import ExposureChecker from '../components/ExposeChecker.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CocoaLogChecker1',
    component: ExposureChecker
  },
  {
    path: '/beta',
    name: 'CocoaLogChecker2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/ExposeCheckerV2.vue')
  },
  {
    path: '/*',
    redirect: '/' 
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
