// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from '@/store'
import App from './App'
import router from './router'
import baseAxios from 'axios'
import VueAxios from 'vue-axios'

const axios = baseAxios.create({
  baseURL: 'http://localhost:3000/api'
})

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
