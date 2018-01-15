<template>
  <v-layout justify-center align-center>
    <div>
      <canvas ref="gameCanvas" :width=gameWidth :height=gameHeight>

      </canvas>
      <toad  ref="toadComponent" hidden></toad>
    </div>
  </v-layout>
</template>

<script>
//  import Toad from './toad';
  import Toad from './Toad.vue';

  export default{
    components:{Toad},
    data(){
      return {
        fps: 60,
        isStart: false,
        canvasContext: null,
        canvas: null,
        actions: {},
        actionKeys: {},
        toad: {},
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
        let that = this;
        setInterval(function () {

          let keys = Object.keys(that.actions);
          for (let i = 0; i < keys.length; i++) {
            if (that.actionKeys[keys[i]]) {
              that.actions[keys[i]]();
            }
          }

          that.canvasContext.clearRect(0, 0, that.canvas.width, that.canvas.height);
          that.canvasContext.drawImage(that.toad.image, that.toad.positionX, that.toad.positionY, 20, 20);

        }, 1000 / this.fps)
      },
      endGame: function () {
        this.isStart = false;
      },

      registerAction: function (keyy, actionFunc) {
        this.actions[keyy.toString()] = actionFunc;
//            this.actions.set(key,actionFunc)
      },
      listenChildren: function () {
        this.$on()
      },

    },
    mounted: function () {
      window.addEventListener('keydown', (event) => {
        this.actionKeys[event.keyCode] = true;
      })
      window.addEventListener('keyup', (event) => {
        this.actionKeys[event.keyCode] = false;
      })

      this.canvas = this.$refs.gameCanvas;
      this.canvasContext = this.canvas.getContext('2d');

      this.toad=this.$refs.toadComponent;

      this.canvasContext.drawImage(this.toad.$data.imagePath, this.toad.positionX, this.toad.positionY, 20, 20);


      this.registerAction(65, this.toad.moveLeft);
      this.registerAction(68, this.toad.moveRight);

      this.registerAction(87, this.toad.moveUp);
      this.registerAction(83, this.toad.moveDown);
      this.startGame();
    },

  }
</script>
<style scoped>
  canvas {
    border: 1px darkkhaki solid;
  }

</style>
