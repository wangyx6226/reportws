<template>
  <div class="base_title">
      <h1>{{$t('langMenuMap.'+ title)}}</h1>
      <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
        <el-button>功能说明</el-button>
      </el-tooltip>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      description: String
    },

    mounted() {
      console.log(this.$attrs)
    }
  }
</script>

<style lang="stylus" scoped>
  .base_title
    display flex
    align-items center
    padding 15px
    background-color #fff
    margin-bottom 15px
    border-radius 5px
    h1
      color #777777
      font-size 16px
      height 100%
      font-weight 700
      margin 0
      margin-right 20px
    .el-tooltip 
      padding 6px 10px
</style>

