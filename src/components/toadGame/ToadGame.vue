<template>
  <v-layout justify-center align-center>
    <div>
      <canvas ref="gameCanvas" :width=gameWidth :height=gameHeight>

      </canvas>
    </div>
  </v-layout>
</template>

<script>
  import Toad from './toad';

  export default{
    data(){
      return {
        fps: 60,
        isStart: false,
        canvasContext: null,
        canvas:null,
        actions: {},
        actionKeys: {},
        toad:{},
      }
    },
    props: {
      gameWidth: {
        default: 400
      },
      gameHeight: {
        default: 200
      },
    },
    methods: {
      startGame: function() {
        this.isStart = true;
        let that=this;
        setInterval(function() {

          let keys = Object.keys(that.actions);
          for (let i = 0; i < keys.length; i++) {
            if (that.actionKeys[keys[i]]) {
              that.actions[keys[i]]();
            }
          }
//debugger
          that.canvasContext.clearRect(0,0,that.canvas.width,that.canvas.height);
          that.canvasContext.drawImage(that.toad.image, that.toad.positionX, that.toad.positionY, 20, 20);

        }, 1000 / this.fps)
      },
      endGame: function() {
        this.isStart = false;
      },
//      registerAction: (key, actionFunc) => {
//        this.actions[key.toString()] = actionFunc;
////            this.actions.set(key,actionFunc)
//      },
     registerAction: function (keyy, actionFunc){
        this.actions[keyy.toString()] = actionFunc;
//            this.actions.set(key,actionFunc)
      },

    },
    mounted:function () {
      window.addEventListener('keydown', (event) => {
        this.actionKeys[event.keyCode] = true;
      })
      window.addEventListener('keyup', (event) => {
        this.actionKeys[event.keyCode] = false;
      })

      this.canvas = this.$refs.gameCanvas;
      this.canvasContext = this.canvas.getContext('2d');
      this.toad = Toad('/static/images/toad.jpg');

      this.toad.image.onload = () => {
        this.canvasContext.drawImage(this.toad.image, this.toad.positionX, this.toad.positionY, 20, 20);
      }
      this.registerAction(65 , this.toad.moveLeft);
      this.registerAction(68 , this.toad.moveRight);
      this.startGame();
    },

  }
</script>
<style scoped>
  canvas {
    border: 1px darkkhaki solid;
  }

</style>
