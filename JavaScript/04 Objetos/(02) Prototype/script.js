// function Pessoa(nome,idade) {
//   this.nome = nome;
//   this.idade = idade;

// }


// Pessoa.prototype.andou = function () {
//   return `ANDOU ${this.nome}`;
// }
// Pessoa.prototype.tempo = 'frio';

// const joao = new Pessoa('joao',20);

// const lista = document.querySelectorAll('li');

// // Transforma em uma array
// const listaArray = Array.prototype.slice.call(lista);

// Exercícios
// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade

function Pessoa(nome,sobrenome,idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.fullName = function() {
  return `${this.nome} ${this.sobrenome}`
}
const joao = new Pessoa('joao','miguel',20);
// Crie um método no protótipo que retorne
// o nome completo da pessoa

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

// NodeList.prototype
// HtmlCollection.prototype
// Document.prototype



// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //htmllielement
li.click; // funcao
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // 

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
// String