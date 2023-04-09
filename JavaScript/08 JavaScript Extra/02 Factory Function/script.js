// // factory function
// function createButton(text) {
//   function element() {
//     const botao = document.createElement('button');
//     botao.innerText = text;
//     return botao;
//   }
//   return {
//     text,
//     element,
//   };
// }
// let btn1 = createButton('salve')
// // Constructor Functions
// function createButton1(text) {
//   this.text = text;
//   this.element = () => {
//     const botao = document.createElement('button');
//     botao.innerText = text;
//     return botao;
//   }
// }
// let btn2 = new createButton1('salve')
// // Classe
// class createButton2{
//   constructor(text) {
//     this.text = text;
//   }
//   element() {
//     const botao = document.createElement('button');
//     botao.innerText = this.text;
//     return botao;
//   }
// }
// let btn3 = new createButton2('salve')

// console.log(btn1.element());
// console.log(btn2.element());
// console.log(btn3.element());

function Pessoa(nome) {
  if(!(this instanceof Pessoa)) {
    return new Pessoa(nome);
  };
  this.nome = nome;
}

Pessoa.prototype.andar = function() {
  return `${this.nome} andou`;
}

const designer =  Pessoa('André');

console.log(designer);