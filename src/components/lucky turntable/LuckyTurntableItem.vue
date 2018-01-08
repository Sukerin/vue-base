<template>

  <div class="turnplate_box">
    <canvas class="myCanvas" ref="myCanvas" width="300px" height="300px" v-bind:style="{ transform:degValue }">抱歉！浏览器不支持。</canvas>
    <canvas class="myCanvas01" ref="myCanvas01" width="200px" height="200px">抱歉！浏览器不支持。</canvas>
    <canvas class="myCanvas03" ref="myCanvas03" width="200px" height="200px">抱歉！浏览器不支持。</canvas>
    <canvas class="myCanvas02" ref="myCanvas02" width="150px" height="150px">抱歉！浏览器不支持。</canvas>
    <button class="turnplatw_btn" @click="btnClick" :disabled="btnDisabled" ></button>
  </div>

</template>

<script>
  export default{
    data () {
      return {
        //旋转角度
        angles: null,
        //可抽奖次数
        clickNum: 5,
        //旋转次数
        rotNum: 0,
        //中奖公告
        notice: null,
        //按钮是否可以点击,false可以点击,true无法点击
        btnDisabled: false,
        infoList: this.sliceInfoList||["dr", "  1000", "   10", "  500", "  100", " 33", "    1", "   20","33","11","111"],
        color: ["#626262", "#787878", "rgba(0,0,0,0.5)", "#DCC722", "white", "#FF4350"],
        info1: ['再接再厉', '      元', '     元', '  淘金币', '     元', '  淘金币', '     元', '  淘金币'],

      }
    },
    props: {
      sliceInfoList: null,
    },
    computed: {
      degValue: function () {
        return 'rotate(' + this.angles + 'deg' + ')';
      }
    },
    methods: {
      btnClick: function () {
//        if (this.clickNum >= 1) {
//          //可抽奖次数减一
//          this.clickNum = this.clickNum - 1;
          //转盘旋转
          this.runCup();
          //转盘旋转过程“开始抽奖”按钮无法点击
          this.btnDisabled = true
          //旋转次数加一
          this.rotNum = this.rotNum + 1;
          //“开始抽奖”按钮无法点击恢复点击
          setTimeout(() => {
//            alert(this.notice);
            this.btnDisabled = false
            this.$emit("noticeEmit",this.notice)
          }, 3000);
//        }
//        else {
//          alert("亲，抽奖次数已用光！");
//        }
      },
      //转盘旋转
      runCup: function () {
        this.probability();

      },
      //各奖项对应的旋转角度及中奖公告内容
      probability: function () {
        let sliceNum = this.infoList.length;
        //获取随机数
        let num = parseInt(Math.random() * (sliceNum - 1));

        //角度为6圈加上转到的元素角度
        this.angles = 2160 * this.rotNum + (1800+360 / sliceNum*(sliceNum-num));
        this.notice = this.infoList[num]

      },

    },
    mounted () {
//      this.infoList=this.sliceInfoList||this.infoList;
      let sliceNum = this.infoList.length;

      //绘制转盘
      let canvas = this.$refs.myCanvas;
      let canvas01 = this.$refs.myCanvas01;
      let canvas03 = this.$refs.myCanvas03;
      let canvas02 = this.$refs.myCanvas02;

      let ctx = canvas.getContext('2d');
      let ctx1 = canvas01.getContext('2d');
      let ctx3 = canvas03.getContext('2d');
      let ctx2 = canvas02.getContext('2d');

      //外圆
      let createCircle = () => {
        let startAngle = 0;//扇形的开始弧度
        let endAngle = 0;//扇形的终止弧度
        //画一个sliceNum等份扇形组成的圆形
        for (let i = 0; i < sliceNum; i++) {
          startAngle = Math.PI * (i / (sliceNum / 2) - 1 / sliceNum)+1.5*Math.PI;
          endAngle = startAngle + Math.PI * (1 / (sliceNum / 2));
          ctx.save();
          ctx.beginPath();
          ctx.arc(150, 150, 100, startAngle, endAngle, false);
          ctx.lineWidth = 120;
          if (i % 2 === 0) {
            ctx.strokeStyle = this.color[0];
          } else {
            ctx.strokeStyle = this.color[1];
          }
          ctx.stroke();
          ctx.restore();
        }
      }
      //各奖项
      let createCirText = () => {
        ctx.textAlign = 'start';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = this.color[3];
        let step = 2 * Math.PI / sliceNum;
        for (let i = 0; i < sliceNum; i++) {
          ctx.save();
          ctx.beginPath();
          ctx.translate(150, 150);
          ctx.rotate(i * step);
          ctx.font = " 20px Microsoft YaHei";
          ctx.fillStyle = this.color[3];
          ctx.fillText(this.infoList[i], -30, -115, 60);
          ctx.font = " 14px Microsoft YaHei";
//          ctx.fillText(this.info1[i], -30, -95, 60);
          ctx.closePath();
          ctx.restore();
        }
      }

      let initPoint = () => {
        //箭头指针
        ctx1.beginPath();
        ctx1.moveTo(100, 24);
        ctx1.lineTo(90, 62);
        ctx1.lineTo(110, 62);
        ctx1.lineTo(100, 24);
        ctx1.fillStyle = this.color[5];
        ctx1.fill();
        ctx1.closePath();
        //中间小圆
        ctx3.beginPath();
        ctx3.arc(100, 100, 40, 0, Math.PI * 2, false);
        ctx3.fillStyle = this.color[5];
        ctx3.fill();
        ctx3.closePath();
        //小圆文字
        ctx3.font = "Bold 20px Microsoft YaHei";
        ctx3.textAlign = 'start';
        ctx3.textBaseline = 'middle';
        ctx3.fillStyle = this.color[4];
        ctx3.beginPath();
        ctx3.fillText('READY,', 80, 90, 40);
        ctx3.fillText('GO！', 80, 110, 40);
        ctx3.fill();
        ctx3.closePath();
        //中间圆圈
        ctx2.beginPath();
        ctx2.arc(75, 75, 75, 0, Math.PI * 2, false);
        ctx2.fillStyle = this.color[2];
        ctx2.fill();
        ctx2.closePath();
      }

      createCircle();
      createCirText();
      initPoint();
    }
  }

</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: "Microsoft YaHei", serif;
  }

  .turnplate_box {
    width: 300px;
    height: 300px;
    /*margin: 100px;*/
    position: relative;
  }

  .turnplate_box canvas {
    position: absolute;
  }

  .myCanvas {
    background-color: white;
    border-radius: 100%;
  }

  .myCanvas01, .myCanvas03 {
    left: 50px;
    top: 50px;
    z-index: 30;
  }

  .myCanvas02 {
    left: 75px;
    top: 75px;
    z-index: 20;
  }

  .myCanvas {
    /*-o-transform: transform 6s;*/
    /*-ms-transform: transform 6s;*/
    /*-moz-transform: transform 6s;*/
    /*-webkit-transform: transform 6s;*/
    transition: transform 3s;
    -o-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }

  .turnplatw_btn {
    width: 60px;
    height: 60px;
    left: 120px;
    top: 120px;
    border-radius: 100%;
    position: absolute;
    cursor: pointer;
    border: none;
    background: transparent;
    outline: none;
    z-index: 40;
  }

</style>
