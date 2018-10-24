<template>
  <div class="base_title">
    <h1>{{$t('langMenuMap.'+ title)}}</h1>
  </div>
</template>

<script>
  export default {
    props: {
      title: String
    },

    mounted() {
      console.log(this.$attrs)
    }
  }
</script>

<style lang="stylus" scoped>
  .base_title
    height 30px
    line-height 30px
    color #409EFF
    h1
      font-weight 700
</style>

