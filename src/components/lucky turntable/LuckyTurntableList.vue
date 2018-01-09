<template>
  <v-layout justify-center align-center>
  <div>
    <v-btn color="blue" v-if="!isShowAlert" block @click="clickAll">GO!ALL!</v-btn>
    <v-alert type="warning" dismissible v-model="isShowAlert" transition="scale-transition">{{combinedNotice}}</v-alert>
    <!--<lucky-turntable-item ref="turntable" :sliceInfoList="foodItemList" @noticeEmit="combineNotice">-->
    <!--</lucky-turntable-item>-->
    <div v-for="foodItemList in foodCategoryList">
      <lucky-turntable-item ref="turntable" :sliceInfoList="foodItemList" @noticeEmit="combineNotice">
      </lucky-turntable-item>
    </div>
  </div>
  </v-layout>
</template>

<script>
  import LuckyTurntableItem from "../lucky turntable/LuckyTurntableItem.vue"

  export default{

    data(){
      return {
        isShowAlert: false,
        foodRawData: null,
        combinedNotice: null,
      }
    },
    computed: {
      foodCategoryList: function () {
        if (!this.foodRawData) return
        let foodTextList = this.foodRawData.split(";");
        let foodList = [];
        for (let i = 0; i < foodTextList.length; i++) {
          let foodText = foodTextList[i];
          foodList[i] = foodText.split(",")
        }
        return foodList;
      }
    },
    methods: {
      combineNotice: function (notice) {
        this.isShowAlert = true;
        if(this.combinedNotice==="今日菜谱："){
          this.combinedNotice = this.combinedNotice+ notice;
        }else {
          this.combinedNotice = this.combinedNotice+"、" + notice;
        }
      },
      clickAll: function () {
        this.init();
        for (let i = 0; i < this.$refs.turntable.length; i++) {
          this.$refs.turntable[i].btnClick();
        }
      },
      init(){
        this.isShowAlert = false;
        this.combinedNotice = "今日菜谱：";
      },

    },
    mounted(){
      this.init();
      this.foodRawData = "西瓜,黄瓜,冬瓜,苦瓜,甜瓜,南瓜,地瓜;鸡肉,牛肉,猪肉";
    },
    components: {LuckyTurntableItem},

  }
</script>


