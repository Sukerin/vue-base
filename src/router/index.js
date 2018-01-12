import Vue from 'vue'
import Router from 'vue-router'

import LuckyTurntableList from '../components/turntable/LuckyTurntableList.vue'
import ToadGame from '../components/toadGame/ToadGame.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/LuckyTurntableList', component: LuckyTurntableList ,
    },

    {
      path: '/ToadGame', component: ToadGame
    },

  ]
})
