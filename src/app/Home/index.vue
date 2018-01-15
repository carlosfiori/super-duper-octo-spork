<template lang="pug">
  div
    h1 Products:
    products-list
</template>

<script>
import ProductsList from '@/app/Product/components/ProductsList'

export default {
  name: 'Home',
  components: {
    ProductsList
  }
}
</script>
