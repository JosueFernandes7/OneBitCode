// Crie uma função para verificar se um valor é Truthy

function valor(elemento) {
  return console.log(!!elemento);
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado) {
  return console.log(`Perimetro = ${lado * 4}`);
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function Fullname(nome, sobrenome) {
  return console.log(`${nome} ${sobrenome}`);
}

// Crie uma função que verifica se um número é par
function ehpar(numero) {
  if (numero % 2 == 0) {
    return true;
  } else 
    return false;
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipo(element) {
  return console.log(typeof element);
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function () {
  console.log("Josue Fernandes");
});

var totalPaises = 193;
// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  return console.log(`Ainda faltam ${totalPaises - paisesVisitados} países para visitar`);
}
function jaVisitei(paisesVisitados) {
  return console.log(`Já visitei ${paisesVisitados} do total de ${totalPaises} países`);
}
