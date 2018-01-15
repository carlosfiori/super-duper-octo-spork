import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/app/Home'
import NotFound from '@/layouts/e-commerce/NotFoundPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
