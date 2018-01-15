<template>
  <div>
    <img :src=imagePath />
  </div>
</template>
<script>
  import  utils from './utils';
  export default{
    data(){
      return {
        imagePath: new Image(),
        positionX: 20,
        positionY: 20,
        speed: 10,
        position:{
          positionX:this.positionX,
          positionY:this.positionY,
//          this.positionY,
        },
      }
    },
    props:{
      path:{
        default:'/static/images/toad.jpg',
        type:String,
      }
    },
    methods:{
      moveRight: function () {
        this.$emit("move",this.position)
        this.positionX += 10
      },
      moveLeft:  function (){
        this.$emit("move",this.position)

        this.positionX -= 10
      },

      moveUp:  function () {
        this.$emit("move",this.position)


        this.positionY -= 10
      },
      moveDown:  function () {
        this.$emit("move",this.position)


        this.positionY += 10
      },


    },
    mounted(){
      this.image = utils.imageFromPath(this.path)
    },
  }
</script>
