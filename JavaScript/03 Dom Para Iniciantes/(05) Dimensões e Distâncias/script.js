// const larguraTela = window.innerHeight;
// const animais = document.querySelector('h2');
// const rect = animais.getBoundingClientRect().top;
// console.log(rect);
// const scrolly = window.scrollY;

// const small = window.matchMedia('(max-width: 600px)').matches;

// if(small) {
//   console.log("Tela Mobile");
// } else {
//   console.log('tela padrao');
// }
// EXERCÍCIOS ================================================================

// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
const top1 = img.offsetTop;
console.log(top1);

// Retorne a soma da largura de todas as imagens
function somaImgs() {
  const imgs = document.querySelectorAll('img');
  let somaLarguras = 0;
  imgs.forEach(item => {
    somaLarguras += item.offsetWidth;
  })

  console.log(somaLarguras);
}

window.onload = function() {
  somaImgs();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');

links.forEach(item => {
  let width = item.offsetWidth;
  let height = item.offsetHeight;
  if(height >= 48 && width >= 48) {
    console.log('width de acordo');
  } else {
    console.log(`${width} nao tem acessibilidade`);
  }
})
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const widthPage = window.matchMedia('(max-width: 720px)').matches;
if(widthPage) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}