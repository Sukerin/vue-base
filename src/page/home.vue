<template>

  <v-layout
    justify-center
    align-center
  >
    <v-flex text-xs-center>
      <v-card>
        <v-img
          src="./static/jiyuyouyu.png"
          aspect-ratio="0.85"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-1">鲫鱼&鱿鱼</h3>
            <div>鲫鱼&鱿鱼，湖北武汉污夹鳝性商品特产，得其一则得其二。鲫吊前庭，鱿插后庭，便可享东方极乐。</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn large block color="orange" @click="gotoQuestionPage">点击立即拥有</v-btn>
        </v-card-actions>
      </v-card>

    </v-flex>
  </v-layout>

</template>

<script>
  export default {
    methods: {
      gotoQuestionPage: function (event) {
        this.$router.push({path: '/question'})
      }
    }
  }
</script>
