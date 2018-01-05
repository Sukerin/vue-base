<template>

  <div class="turnplate_box">
    <canvas id="myCanvas" width="300px" height="300px">抱歉！浏览器不支持。</canvas>
    <canvas id="myCanvas01" width="200px" height="200px">抱歉！浏览器不支持。</canvas>
    <canvas id="myCanvas03" width="200px" height="200px">抱歉！浏览器不支持。</canvas>
    <canvas id="myCanvas02" width="150px" height="150px">抱歉！浏览器不支持。</canvas>
    <button id="tupBtn" class="turnplatw_btn" @click="btnClick" :class="{ disabled: btnDisabled }"></button>
  </div>

</template>

<script>
  export default{
    name: 'lucky_turntable',
    data () {
      return {
        //旋转角度
        angles:null,
        //可抽奖次数
        clickNum: 5,
        //旋转次数
        rotNum: 0,
        //中奖公告
        notice: null,
        //按钮是否可以点击,false可以点击,true无法点击
        btnDisabled:false,
      }
    },
    props: {},
    computed: {},
    methods: {
      btnClick: function () {
          if (this.clickNum >= 1) {
            //可抽奖次数减一
            this.clickNum = this.clickNum - 1;
            //转盘旋转
            runCup();
            //转盘旋转过程“开始抽奖”按钮无法点击
            this.btnDisabled=true
            //旋转次数加一
            this.rotNum = this.rotNum + 1;
            //“开始抽奖”按钮无法点击恢复点击
            setTimeout(() => {
              alert(this.notice);
              this.btnDisabled=false
            }, 6000);
          }
          else {
            alert("亲，抽奖次数已用光！");
          }
      },
    },
    mounted () {
      //转盘初始化
      let color = ["#626262", "#787878", "rgba(0,0,0,0.5)", "#DCC722", "white", "#FF4350"];
      let info = ["谢谢参与", "  1000", "   10", "  500", "  100", " 4999", "    1", "   20"];
      let info1 = ['再接再厉', '      元', '     元', '  淘金币', '     元', '  淘金币', '     元', '  淘金币']
      canvasDraw();


      //转盘旋转
      function runCup () {
        probability();
        let degValue = 'rotate(' + this.angles + 'deg' + ')';
        let myCanvas = document.getElementById('myCanvas');
        myCanvas.css('-o-transform', degValue);           //Opera
        myCanvas.css('-ms-transform', degValue);          //IE浏览器
        myCanvas.css('-moz-transform', degValue);         //Firefox
        myCanvas.css('-webkit-transform', degValue);      //Chrome和Safari
        myCanvas.css('transform', degValue);
      }

      //各奖项对应的旋转角度及中奖公告内容
      function probability () {
        //获取随机数
        let num = parseInt(Math.random() * (7));
        //概率
        if (num === 0) {
          this.angles = 2160 * this.rotNum + 1800;
          this.notice = info[0] + info1[0];
        }
        //概率
        else if (num === 1) {
          this.angles = 2160 * this.rotNum + 1845;
          this.notice = info[7] + info1[7];
        }
        //概率
        else if (num === 2) {
          this.angles = 2160 * this.rotNum + 1890;
          this.notice = info[6] + info1[6];
        }
        //概率
        else if (num === 3) {
          this.angles = 2160 * this.rotNum + 1935;
          this.notice = info[5] + info1[5];
        }
        //概率
        else if (num === 4) {
          this.angles = 2160 * this.rotNum + 1980;
          this.notice = info[4] + info1[4];
        }
        //概率
        else if (num === 5) {
          this.angles = 2160 * this.rotNum + 2025;
          this. notice = info[3] + info1[3];
        }
        //概率
        else if (num === 6) {
          this.angles = 2160 * this.rotNum + 2070;
          this.notice = info[2] + info1[2];
        }
        //概率
        else if (num === 7) {
          this.angles = 2160 * this.rotNum + 2115;
          this.notice = info[1] + info1[1];
        }
      }

      //绘制转盘
      function canvasDraw () {
        let canvas = document.getElementById('myCanvas');
        let canvas01 = document.getElementById('myCanvas01');
        let canvas03 = document.getElementById('myCanvas03');
        let canvas02 = document.getElementById('myCanvas02');
        let ctx = canvas.getContext('2d');
        let ctx1 = canvas01.getContext('2d');
        let ctx3 = canvas03.getContext('2d');
        let ctx2 = canvas02.getContext('2d');
        createCircle();
        createCirText();
        initPoint();

        //外圆
        function createCircle () {
          let startAngle = 0;//扇形的开始弧度
          let endAngle = 0;//扇形的终止弧度
          //画一个8等份扇形组成的圆形
          for (let i = 0; i < 10; i++) {
            startAngle = Math.PI * (i / 5 - 1 / 10);
            endAngle = startAngle + Math.PI * (1 / 5);
            ctx.save();
            ctx.beginPath();
            ctx.arc(150, 150, 100, startAngle, endAngle, false);
            ctx.lineWidth = 120;
            if (i % 2 === 0) {
              ctx.strokeStyle = color[0];
            } else {
              ctx.strokeStyle = color[1];
            }
            ctx.stroke();
            ctx.restore();
          }
        }

        //各奖项
        function createCirText () {
          ctx.textAlign = 'start';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = color[3];
          let step = 2 * Math.PI / 8;
          for (let i = 0; i < 8; i++) {
            ctx.save();
            ctx.beginPath();
            ctx.translate(150, 150);
            ctx.rotate(i * step);
            ctx.font = " 20px Microsoft YaHei";
            ctx.fillStyle = color[3];
            ctx.fillText(info[i], -30, -115, 60);
            ctx.font = " 14px Microsoft YaHei";
            ctx.fillText(info1[i], -30, -95, 60);
            ctx.closePath();
            ctx.restore();
          }
        }

        function initPoint () {
          //箭头指针
          ctx1.beginPath();
          ctx1.moveTo(100, 24);
          ctx1.lineTo(90, 62);
          ctx1.lineTo(110, 62);
          ctx1.lineTo(100, 24);
          ctx1.fillStyle = color[5];
          ctx1.fill();
          ctx1.closePath();
          //中间小圆
          ctx3.beginPath();
          ctx3.arc(100, 100, 40, 0, Math.PI * 2, false);
          ctx3.fillStyle = color[5];
          ctx3.fill();
          ctx3.closePath();
          //小圆文字
          ctx3.font = "Bold 20px Microsoft YaHei";
          ctx3.textAlign = 'start';
          ctx3.textBaseline = 'middle';
          ctx3.fillStyle = color[4];
          ctx3.beginPath();
          ctx3.fillText('开始', 80, 90, 40);
          ctx3.fillText('GO！', 80, 110, 40);
          ctx3.fill();
          ctx3.closePath();
          //中间圆圈
          ctx2.beginPath();
          ctx2.arc(75, 75, 75, 0, Math.PI * 2, false);
          ctx2.fillStyle = color[2];
          ctx2.fill();
          ctx2.closePath();
        }
      }
    }
  }

</script>

<style scoped>
  * {
    padding: 0px;
    margin: 0px;
    font-size: 16px;
    font-family: "Microsoft YaHei";
  }

  .turnplate_box {
    width: 300px;
    height: 300px;
    margin: 100px auto;
    position: relative;
  }

  .turnplate_box canvas {
    position: absolute;
  }

  #myCanvas {
    background-color: white;
    border-radius: 100%;
  }

  #myCanvas01, #myCanvas03 {
    left: 50px;
    top: 50px;
    z-index: 30;
  }

  #myCanvas02 {
    left: 75px;
    top: 75px;
    z-index: 20;
  }

  #myCanvas {
    -o-transform: transform 6s;
    -ms-transform: transform 6s;
    -moz-transform: transform 6s;
    -webkit-transform: transform 6s;
    transition: transform 6s;
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
