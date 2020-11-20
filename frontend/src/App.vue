<template>
  <the-header> </the-header>
  <router-view> </router-view>  
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';
export default {
  components: {
    TheHeader
  }
}
</script>

<style>
#app, body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
