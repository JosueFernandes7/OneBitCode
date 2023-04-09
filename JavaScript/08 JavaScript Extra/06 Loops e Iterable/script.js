// const frutas = ['Banana', 'Morango', 'Uva'];
// const frase = 'Isso é JavaScript';

// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(({json}) => {
//    const a = await json();
//   return a
// })
// .then(r => console.log(r))

// const frutas = ['Banana', 'Morango', 'Uva'];
// const frase = 'Isso é JavaScript';
// // se o elemento for iteravel, da pra usar o spreed operator dentro
// for (const fruta of frutas) {
//   console.log(...fruta.split(' '));
// }

// const buttons = document.querySelectorAll('button');

// for(const btn of buttons) {
//   btn.style.background = 'blue';
// }

// console.log(...buttons);

// const pessoa = {
//   nome:'Josue',
//   idade: 20,
//   salario: 30000,
// }

// const array = [1,2,3]
// for(const item in pessoa) {
//   console.log(item,pessoa[item]);
// }
// for(const item in array) {
//   console.log(item,array[item]);
// }

// const btn = document.querySelector('button');
// const btnStyles = getComputedStyle(btn);

// for(const style in btnStyles) {
//   console.table(style,btnStyles[style]);
// }

// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const li = document.querySelectorAll('li');
let num = 1;
for(const item of li) {
  item.classList.add(`classe${num++}`);
}
// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window
for(const item in window) {
  console.log(item,window[item]);
}
