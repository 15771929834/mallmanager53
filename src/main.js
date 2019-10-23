// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ELEMENT from 'element-ui'
// 不要忘记引入样式文件
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/reset.css'
import router from './router'
import MyServerHttp from '@/plugins/http.js'

Vue.config.productionTip = false

// 使用element插件
Vue.use(ELEMENT)
Vue.use(MyServerHttp)

/* eslint-disable no-new */
new Vue({

  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
