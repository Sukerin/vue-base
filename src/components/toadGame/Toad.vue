<template>
  <div>
    <img :src=imagePath>
  </div>
</template>
<script>
  import  utils from './utils';
  import { mapState, mapActions } from 'vuex'
  export default{
    data(){
      return {
        imagePath: new Image(),
        positionX: 20,
        positionY: 20,
        speed: 10,
        position: {
          positionX: this.positionX,
          positionY: this.positionY,
//          this.positionY,
        },
        moveX:{

        },
      }
    },
    props: {
      path: {
        default: '/static/images/toad.jpg',
        type: String,
      }
    },
    computed: {
      ...mapState({
        // 箭头函数可使代码更简练
        gameWidth: state => state.gameWidth,
        gameHeight: state => state.gameHeight,

//        // 传字符串参数 'count' 等同于 `state => state.count`
//        countAlias: 'count',
//
//        // 为了能够使用 `this` 获取局部状态，必须使用常规函数
//        countPlusLocalState (state) {
//          return state.count + this.localCount
//        }
      }),
    },

    methods: {
      isOutOfGame:function (moveX) {
         let returnFlag;
        if(this.positionX>this.gameWidth||this.positionX<0) returnFlag= true;
        if(this.positionY>this.gameHeight||this.positionY<0) returnFlag= true;
        if(this.moveX[moveX]||this.moveX[moveX]===true) returnFlag= false;
        return returnFlag;
      },
      moveRight: function () {
        if(this.isOutOfGame("moveRight")) {
          this.moveX["moveRight"]=false;
          return;
        }
        this.positionX += 10
      },
      moveLeft: function () {
        if(this.isOutOfGame("moveLeft")) {
          this.moveX["moveLeft"]=false;
          return;
        }
        this.positionX -= 10
      },

      moveUp: function () {
        if(this.isOutOfGame("moveUp")) {
          this.moveX["moveUp"]=false;
          return;
        }
        this.positionY -= 10
      },
      moveDown: function () {
        if(this.isOutOfGame("moveDown")) {
          this.moveX["moveDown"]=false;
          return;
        }
        this.positionY += 10
      },

    },
    mounted(){
      this.image = utils.imageFromPath(this.path)
    },
  }
</script>
