import Vue from 'vue'
import Router from 'vue-router'
// import Login from '../components/login/login.vue'
// @ 自动找src文件夹
import Login from '@/components/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    }
  ]
})
