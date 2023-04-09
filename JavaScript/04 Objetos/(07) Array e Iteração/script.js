// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada 
function CreateCursos(titulo,descricao,aulas,horas) {
  this.titulo = titulo;
  this.descricao = descricao;
  this.aulas = aulas;
  this.horas = horas;
}

const cursos = document.querySelectorAll('section');
const arrayCursos = Array.from(cursos);

const objetosCurso = arrayCursos.map((item,index) => {

  const titulo = item.querySelector('h1');
  const descricao = item.querySelector('p');
  const aulas = item.querySelector('.aulas');
  const horas = item.querySelector('.horas');

  // Da pra retorna direto, ou também criar uma função construtora
  const section = new CreateCursos(titulo,descricao,aulas,horas)
  return section;

  return {
    titulo,
    descricao,
    aulas,
    horas, 
  }
})

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiorQue100 = numeros.filter(numero => numero>100);
console.log(maiorQue100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const baixo = instrumentos.some(item => item === 'Baixo')
console.log(baixo);


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$  10,60'
  }
]
const valorTotal = compras.reduce((acc,item) => {
  const valor = +item.preco.replace('R$','').replace(',','.');
  return acc+valor;
},0)
console.log(valorTotal);