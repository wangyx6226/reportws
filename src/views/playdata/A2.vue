<template>
  <div class="container">

    <base-title :title="name"></base-title>
    
    <chart-view :charts="chartTypes" :menu="name"></chart-view>

  </div>
</template>

<script>
  import { drawChartsMixin } from '@/common/uitls-mixin'
  import ChartView from '@/components/ComChartView'

  export default {
    mixins: [drawChartsMixin],
    components: {
      ChartView,
    },
    
    data() {
      return {
        name: 'A_Song_PlayDetailDSP',
        chartTypes: ['line','bar'],
        //默认图表配置
        lineOption: {
          title: 'A_Song_PlayTotalDSP_lineTitle',
          data: [],
          legend: [],
          yname: 'unitTimes'
        },
        barOption: {
          title: 'A_Song_PlayTotalDSP_barTitle',
          data: [],
          legend: [],
          yname: 'unitTimes'
        },
        pieOption: {
          title: 'A_Song_PlayTotalDSP_pieTitle',
          data: [],
          legend: [],
          yname: 'unitTimes'
        },
      }
    },

    computed: {
      lang() {
        return this.$store.state.langrage
      }
    },

    watch: {
      lang() {
        //判断有哪个实例就重新执行某个函数
        // this.drawLineChart(this.lineOption)
        // this.loadGrid()
      }
    }, 

    mounted() {
      // //初始化chart、grid
      this.drawLineChart(this.lineOption)
      // this.drawPieChart(this.pieOption)
      this.drawBarChart(this.barOption)

    },

    methods: {
    },

    
  }
</script>

<style lang="stylus" scoped> 
  // .container
  //   background-color #f0f2f5
  //   width 100%
  //   padding 15px
  //   overflow hidden
</style>
