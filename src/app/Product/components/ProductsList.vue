<template lang="pug">
  ul
    li(v-for='product in products')
      | {{ product.name }} - {{ product.inventory }}
      button(
        :disabled='!product.inventory'
        @click='decreaseProductInventory(product)')
        | Decrease

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    products: 'allProducts'
  }),
  methods: {
    ...mapActions([
      'decreaseProductInventory'
    ])
  },
  created () {
    this.$store.dispatch('getAllProducts')
    this.$http.get('/ws/01001000/json/').then((response) => {
      console.log(response.data)
    })
  }
}
</script>
