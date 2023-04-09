// function asyncSum(a, b) {
//     return new Promise((resolve, reject) => {
//         if (typeof a !== 'number' || typeof b !== 'number') {
//             reject('arguments must be of type number')
//         } else {
//             resolve(a + b)
//         }
//     })
// }

// function asyncSubtract(a, b) {
//     return new Promise((resolve, reject) => {
//         if (typeof a !== 'number' || typeof b !== 'number') {
//             reject('arguments must be of type number')
//         } else {
//             resolve(a - b)
//         }
//     })
// }
// const sumResult = asyncSum(50,33);
// const subtractResult = asyncSubtract(50,30);

// // é uma forma de avaliar varias promises, porem uma depende da outra se um for rejeitada todos são
// Promise.all([sumResult,subtractResult]).then((res) => {
//   console.log(res)
// }).catch((err) => {
//   console.log(err)
// })


function asyncSquare(x) {
  return new Promise((res, rej) => {
    if(typeof x == 'number') {
      res(x * x)
    } else {
      rej(new Error('typeof != "number" '))
    }
  })
}
const numbers = [3, 5, 6, 13, 77]
Promise.all(numbers.map(number => asyncSquare(number))).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err.message);
})