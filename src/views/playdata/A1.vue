<template>
  <div class="container">

    <base-title :title="name"></base-title>

    <base-form-wrap :todos="todos">
      <el-form ref="form" :model="form" :inline="true" size="mini">
        <el-form-item label="供应商">
          <combo-grid type="sp" v-model="spid"></combo-grid>
        </el-form-item>
        <el-form-item label="">
           <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
      </el-form>
    </base-form-wrap>

   
    <button @click="loaddata">加载数据</button>
    <chart-view :charts="chartTypes" :menu="name"></chart-view>

    <div style="height: 500px"></div>

  </div>
</template>

<script>
  import { drawChartsMixin } from '@/common/uitls-mixin'
  import ChartView from '@/components/ComChartView'
  import ComboGrid from '@/components/ComComboGrid/index'

  export default {
    // name: '渠道商播放总表',

    mixins: [drawChartsMixin],

    components: {
      ChartView,
      ComboGrid,
    },

    data() {
      return {
        value1:'',
        todos: [
          {
            id: 1,
            complete: true,
            text: '吃饭'
          },
          {
            id: 2,
            complete: true,
            text: '睡觉'
          },
          {
            id: 3,
            complete: false,
            text: '打豆豆'
          },
          {
            id: 4,
            complete: true,
            text: '海'
          },
        ],
        name: 'A_Song_PlayTotalDSP',
        chartTypes: ['line'],
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
        spid: '',
        form: {
          // spid: ''
        }
      }
    },

    computed: {
      lang() {
        return this.$store.state.langrage
      }
    },

    watch: {
      spid(val) {
        console.log('spid change')
        console.log(val)
      }
      // form(val) {
      //   console.log(555555)
      // }
    }, 

    mounted() {
      console.log('重新创建')
      //初始化chart、grid
      this.drawLineChart(this.lineOption)
      // this.drawPieChart(this.pieOption)
      // this.drawBarChart(this.barOption)

    },

    methods: {
      loaddata() {
        this.lineOption.data = [820, 932, 901, 934, 1290, 1330, 1320]
        this.lineOption.xdata = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
         this.drawLineChart(this.lineOption)
      }
    },

    
  }
</script>

<style lang="stylus" scoped> 
</style>
