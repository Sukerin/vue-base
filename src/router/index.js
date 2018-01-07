import Vue from 'vue'
import Router from 'vue-router'
import ProList from '../page/productList.vue'
import luckyTurntable from '../components/lucky turntable/Lucky_Turntable.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/luckyTurntable', component: luckyTurntable },

  ]
})
