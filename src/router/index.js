import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/views/Home'

import { playdata } from './menu-map'


const routes = [
  {
    path: '/login',
    component: () => import('@/views/Login'),
  }, 
  {
    path: '',
    component: Home,
    redirect: 'welcome', //重定向
    children: [
      {
        path: 'welcome',  
        component: () => import('@/views/pages/welcome'),
      }
    ]
  },
  playdata,
  // {
  //   path: '/operation'
  // },
  // {
  //   path: '/top'
  // },
  // {
  //   path: '/finance'
  // },
  // {
  //   path: '/log'
  // },
  // {
  //   path: '/log'
  // },
  // {
  //   path: '/form'
  // },
  // {
  //   path: '/system'
  // },
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
