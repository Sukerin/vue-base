// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'mint-ui/lib/spinner/style.css'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(ElementUI)

// axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
