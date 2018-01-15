import * as types from '@/store/types'

const state = {
  all: []
}

const getters = {
  allProducts: state => state.all
}

const mutations = {
  [types.RECEIVE_PRODUCTS] (state, {products}) {
    state.all = products
  },
  [types.DECREASE_INVENTORY] (state, {id}) {
    state.all.find(product => product.id === id).inventory--
  }
}

const actions = {
  getAllProducts ({commit}) {
    let products = [{id: 1, name: 'p1', inventory: 10}, {id: 2, name: 'p2', inventory: 20}]
    commit(types.RECEIVE_PRODUCTS, {products})
  },
  decreaseProductInventory ({commit}, product) {
    if (product.inventory > 0) {
      commit(types.DECREASE_INVENTORY, {
        id: product.id
      })
    }
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
