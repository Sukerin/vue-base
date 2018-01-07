<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <!--<v-layout justify-center align-center>-->
        <!--<v-tooltip right>-->
        <!--<v-btn icon large :href="source" target="_blank" slot="activator">-->
        <!--<v-icon large>code</v-icon>-->
        <!--</v-btn>-->
        <!--<span>Source</span>-->
        <!--</v-tooltip>-->
        <!--</v-layout>-->
        <router-view>
          <v-container fluid></v-container>
        </router-view>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>


<!--<template>-->
<!--<div>-->
<!--<lucky-turntable></lucky-turntable>-->
<!--<div>-->
<!--<router-view></router-view>-->
<!--</div>-->
<!--</div>-->
<!--</template>-->
<!--<script>-->
<!--import luckyTurntable from './components/lucky turntable/Lucky_Turntable.vue'-->
<!--export default {-->
<!--name: 'app',-->
<!--data () {-->
<!--return {-->
<!--keyword: this.$route.query.keyword ? this.$route.query.keyword : '',-->
<!--pageNo: '1'-->
<!--}-->
<!--},-->
<!--methods: {-->
<!--enterToProductList: function () {-->
<!--this.$router.push({path: '/list', query: {keyword: this.keyword}})-->
<!--}-->
<!--},-->
<!--components:{luckyTurntable},-->

<!--}-->
<!--</script>-->

