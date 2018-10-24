<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="stylus">
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    height: 100%
    width: 100%
  body,html,a,div,p 
    margin:0
    padding: 0
  body,html
    width: 100%
    height: 100%
</style>
