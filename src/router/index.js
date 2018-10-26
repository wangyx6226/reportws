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
    // redirect: '/main', //重定向
    alias:'/login', //别名：当用访问/login时，url保持/login,路由匹配/
    component: Login,
    name: 'login', //命名路由，可以通过name属性进行路由跳转，可有可无
  }, 
  {
    path: '/main',
    alias: '/home',
    component: Home,
    name: 'home'
    // props: true, //设置为true，route.params将被设置为组件属性
    // props: {
    //   name: 3333,
    //   age: 555
    // }
  },
  // {
  //   path: '/404',
  //   component: to404,
  //   name: '404',
  //   hidden: true
  // }
]

let router = new Router({
  // mode: 'history',
  routes,
  //滚动行为：定义导航时页面位置
  // scrollBehavior(to, from, savePosition) {
  //   return {x: 0, y: 0}
  // }
})

//全局导航守卫函数
// router.beforeEach((to, from, next) => {
//   console.log(`即将进入${to.path}路径`)
//   next()
// })


export default router
