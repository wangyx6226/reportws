<template>
  <div class="common_chart_view" >
    <!-- 标注 -->
    <el-breadcrumb v-if="charts.length > 1">
      <el-breadcrumb-item 
        v-for="(item,index) in charts" 
        :key="index">
        <a href="javascript:;" @click="toggleChart(item)">{{$t(`langChartTitle.${menu}_${item}Title`)}}</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 图表容器 -->
    <div v-if="charts.length > 0">
      <ul class="chart_wrap">
      <!-- <el-carousel height="400px">
        <el-carousel-item v-for="(item, index) in charts" :key="index">
          <div :id="item + 'Chart'" class="chart"></div>
        </el-carousel-item>
      </el-carousel> -->
        <li
          v-for="(item, index) in charts" 
          :key="index"
          class="chart"
        >
          <div :id="item + 'Chart'"></div>
        </li>
      </ul>
     
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      charts: {
        type: Array,
        default() {
          return []
        }
      },
      menu: {
        type: String,
        default: 'A_Song_PlayTotalDSP'
      }
    },

    data() {
      return {
        showType: 'line'
      }
    },

    methods: {
      toggleChart(type) {
        this.showType = type
        console.log(this.showType)
      } 
    }
  }
</script>


<style lang="stylus" scoped>
  .common_chart_view
    width 100%
    .el-breadcrumb
      background-color #fff
      padding 15px
      border-bottom 1px solid #d8dce5
      border-top-left-radius 5px
      border-top-right-radius 5px
      .el-breadcrumb__inner
        a
          font-weight normal
          &:active
            color #409EFF
            cursor pointer
    .chart_wrap
      // height 400px
      // position relative
      // overflow hidden
      .chart
        // position absolute
        top 0
        left 0 
        width 100%
        // flex 1
        height 400px
        background-color #fff
        border-bottom-left-radius 5px
        border-bottom-right-radius 5px
        div
          width 100%
          height 100%
</style>