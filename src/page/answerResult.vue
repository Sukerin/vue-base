<template>

  <v-layout
    justify-center
    align-center
  >
    <v-flex text-xs-center>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{this.$route.query.message}}</h3>
            <!--<div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>-->
            <div v-if="this.$route.query.isSuc">新世界大门为你敞开。</div>
            <div v-if="!this.$route.query.isSuc">请当一个安静的傻屌。</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <!--<v-btn flat color="orange">Share</v-btn>-->
          <v-btn color="green" @click="goNext">
            <template v-if="this.$route.query.isSuc">
              前往天堂
            </template>
            <template v-if="!this.$route.query.isSuc">
              回到过去
            </template>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>

</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      goNext: function () {
        if (this.$route.query.isSuc) {
          this.$router.push({path: '/v2ray'})
        } else {
          this.$router.push({path: '/question'})
        }
      }
    }
//    ,
//    props: {
//      query: {
//        type: Object
//      }
//    }
  }
</script>
