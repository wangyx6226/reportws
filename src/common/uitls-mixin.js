import {
  $UGetCacheItem,
  USER_INFO_KEY
} from './utils-storage'

export const userValidateMixin = {
  methods: {
    userValidate() {
      let userInfo = $UGetCacheItem(USER_INFO_KEY)
      let loginDate = userInfo && (userInfo.logindate || userInfo.loginDate) || ''
      loginDate = loginDate && loginDate.replace(/-/g, '/')
      let logout = !userInfo || !userInfo.userID || !loginDate || (Date.now() - new Date(loginDate) > 3600000)
      if(logout) {
        this.$alert(
          this.$t('langCommon.timeoutWarning'),
          this.$t('langCommon.hintTitle'),
          {
            confirmButtonText: this.$t('langCommon.confirmBtnText'),
            type: 'warning',
            showClose: false,
            callback: action => {
              this.$store.dispatch('logOut')
              this.$router.push('/login')
            }
          }
        )
        return false
      }
      return true
    }
  }
}

export const drawChartsMixin = {

  mounted() {
    this.drowCharts()
    this.loadGrid()
  },
  
  methods:{
    /**
     * 绘制线形图
     * @param {*} params 参数对象
     * {
     *  id: String | 元素id
     *  series: Array | 数据
     *  titlemap: String | 标题map
     *   
     * }
     */
    drawLineChart( params = {}) {
      let {
        data, 
        title,
        legend,
        xdata,
        yname,
        formatter,
        menumap,
        others,
      } = params

      console.log('画图')

      let myLineChart = this.$echarts.init(document.getElementById('lineChart'))
      let options = {
        title: { 
          text: title ? this.$t(`langChartTitle.${title}`) : '' 
        },
        legend: {
          type: 'scroll',
          left: '15%',
          right: '10%',
          data: legend || []
        },
        tooltip: { //提示框
          formatter: formatter || '{b}: {c}'
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          boundaryGap: false,
          data: xdata || []
        },
        yAxis: {
          name: yname ? this.$t(`langCommon.${yname}`) : '',
          axisLabel: {
            interval: 1
          },
        },
        toolBox: { //工具栏
          right:'50px',
          feature: {
            saveAsImage: {  //保存为图片
              show: true,
              title: this.$t('langCommon.saveAsImage'),
              name: menumap ? `${this.$t('langMenuMap.'+ menumap)}/${new Date()}`: 
                    (title ? this.$t(`langChartTitle.${title}`) : '')
            }
          }
        },
        series: [
          {
            type: 'line',
            data: data || []
          }
        ],
      }
      if(others) {
        options = Object.assign({},options,others)
      }
      myLineChart.setOption(options, true)
      window.onresize = myLineChart.resize //自适应宽度
    },

    loadGrid() {
      let {
        gridData,
        gridColumns
      } = this
    }



  }
}