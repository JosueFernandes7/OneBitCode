function execute() {
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada.')
        setTimeout(() => {
          console.log('Resolvendo a promise...')
            if (true) {
              reject('promise rejeitada')
            } else {
              resolve('promise finalizada')
            }

        }, 2 * 1000)
    })
}

const p = execute()
let a = 0;
console.log("variavel a ANTES DA PROMISE = " + a);
p.then(result => {
  a = result;
  console.log(`resultado = ${result}`);
}).catch(err => {
  console.log(`resultado = ${err}`);
}).finally(() => {
  console.log("fim da promise")
})

// console.log("variavel a DEPOIS DA PROMISE = " + a);
