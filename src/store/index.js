import Vue from 'vue'
import Vuex from 'vuex'

import Product from '@/app/Product/ProductStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Product
  }
})
