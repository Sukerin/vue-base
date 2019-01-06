import Vue from 'vue'
import Router from 'vue-router'
import homePage from '../page/home.vue'
import infoPage from '../page/info.vue'
import questionPage from '../page/question.vue'
import answerResultPage from '../page/answerResult.vue'
import v2rayPage from '../page/v2ray.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {
      path: '/home',
      // name: 'Hello',
      component: homePage
      // props: (route) => (
      //   {
      //     query: (route.query)
      //   }
      // )
    },
    {
      path: '/info',
      component: infoPage
    },
    {
      path: '/question',
      component: questionPage
    },
    {
      path: '/result',
      component: answerResultPage
      // ,
      // props: (route) => (
      //   {
      //     query: (route.query)
      //   }
      // )
    },
    {
      path: '/v2ray',
      component: v2rayPage,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
