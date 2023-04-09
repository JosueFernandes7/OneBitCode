// Transforme o objeto abaixo em uma Constructor Function
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
function Pessoa(nome,idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function  Andou() {
    return `${this.nome} andou`;
  }
}
const joao  =  new Pessoa('João',20);
const maria = new Pessoa('Maria',25);
const bruno = new Pessoa('Bruno',15);


function Dom(seletor) {
  const Element = document.querySelectorAll(seletor);
  Element.forEach(item => {
    console.log(item);
  })
}
// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  const elements = document.querySelectorAll(seletor);
  this.element = elements;
  this.addClass = function (classe) {
    elements.forEach(item => {
      item.classList.add(classe);
    })
  }

  this.removeClass = function (classe) {
    elements.forEach(item => {
      item.classList.remove(classe);
    })
  }
}
const li = new Dom('li');
