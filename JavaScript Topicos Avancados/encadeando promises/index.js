function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age) {
      resolve(age > 18)
    } else {
      reject(new Error('age is required'))
    }
  })
}
function getAge(birthday) {
  return new Promise((resolve, reject) => {
    if (birthday) {
      const birthYear = new Date(birthday).getTime()
      const currentYear = new Date().getTime()
      const timeInOneYear = 1000 * 60 * 60 * 24 * 365
      const age = Math.floor((currentYear - birthYear) / timeInOneYear)
      resolve(age)
    } else {
      reject(new Error('birthday is required'))
    }
  })
}
getAge('09-07-2001')
  .then((age) => checkAge(age))
  .then((isOver18) => {
    if (isOver18) console.log('Maior de idade')
    else console.log('Menor de idade')
  })
  .catch((err) => {
    console.log(err.message)
  })

// forma errada
// getAge('09-07-2001')
//   .then((age) => {
//     console.log(`idade = ${age}`)
//     checkAge(age)
//       .then((isOver18) => {
//         if (isOver18) console.log('Maior de idade')
//         else console.log('Menor de idade')
//       })
//       .catch((err) => {
//         console.log(err.message)
//       })
//   })
//   .catch((err) => {
//     console.log(err.message)
//   })
