import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home.vue"
import Report from "../components/Report.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/reports',
    name: 'reports',
    component: Report
  },
]

const router = new VueRouter({
  routes
})



export default router
