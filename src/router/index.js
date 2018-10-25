import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 引入组件
import Login from '../views/Login'
import Home from '../views/Home'
// import { join } from 'path';

const routes = [
  {
    path: '/',
    component: Login,
    name: 'login', //命名路由，可以通过name属性进行路由跳转，可有可无
    hidden: true
  }, 
  {
    path: '/main',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/user',
  //   components: {
  //     default: Login,
  //     a: join
  //   }
  // }
  // {
  //   path: '/404',
  //   component: to404,
  //   name: '404',
  //   hidden: true
  // }
]

export default new Router({
  // mode: 'history',
  routes
})
 