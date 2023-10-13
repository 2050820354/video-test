import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/styles/base.css'
import '@/styles/reset.css'
import '@/assets/iconfonts/iconfont.css'


// 引入Bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

import axios from 'axios'

// 挂载一个自定义属性$http
Vue.prototype.$http = axios
// 全局配置axios请求根路径(axios.默认配置.请求根路径)
axios.defaults.baseURL = '<http://yufei.shop:3000>'

Vue.config.productionTip = false

Vue.directive('focus', {
  inserted(el) {
    el.focus()
  }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
