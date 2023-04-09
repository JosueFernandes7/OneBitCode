// function perimetroForma(lados,totalLados = 4) {
//   // totalLados = totalLados || 4;
//   console.log(arguments);
//   return lados * totalLados;
// }

// ; // 40
// // perimetroForma(10); // NaN

// console.log(perimetroForma(12,2));

// // Uso de Rest e Arguments
// function anunciarGanhadores(premio,...ganhadores) {
//   console.log(arguments);
//   console.log(ganhadores);
//   ganhadores.forEach(ganhador => {
//     console.log(ganhador + ' ganhou um ' + premio)
//   });
// }

// anunciarGanhadores('Carro','Pedro', 'Marta', 'Maria');

// const frutas = ['Banana', 'Uva', 'Morango'];
// const legumes = ['Cenoura', 'Batata'];

// const comidas = [...frutas,'Pera',...legumes];
// console.log(comidas);

// let btns = document.querySelectorAll('button');

// btns = [...btns];
// console.log(btns);

// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background = 'blue', color = 'red') {
  // background = background || 'blue';
  // if(color === undefined) {
  //   color = 'red';
  // }
  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  buttonElement.style.color = color;
  return buttonElement;
} 

const redButton = createButton();
console.log(redButton);

// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];
comidas.push(...frutas);
console.log(comidas);