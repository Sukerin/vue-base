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
        canvasContext:null,

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
      startGame: function () {
        this.isStart = true;
        setInterval(function () {

        }, 1000 / this.fps)
      },
      endGame: function () {
        this.isStart = false;
      },
      registerAction: function (key, actionFunc) {
        this.$refs.gameCanvas.$el.$on('keyDown', function (event) {
          if (event.keyCode = key) {
            actionFunc();
          }
        })
      }

    },
    mounted(){
      let canvas = this.$refs.gameCanvas;
      this.convasContext = canvas.getContext('2d');
      let toad = Toad('/static/images/toad.jpg');

      toad.image.onload =  () =>{
        this.convasContext.drawImage(toad.image, toad.positionX, toad.positionY, 20, 20);
      }

    },

  }
</script>
<style scoped>
  canvas {
    border: 1px darkkhaki solid;
  }

</style>
