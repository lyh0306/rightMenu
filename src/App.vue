<template>
  <div id="app">
    <rightMenu />
    <tabButton />

  </div>
</template>

<script>
import rightMenu from './components/rightMenu.vue'
import tabButton from './components/tabButton.vue'

export default {
  name: 'app',
  components: {
    rightMenu,
    tabButton
  }
}
</script>

<style>
</style>
