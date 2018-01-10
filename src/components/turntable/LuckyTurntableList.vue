<template>
  <v-layout justify-center align-center>
    <div>
      <v-btn color="blue" block v-if="!isShowAlert"  @click="clickAll"><v-icon left dark>mouse</v-icon>Let's click ! ALL run!</v-btn>
      <v-alert type="warning" dismissible v-model="isShowAlert" transition="scale-transition">{{combinedNotice}}
      </v-alert>
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
  import LuckyTurntableItem from "../turntable/LuckyTurntableItem.vue"

  import fetch from "../../util/fetch"

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
        if (this.combinedNotice === "今日菜谱：") {
          this.combinedNotice = this.combinedNotice + notice;
        } else {
          this.combinedNotice = this.combinedNotice + "、" + notice;
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
//      /rest/meal/search/price?price=77.8
      fetch.byGet("/rest/meal/search/price", {price: 77.8}).then((response) => {
          this.foodRawData = response.mealName || "嘻,嘻,哈,哈,过,大,年";
        },
        ((error) => {
          this.foodRawData =  "嘻,嘻,哈,哈,过,大,年";
        })
      )
    },
    components: {LuckyTurntableItem},

  }
</script>


