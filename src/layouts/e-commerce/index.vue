<template lang="pug">
  div
    app-header
    slot
    app-footer
</template>

<script>
import AppHeader from './Header'
import AppFooter from './Footer'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
