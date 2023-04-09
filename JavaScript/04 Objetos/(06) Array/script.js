// const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// const carro2 = ['Ford', 'Fiat', 'VW', 'Honda'];

// const array = ['banana','feijao'];
// // fill e splice
// carros.fill(...array,2,3); // nao aceita
// carro2.splice(2,0,...array);

// console.log(carros);
// console.log(carro2);

// Exercícios
const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];

// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
const firstElement = comidas.shift();
const lastElement = comidas.pop();

// Adicione 'Arroz' ao final da array
comidas.push('Arroz')

// Adicione 'Peixe' e 'Batata' ao início da array

// comidas.splice(0,0,'Peixe','Batata'); Pode usar splice também
comidas.unshift('Peixe','Batata');
console.log(comidas);

let estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];

// Arrume os estudantes em ordem alfabética
estudantes = estudantes.sort();
console.log(estudantes);
// Inverta a ordem dos estudantes
console.log(estudantes.reverse());


// Verifique se Juliana faz parte dos estudantes
// Verifique se Joana faz parte dos estudantes
// Nao pediu mas eu fiz
function verificaArray(array,nome) {
  if(array.includes(nome)) {
    console.log(`Tem ${nome} no Array`);
  } else {
    console.log(`Nao tem ${nome} no Array`);
  }
}
verificaArray(estudantes,'Joana');
verificaArray(estudantes,'Juliana');

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
console.log(html);
html = html.split('section').join('ul');
html = html.split('div').join('li');
console.log(html);

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

let carros1;
// carros1 = Array.from(carros); OU
carros1 = carros.slice();
carros.pop();
console.log(carros1);
console.log(carros);