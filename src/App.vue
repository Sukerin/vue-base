<template>
  <div>
    <lucky-turntable></lucky-turntable>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import luckyTurntable from './components/lucky turntable/Lucky_Turntable.vue'
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
    },
    components:{luckyTurntable},

  }
</script>

