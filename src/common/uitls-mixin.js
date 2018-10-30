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
    // this.drowCharts()
    // this.loadGrid()
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
      if (others) {
        options = Object.assign({},options,others)
      }
      myLineChart.setOption(options, true)
      window.onresize = myLineChart.resize //自适应宽度
    },

    drawPieChart( params = {}) {
      let {
        data, 
        title,
        legend,
        menumap,
        others,
      } = params

      let myPieChart = this.$echarts.init(document.getElementById('pieChart'))
      let options = {
        title: {
          text: title ? this.$t(`langChartTitle.${title}`) : ''
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          x: 'right',
          data: legend,
          padding: [45, 0, 0, 0]
        },
        toolbox: {
            show: true,
            right: '80px',
            feature: {
                mark: {
                    show: true
                },
                magicType: {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 1548
                        }
                    }
                },
                saveAsImage: {
                    show: true,
                    title: this.$t('langCommon.saveAsImage'),
                    name:  menumap ? `${this.$t('langMenuMap.'+ menumap)}/${new Date()}`: 
                    (title ? this.$t(`langChartTitle.${title}`) : '')
                }
            }
        },
        calculable: true,
        color: [
            '#00FFFF', '#76EE00', '#8B0A50',
            '#CDCD00', '#FFD700', '#32CD32',
            '#c23531', '#2f4554', '#61a0a8',
            '#d48265', '#91c7ae', '#749f83',
            '#ca8622', '#bda29a', '#6e7074',
            '#546570', '#c4ccd3', '#A52A2A',
            '#00FF00', '#4B0082', '#F08080',
        ],
        series: [{
            name: title,
            type: 'pie',
            radius: ['50%', '70%'], //环形
            itemStyle: {
                normal: {
                  label: {
                    show: false,
                    position: 'center'
                  },
                  labelLine: {
                    show: false
                  }
                },
                emphasis: {
                  label: {
                      show: true,
                      position: 'center',
                      textStyle: {
                          fontSize: '40',
                          fontWeight: 'bold'
                      }
                  }
                }
            },
            data: data
        }]
      }
      if (others) {
        options = Object.assign(options, others)
      }
      myPieChart.setOption(options, true)
      window.onresize = myPieChart.resize
    },

    drawBarChart( params = {}) {
      let {
        data, 
        title,
        yname,
        menumap,
        others,
      } = params
      let myBarChart = this.$echarts.init(document.getElementById('barChart'))
      let options = {
        title: {
            text: title ? this.$t(`langChartTitle.${title}`) : ''
        },
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            show: true,
            right: '80px',
            feature: {
                saveAsImage: {
                    show: true,
                    title: this.$t('langCommon.saveAsImage'),
                    //只导出英文标题？或两种语言
                    name: menumap ? `${this.$t('langMenuMap.'+ menumap)}/${new Date()}`: 
                    (title ? this.$t(`langChartTitle.${title}`) : '')
                }
            }
        },
        grid: {
            top: 90,
            left: '1%',
            right: '4%',
            containLabel: true
        },
        calculable: true,
        xAxis: [{
            type: 'value',
            axisLabel: {
                interval: 0,
                rotate: 30
            },
            boundaryGap: [0, 0.01]
        }],
        yAxis: [{
            name: yname,
            type: 'category',
            axisLabel: {
                interval: '{1}'
            },
            data: data,
        }],
        series: [{
            name: '播放次数',
            type: 'bar',
            barWidth: '15px',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'right'
                    },
                    color: function (params) {
                        let colorList = [
                            '#c23531', '#2f4554', '#61a0a8',
                            '#d48265', '#91c7ae', '#749f83',
                            '#ca8622', '#bda29a', '#6e7074',
                            '#546570', '#c4ccd3', '#A52A2A',
                            '#00FF00', '#4B0082', '#F08080'
                        ];
                        return colorList[params.dataIndex] || '#1E90FF';
                    },
                }
            },
            data: data
        }]
      }
      if (others) {
        options = Object.assign({},options,others)
      }
      myBarChart.setOption(options, true)
      window.onresize = myBarChart.resize //自适应宽度
    },
    
    //当查询数据为空时，重置图表和表格
    reviewChart() {

    }



  }
}