<template>
  <div class="container" id="playDsp">
    <base-title title="A_Song_PlayTotalDSP" name="222" age="43"></base-title>
    <!-- <base-combo></base-combo> -->
    <div id="lineChart" :style="chartStyle"></div>
    <div class="grid_wrapper">
      <a-table 
        :columns="gridData.columns"
        :dataSource="gridData.data"
        bordered
        size="small"
        ref="grid"
      />
    </div>
  </div>
</template>

<script>
  import { drawChartsMixin } from '../../common/uitls-mixin'

  const columns = [
    {
      title: '日期(Date Range)',
      dataIndex: 'date',
      key: 'date',
      width: 100,
    }, {
      title: '渠道商',
      children: [
        {
          title: '在线播放',
          dataIndex: 'online',
          key: 'online',
          width: 100
        }, 
        {
          title: '下载播放',
          dataIndex: 'down',
          key: 'down',
          width: 100
        }, 
        {
          title: '缓存播放',
          dataIndex: 'huancun',
          key: 'huancun',
          width: 100
        }, 
        {
          title: '总数',
          dataIndex: 'total',
          key: 'total',
          width: 100
        }, 
      ]
    }, {
      title: '总数',
      children: [
        {
          title: '在线播放',
          dataIndex: 'tonline',
          key: 'tonline',
          width: 100
        }, 
        {
          title: '下载播放',
          dataIndex: 'tdown',
          key: 'tdown',
          width: 100
        }, 
        {
          title: '缓存播放',
          dataIndex: 'tthuancun',
          key: 'tthuancun',
          width: 100
        }, 
        {
          title: '总数',
          dataIndex: 'ttotal',
          key: 'ttotal',
          width: 100
        }, 
      ]
    }
  ]

  const data = []

  export default {
    mixins: [drawChartsMixin],
    data() {
      return {
        chartStyle: {
          height: '400px',
          width: '100%',
          // background: 'pink'
        },
        lineOption: {
          title: ' A1_PlayTotalDSP_lineTitle',
          data: [],
          legend: [], 
          yname: 'unitTimes'
        },
        gridData: {
          columns: [],
          data: []
        },
        defaultColumns: [
            {
              title: '日期<br/>Date Rangee',
              dataIndex: 'date',
              key: 'date',
              width: 100,
            }, {
              title: '渠道商',
              children: [
                {
                  title: '在线播放',
                  dataIndex: 'online',
                  key: 'online',
                  width: 100
                }, 
                {
                  title: '下载播放',
                  dataIndex: 'down',
                  key: 'down',
                  width: 100
                }, 
                {
                  title: '缓存播放',
                  dataIndex: 'huancun',
                  key: 'huancun',
                  width: 100
                }, 
                {
                  title: '总数',
                  dataIndex: 'total',
                  key: 'total',
                  width: 100
                }, 
              ]
            }, {
              title: '总数',
              children: [
                {
                  title: '在线播放',
                  dataIndex: 'tonline',
                  key: 'tonline',
                  width: 100
                }, 
                {
                  title: '下载播放',
                  dataIndex: 'tdown',
                  key: 'tdown',
                  width: 100
                }, 
                {
                  title: '缓存播放',
                  dataIndex: 'tthuancun',
                  key: 'tthuancun',
                  width: 100
                }, 
                {
                  title: '总数',
                  dataIndex: 'ttotal',
                  key: 'ttotal',
                  width: 100
                }, 
              ]
            }
        ],
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
        this.drawLineChart(this.lineOption)
        this.loadGrid()
      }
    }, 

    mounted() {
      // console.log(this.$attrs)s
      this.drawLineChart(this.lineOption)
      this.loadGrid()
    },

    methods: {
      drawChart() {
        
      },
      loadGrid() {
        
      }
    }
  }
</script>

<style lang="stylus" scoped> 
  .container
    width 100%
    // background-color #fafafa
    .grid_wrapper
      height 300px
</style>
