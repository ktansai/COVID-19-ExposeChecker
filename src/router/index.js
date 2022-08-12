import Vue from 'vue'
import VueRouter from 'vue-router'
import ExposureChecker from '../components/ExposeChecker.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/v1',
    name: 'CocoaLogChecker1',
    component: ExposureChecker
  },
  {
    path: '/',
    name: 'CocoaLogChecker2',
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
