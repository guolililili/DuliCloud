import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login.vue'
import Main from '@/components/main.vue'

// 引入公共样式
import '../assets/css/bootstrap.min.css' 
import '../assets/css/metismenu.min.css' 
import '../assets/css/style.css'
import '../assets/css/icons.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },{
      path: '/Main',
      name: 'Main',
      component: Main
    },{
      path: '/Dashboard',
      name: 'Dashboard',
      component: () => import('@/view/dashboard')
    },{
      path: '/Device',
      name: 'Device',
      component: () => import('@/view/device')
    },{
      path: '/Maintain',
      name: 'Maintain',
      component: () => import('@/view/maintain')
    },{
      path: '/Warning',
      name: 'Warning',
      component: () => import('@/view/warning')
    }
  ]
})
