import Vue from 'vue'
import Router from 'vue-router'

import LuckyTurntableList from '../components/turntable/LuckyTurntableList.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/LuckyTurntableList', component: LuckyTurntableList },

  ]
})
