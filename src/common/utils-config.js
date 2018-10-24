/*  
* 公共图表配置
*/

// export const commonChartOptions = {
//   title: {
//     text: titlemap ? this.$t(`langChartTitle.${titlemap}`) : ''
//   },
//   legend: {
//     type: 'scroll',
//     left: '15%',
//     right: '10%',
//     data: legend || []
//   },
//   tooltip: { //提示框
//     formatter: formatter || '{b}: {c}'
//   },
//   xAxis: {
//     type: 'category',
//     axisLabel: {
//       interval: 0,
//       rotate: 30
//     },
//     boundaryGap: false,
//     data: xdata || []
//   },
//   yAxis: {
//     name: yname ? this.$t(`langChartTitle.${yname}`) : '',
//     axisLabel: {
//       interval: 1
//     },
//   },
//   toolBox: { //工具栏
//     right:'50px',
//     feature: {
//       saveAsImage: {  //保存为图片
//         show: true,
//         title: this.$t('langCommon.saveAsImage'),
//         name: menuname ? `${this.$t('langMenuMap.'+ menuname)}/${new Date()}`: 
//               (titlemap ? this.$t(`langChartTitle.${titlemap}`) : '')
//       }
//     }
//   },
//   series: series || [],
// }