import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import TestimonialView from '@/views/TestimonialView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeView
  },

  {
    path: '/about',
    component: AboutView
  },

  {
    path: '/testimonial',
    component: TestimonialView
  },
]

const router = new VueRouter({
  routes
})

export default router
