<template>
  <div>
    <v-btn  color="blue-grey" block @click="clickAll">GO!ALL!</v-btn>
    <v-alert type="warning" v-model="isShowAlert">{{combinedNotice}}</v-alert>
    <div v-for="foodItemList in foodCategoryList">
      <lucky-turntable-item :sliceInfoList="foodItemList" @noticeEmit="combineNotice">
      </lucky-turntable-item>
    </div>
  </div>

</template>

<script>
  import LuckyTurntableItem from "../lucky turntable/LuckyTurntableItem.vue"


  export default{

    data(){
      return {
        isShowAlert: false,
        foodRawData: null,
        combinedNotice:"",
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
    methods:{
      combineNotice:function (notice) {
        this.isShowAlert=true;
        return this.combinedNotice=this.combinedNotice+notice;
      },
      clickAll:function () {
        this.combinedNotice="";
        for(let i=0;i<this.$children.length;i++){
          if(this.$children[i].$el.className==="turnplate_box"){
            this.$children[i].btnClick();
          }
        }
      }

    },
    mounted(){
      this.foodRawData = "西瓜,黄瓜,冬瓜;鸡肉,牛肉,猪肉";
//      debugger
//      console.log(this.$children)
    },
    components: {LuckyTurntableItem},

  }
</script>


<!--西瓜,黄瓜,冬瓜;鸡肉,牛肉,猪肉-->
