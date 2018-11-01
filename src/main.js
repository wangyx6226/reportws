import Vue from 'vue'
import store from '@/store'
import router from '@/router'
import ElementUI from 'element-ui'
import i18n from '@/lang' //国际化插件
import VueTaber from 'vue-tabs' 
import tabs from './router/tabs-map'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import echarts from 'echarts'
import Table from 'vue-antd-ui/lib/table'
import App from './App.vue'

//CSS
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/stylus/index.styl'
import '@/styles/vue-tabs.css'
import 'vue-good-table/dist/vue-good-table.css'
import 'vue-antd-ui/dist/antd.css'

Vue.config.performance = true //性能追踪

Vue.use(ElementUI) //UI库
Vue.use(VueTaber) //tab插件
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false //阻止vue在启动时生成生产提示

const taber = new VueTaber({
  tabs
})

Vue.component(Table.name, Table) //全局注册antd.table组件


/* 自动全局注册基础组件 */
const requireComponent = require.context(
  './components', //组件目录相对路径
  false, //是否查询子目录
  /Base[A-Z]\w+\.(vue|js)$/ //匹配基础组件文件正则
)
requireComponent.keys().forEach(fileName => {
  //获取组件配置
  const componentConfig = requireComponent(fileName)

  //获取组件PascalCase命名
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))  
  )

  //全局注册组件
  Vue.component(componentName, componentConfig.default || componentConfig)
})


/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  taber,
  store,
  render: h => h(App)
}).$mount('#app')

