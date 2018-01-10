// function* fibo() {
//   let [a, b] = [1, 1]
//
//   yield a
//   yield b
//
//   while (true) {
//     [a, b] = [b, a + b]
//     yield b
//   }
// }
//
// let gen = fibo()
//
// let arr = []
// for (let i = 0; i < 10; i++)
//   arr.push(gen.next().value)
//
// console.log(arr) //=> [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
//
//
//

let val = 1;
var obj = {
  val: 2,
  dbl: function () {
    this.val *= 2;
    val *= 2;
    console.log(val);
    console.log(this.val);
  }
};
// 说出下面的输出结果
obj.dbl();
var func = obj.dbl;
func();
