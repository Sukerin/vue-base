<template>
  <div>

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
