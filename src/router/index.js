import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 引入组件
import Login from '../views/Login'
import Home from '../views/Home'

const routes = [
  {
    path: '/login',
    component: Login,
    name: 'login',
    hidden: true
  }, 
  {
    path: '/main',
    component: Home,
  },

  // {
  //   path: '/404',
  //   component: to404,
  //   name: '404',
  //   hidden: true
  // }
]

export default new Router({
  routes
})
 