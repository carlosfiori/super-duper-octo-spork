<template lang="pug">
  #app
    e-commerce
      router-view
</template>

<script>
import ECommerce from '@/layouts/e-commerce'

export default {
  components: {
    ECommerce
  },
  name: 'App'
}
</script>
