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
        moveX: {
          "moveRight": true,
          "moveLeft": true,
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
          gameWidth: state => state.toad.gameWidth,
          gameHeight: state => state.toad.gameHeight,
        }
      ),
    },

    methods: {
      resetMoveX:function () {
        let keys=Object.keys(this.moveX);
        for(let i=0;i<keys.length;i++){
          this.moveX[keys[i]]=true;
        }
      },
      setMoveX: function (moveX) {
        this.resetMoveX();
        this.moveX[moveX] = !(this.positionX > this.gameWidth || this.positionX < 0 ||
        this.positionY > this.gameHeight || this.positionY < 0);

      },
      moveRight: function () {
        if (this.moveX["moveRight"]) {
          this.positionX += 10
        }
        this.setMoveX("moveRight");

      },
      moveLeft: function () {
        if (this.moveX["moveLeft"]) {
          this.positionX -= 10
        }
        this.setMoveX("moveLeft");
      },

      moveUp: function () {
        if (this.moveX["moveUp"]) {
          this.positionY -= 10

        }
        this.setMoveX("moveUp");
      },
      moveDown: function () {
        if (this.moveX["moveDown"]) {
          this.positionY += 10
        }
        this.setMoveX("moveDown");
      },

    },
    mounted(){
      this.image = utils.imageFromPath(this.path)
    },
  }
</script>
