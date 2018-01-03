import Vue from 'vue'
import Router from 'vue-router'
import ProList from '../page/productList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      // name: 'Hello',
      component: ProList,
      props: (route) => (
        {
          query: (route.query)
        }
      )
    }
  ]
})
