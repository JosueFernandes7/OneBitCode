// async function puxarDados() {
//   try{
//     const responseDados = await fetch('./dados.json');
//     const responseJson = await responseDados.json();
//     document.body.innerText = responseJson.aula;
//   }
//   catch(erro) {
//     document.body.innerText = erro;
//   }
// }
// puxarDados();

// async function iniciarAsync() {
//   try {
//     const responseDados = fetch('./dados.json');
//     const aula =  (await (await responseDados).json()).aula;
//     document.body.innerText = aula;
//   } catch(error) {
//     document.body.innerText = error;

//   }
// }
// iniciarAsync();

async function asyncSemPromise() {
  
  await new Promise( resolve => {
    setTimeout(() => {
      resolve();
      console.log('foi 5 segundo')
    },1000 * 5);
  }) 
  console.log('acabou')

}
asyncSemPromise();