const login = new Promise((resolve, reject) => {
  const condition = true;
  if (condition) {
    setTimeout(() => {
      resolve('Login Efetuado');
    }, 2000);
  } else {
    reject("epa");
  }
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados Carregados');
  },1500);
});

const carregouTudo = Promise.race([login,dados]);

carregouTudo.then((resposta) =>{
  console.log(resposta)
})