let a = {
  nome : "pedro",
  idade : 25,
}

fetch('./dados.json') .then(r => r.text()) 
.then(jsonText => {
  console.log(JSON.parse(jsonText));
})

const configuracoes = {
  player: 'Google API',
  tempo: 25.5,
  aula: '2-1 JavaScript',
  vitalicio: true,
};

localStorage.configuracoes = JSON.stringify(configuracoes);

const config = JSON.parse(localStorage.configuracoes)