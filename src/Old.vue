<template>
  <div>
    <div class="touchweb-com_header header_flex search_show" v-on:keyup.enter='enterToProductList'>

      <a v-on:click="$router.go(-1)" class="left icon-back" style="display: block"></a>
      <div class="search_wrap">

        <div class="search_box focus">
          <input class="search_txt" v-model="keyword" type="search" name="text" placeholder="搜索你想找的商品">
        </div>
        <router-link :to="{path: '/list', query: {keyword: keyword}}" class="btn_search">搜索</router-link>
      </div>

    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data () {
      return {
        keyword: this.$route.query.keyword ? this.$route.query.keyword : '',
        pageNo: '1'
      }
    },
    methods: {
      enterToProductList: function () {
        this.$router.push({path: '/list', query: {keyword: this.keyword}})
      }
    }
  }
</script>

<style>
  /*@import "./assets/public.css";*/
  /*@import "./assets/searchList.css";*/

</style>
