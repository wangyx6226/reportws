<template>
  <div class="base_title">
      <h1>{{$t('langMenuMap.'+ title)}}</h1>
      <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
        <el-button>{{$t('langCommon.direction')}}</el-button>
      </el-tooltip>
  </div>
</template>

<script>
  export default {
    name: 'BaseTitle',
    //该值为true时，父组件传入的属性将被添加到根元素上
    //为false时，可以自行决定将属性添加到某个元素上
    //适用于基础组件适应更多应用场景
    //例：<h1 v-bind="$attrs">{{$t('langMenuMap.'+ title)}}</h1>
    // inheritAttrs: false,
    props: {
      title: String,
      direction: String,
    },

    mounted() {
      //其他未通过prop接收的属性，将被定义在$attrs对象上
      //除class、style，这两个属性将会被合并
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

