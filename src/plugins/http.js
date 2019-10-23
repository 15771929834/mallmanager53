import axios from 'axios'

const MyHttpServer = {}

MyHttpServer.install = (Vue) => {
  // 设置基准url
  axios.defaults.baseURL = 'http://api.xiaomadagege.cn:3355/api/private/v1/'
  Vue.prototype.$http = axios
}

export default MyHttpServer
