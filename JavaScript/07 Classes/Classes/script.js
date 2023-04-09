// Usando Função Construtura
/*
function Button(text,background) {
  this.text = text;
  this.background = background;
}
Button.prototype.element = function() {
  const buttonElement = document.createElement('button');
  buttonElement.style.backgroundColor = this.background;
  buttonElement.innerText = this.text;
  return buttonElement;
}
const blueButton = new Button('Botao','blue')
console.log(blueButton.element())
*/


class Button {
  constructor(text, background,color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }
  element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.backgroundColor = this.background;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  appendElement(target) {
    const currentTarget = document.querySelector(target)
    currentTarget.appendChild(this.element());
    return currentTarget
  }
  static blueButton(text) {
    return new Button(text,'blue','white');
  }
}

const botao = Button.blueButton('eae');
console.log(botao.appendElement('body'));
// const redButton = new Button('BotaoVermelho','blue','white');
// redButton.appendElement('div')

// class Button{
//   constructor(options) {
//     this.options = options;
//   }
//   static createButton(text,background) {
//     const buttonElement = document.createElement('button');
//     buttonElement.style.backgroundColor = background;
//     buttonElement.innerText = text;
//     return buttonElement;
//   }
// }
// const buttonObj = {
//   backgroundColor: 'blue',
//   text: 'Comprar',
//   color: 'white'
// }
// const blueButton = Button.createButton('eae','red')

// console.log(blueButton)