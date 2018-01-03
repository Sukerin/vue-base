<template>
  <div class="touchweb-com_searchListBox">
    <div style=" width:100px; margin:0 auto;  ">
      <Spinner v-if="loading&&fixedQuery.pageNo === 1" :size="60" color="#26a2ff" :type="2"></Spinner>
    </div>
    <ul v-infinite-scroll="search"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
        infinite-scroll-immediate-check="false">
      <product v-for="pro in list" v-bind:product="pro" v-bind:key="pro.wareid">
      </product>
      <div style=" width:20px; margin:0 auto;  ">
        <Spinner v-show="loading&&fixedQuery.pageNo !== 1" :size="20" color="#26a2ff" type="snake"></Spinner>
      </div>
    </ul>
  </div>
</template>

<script>
  import product from '../components/productListItem.vue'
  import {Toast, Spinner, InfiniteScroll} from 'mint-ui'
  import fetch from '../util/fetch'
  import Vue from 'vue'
  Vue.use(InfiniteScroll)

  export default{
    name: 'ProductList',
    data () {
      return {
        list: [],
        loading: false
      }
    },
    props: {
      query: {
        type: Object
      }
    },
    watch: {
      '$route' (to, from) {
        this.search()
      }
    },
    created: function () {
      this.search()
    },
    computed: {
      fixedQuery: function () {
        return {
          keyword: this.query.keyword,
          pageNo: this.query.pageNo ? this.query.pageNo : 1
        }
      }
    },
    methods: {
      search: function () {
        this.loading = true
        if (this.fixedQuery.pageNo === 1) {
          this.list = []
        }
        fetch.byGet('/search/list', this.fixedQuery).then((res) => {
          this.loading = false
          let productList = res.Paragraph
          productList[9].Content.imageurl = 'https://cn.vuejs.org/images/logo.png'
          if (this.fixedQuery.pageNo === 1) {
            this.list = productList || []
          } else {
            this.list = this.list.concat(productList || [])
          }
          this.fixedQuery.pageNo++
        }).catch(err => {
          this.loading = false
          Toast({
            message: err.message,
            position: 'top',
            duration: 5000
          })
        })
      }
    },
    components: {
      product, Spinner
    }

  }
</script>
