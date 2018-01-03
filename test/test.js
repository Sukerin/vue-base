function* fibo() {
  let [a, b] = [1, 1]

  yield a
  yield b

  while (true) {
    [a, b] = [b, a + b]
    yield b
  }
}

let gen = fibo()

let arr = []
for (let i = 0; i < 10; i++)
  arr.push(gen.next().value)

console.log(arr) //=> [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
