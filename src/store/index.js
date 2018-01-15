import Vue from 'vue'
import Vuex from 'vuex'
import toad from './modules/toadGame'


Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    toad,
  },
})
