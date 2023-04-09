// const carro = {};


// Object.defineProperties(carro,{
//   nome: {
//     get() {
//       return this.name;
//     },
//     set(nome) {
//       this.name = nome;
//     }
//   },
//   velocidade: {
//     get() {
//       return this.velocity;
//     },
//     set(valor) {
//       this.velocity = this.name + " anda a "+ `${valor} km/h`;
//     }
//   }
// })

// const frutas = ['Banana', 'Pêra']
// Object.getPrototypeOf(frutas);
// Object.getPrototypeOf(''); // String

// const frutas1 = ['Banana', 'Pêra'];
// const frutas2 = ['Banana', 'Pêra'];

// Object.is(frutas1, frutas2); // false

// const carro = {
//   marca: 'Ford',
//   ano: 2018,
// }
// Object.freeze(carro); // tranca tudo
// Object.seal(carro); // previne a adição de novas propriedades, e impede de deletar
// Object.preventExtensions(carro); // previne a adição de novas propriedades.

// Object.isFrozen(carro); // true
// Object.isSealed(carro); // true
// Object.isExtensible(carro); // true

// const frutas = ['Banana', 'Uva'];

// frutas.hasOwnProperty('map'); // false
// Array.hasOwnProperty('map'); // false
// Array.prototype.hasOwnProperty('map'); // true

// Array.prototype.propertyIsEnumerable('map'); // false
// window.propertyIsEnumerable('innerHeight'); // true

// Exercícios
// Crie uma função que verifique
// corretamente o tipo de dado

function type(element) {
  return Object.prototype.toString.call(element);
}

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {}
Object.defineProperties(quadrado,{
  lado: {
    value: 2,
    enumarable: true,
 
  }
})
Object.freeze(quadrado);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}
Object.freeze(configuracao);
// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertyNames(String.prototype));