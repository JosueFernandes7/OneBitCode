// const img = document.querySelector('img');
// function callBack(event) {
//   console.log(event);
// }

// img.addEventListener('click',callBack);

// const animaisLista = document.querySelector('.animais-lista');

// function executar(e) {
//   const currentTarg = e.currentTarget;
//   const target = e.target;
//   const type = this.type;
//   const path = this.path;
//   console.log(currentTarg);
//   console.log(target);
// }
// animaisLista.addEventListener('click',executar)

// const contato = document.querySelector('a[href^="http"]');

// function callBack(e) {
//   e.preventDefault();
//   console.log(e.type);
//   console.log(this.classList.toggle('salvesalve'));
// }

// contato.addEventListener('click',callBack);

// const img = document.querySelector('img');

// function callback(event) {
//   console.log(this); // retorna a imagem
//   console.log(this.getAttribute('src'));
// }

// img.addEventListener('click', callback);

// const h1 = document.querySelector('h1');

// function callback(event) {
//   console.log(event.type, event);
// }

// h1.addEventListener('click', callback);
// h1.addEventListener('mouseenter', callback);
// window.addEventListener('scroll', callback);
// window.addEventListener('resize', callback);
// window.addEventListener('keydown', callback);

// function changeColor (e) {
//   if(e.key === 'w') {
//     document.getElementsByClassName('menu')[0].classList.add('blue');
//   } else {
//     document.getElementsByClassName('menu')[0].classList.remove('blue');
//   }
// }

// window.addEventListener('keydown',changeColor);

// const imgs = document.querySelectorAll('a');
// console.log(imgs);



// function changeColorBlue(e) {
//   e.preventDefault();
//   document.querySelector('.menu').classList.toggle('blue');
// }

// imgs.forEach((item,index) => {
//   console.log(item);
//     item.addEventListener('click',changeColorBlue);
  
// })


//EXERCICIOS ===============================================
// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linkInterno = document.querySelectorAll('a[href^="#"]');

function ativo(e) {
  e.preventDefault();
  this.classList.toggle('ativo');
  linkInterno.forEach(item => {
    if(this != item) {
      item.classList.remove('ativo');
    }
  })
}
linkInterno.forEach(item => {
  item.addEventListener('click',ativo);
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados


const all = document.querySelectorAll('*');

// function clickou(e) {
//   e.preventDefault();
//   console.log(e.target);
// }

// all.addEventListener('click',clickou);


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// function remover(e) {
//   e.preventDefault();
//   e.target.remove();
// }
// all.addEventListener('click',remover);

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function textGrow(e) {
  if(e.key === 't') {
    document.documentElement.classList.toggle('font-maior');
    // Ou usar um foreach no item
    // all.forEach(item => {
    //   item.classList.toggle('font-maior');
    //   
    // })
  }
}
// Verificar se são letras
// (a.toUpperCase() != a.toLowerCase()) && (b.toUpperCase() != b.toLowerCase())
// Verificar se são do mesmo tamanho
// Height a = (a.toUpperCase() == 'a') ? 1:0;
// Height b = (b.toUpperCase() == 'b') ? 1:0;
window.addEventListener('keydown',textGrow);

// function SameCase(a,b) {
//   let height_A = (a.toUpperCase() === a) ? 1:0;
//   let height_B = (b.toUpperCase() === b) ? 1:0;
//   return (a.toUpperCase() != a.toLowerCase()) && (b.toUpperCase() != b.toLowerCase()) ? (height_A === height_B ? 1 : 0) : -1;
// } 