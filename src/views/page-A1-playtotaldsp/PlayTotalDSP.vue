<template>
  <div class="container" id="playDsp">

    <base-title title="A_Song_PlayTotalDSP"></base-title>

    <chart-view :charts="chartTypes"></chart-view>

  </div>
</template>

<script>
  import { drawChartsMixin } from '../../common/uitls-mixin'
  import ChartView from '../../components/CommonChartView'

  // const columns = [
  //   {
  //     title: '日期(Date Range)',
  //     dataIndex: 'date',
  //     key: 'date',
  //     width: 100,
  //   }, {
  //     title: '渠道商',
  //     children: [
  //       {
  //         title: '在线播放',
  //         dataIndex: 'online',
  //         key: 'online',
  //         width: 100
  //       }, 
  //       {
  //         title: '下载播放',
  //         dataIndex: 'down',
  //         key: 'down',
  //         width: 100
  //       }, 
  //       {
  //         title: '缓存播放',
  //         dataIndex: 'huancun',
  //         key: 'huancun',
  //         width: 100
  //       }, 
  //       {
  //         title: '总数',
  //         dataIndex: 'total',
  //         key: 'total',
  //         width: 100
  //       }, 
  //     ]
  //   }, {
  //     title: '总数',
  //     children: [
  //       {
  //         title: '在线播放',
  //         dataIndex: 'tonline',
  //         key: 'tonline',
  //         width: 100
  //       }, 
  //       {
  //         title: '下载播放',
  //         dataIndex: 'tdown',
  //         key: 'tdown',
  //         width: 100
  //       }, 
  //       {
  //         title: '缓存播放',
  //         dataIndex: 'tthuancun',
  //         key: 'tthuancun',
  //         width: 100
  //       }, 
  //       {
  //         title: '总数',
  //         dataIndex: 'ttotal',
  //         key: 'ttotal',
  //         width: 100
  //       }, 
  //     ]
  //   }
  // ]

  const data = []

  export default {
    mixins: [drawChartsMixin],

    data() {
      return {
        chartTypes: ['line','bar','pie'],
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
      //初始化chart、grid
      this.drawLineChart(this.lineOption)
      this.drawPieChart(this.pieOption)
      this.drawBarChart(this.barOption)

    },

    methods: {
    },

    components: {
      ChartView,
    }
  }
</script>

<style lang="stylus" scoped> 
  .container
    background-color #f0f2f5
    width 100%
    padding 15px
    overflow hidden
</style>
