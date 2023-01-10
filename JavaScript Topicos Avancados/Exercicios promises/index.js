function imc(weight, height) {
  return new Promise((resolve, reject) => {
    if (typeof weight == 'number' && typeof height == 'number') {
      const imc = weight / Math.pow(height, 2)
      resolve(imc)
    } else {
      reject(Null)
    }
  })
}
function showImcResult(weight, height) {
  console.log('Calculando imc...')
  imc(weight, height)
    .then((result) => {
      if (result < 18.5) console.log('Situação: MAGREZA')
      else if (result < 25) console.log('Situação: NORMAL')
      else if (result < 30) console.log('Situação: SOBREPESO')
      else if (result < 40) console.log('Situação: OBESIDADE')
      else console.log('Situação: OBESIDADE GRAVE')
    })
    .catch((err) => {
      console.log('Peso ou Altura invalida')
    })
    .finally(() => {
      console.log('Terminando imc...')
    })
}
showImcResult(181, 1.74)
