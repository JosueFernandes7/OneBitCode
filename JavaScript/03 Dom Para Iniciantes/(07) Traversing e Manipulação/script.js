// const h1 = document.querySelector('h1');

// h1.innerHTML = "Novo Titulo";
// console.log(h1.innerHTML);
// console.log(h1.innerText);

// const lista = document.querySelector('.animais-lista');

// const lastElement = lista.children[0];

// const lista = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');

// contato.appendChild(lista); // move lista para o final de contato
// contato.insertBefore(lista, titulo); // insere a lista antes de titulo
// contato.removeChild(titulo); // remove titulo de contato
// contato.replaceChild(lista, titulo); // substitui titulo por lista

// const novoH1 = document.createElement('h1');
// novoH1.innerHTML = "SALVE SALVE";

// contato.insertBefore(novoH1,titulo);

// const menu = document.querySelector('.animais');
// const menuCopy = menu.cloneNode(false);
// const menuCopy2 = menu;
// console.log(menu);
// console.log(menuCopy);
// menu.classList.add('font-maior')

// Exercicios ====================================================
// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const menuCopy = menu.cloneNode(true);

copy.appendChild(menuCopy);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const firstDt = faq.querySelector('dt');
console.log(firstDt);
// Selecione o DD referente ao primeiro DT
const firstDD = firstDt.nextElementSibling;
console.log(firstDD);
// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector('.animais');
// console.log(faq);
// console.log(animais);
// faq.innerHTML = animais.innerHTML;

function removeItem(e) {
  let a = e.currentTarget;
  a.forEach(item => {
    item.remove();
  })
}
const html = document.querySelectorAll('body *');
function remover(e) {
  e.preventDefault();
  console.log(this.remove());
}

html.forEach(item => {
  item.addEventListener('click',remover);
})