// const numeros = [10,12,23,42,321,123,1232,23231];
// console.log(Math.max.apply(null,numeros));
// const li = document.querySelectorAll('li');

// function possuiAtivo(element) {
//   return element.classList.contains('ativo');
// }

// const filtro1 = Array.prototype.filter.call(li,possuiAtivo);
// console.log(filtro1);

// const filtro2 = Array.prototype.filter.apply(li,[possuiAtivo]);
// console.log(filtro2);
// const newli = Array.from(li);
// 
// const $ = document.querySelectorAll.bind(document);
// const ul = $('ul');

// const filtraUl = Array.prototype.filter.bind(ul,item => {
//   return item.classList.contains('ativo');
// })

const carro = {
  marca: 'Ford',
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}

const honda = {
  marca : 'honda'
}

const aceleraHonda = carro.acelerar.bind(honda);

function imc(altura,peso) {
  return peso / (altura * altura);
}

// quando queremos estabelecar um parámetro só, podemos usar o bind
const imc170 = imc.bind(null,170);

// Exercícios
// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');

const totalChar = Array.prototype.reduce.call(paragrafos,(acumulador,item) => {
  let noSpace  = item.innerHTML.split(' ').join('').length;
  return acumulador + noSpace;
},0)
console.log(totalChar);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag,classe,conteudo) {
  let elemento = document.createElement(tag);
  elemento.classList.add(classe);
  elemento.innerHTML += conteudo;
  return elemento;
}

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

let createH1 = criarElemento.bind(null,'h1','titulo');