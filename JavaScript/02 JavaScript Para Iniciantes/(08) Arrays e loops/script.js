// var videoGames = ['PS4','NINTENDO','PS5','XBOX'];

// videoGames.unshift('eae') // adiciona na primeira posicao
// videoGames.shift('eae') // remover o elemento na posicao 0

// videoGames.push('eaek') // adiciona um ultimo elemento no array
// videoGames.pop('eaek') // Remove ultimo elemento do array

// Todos alteram o videoGames.length
// videoGames.forEach(function(item,index,array) {
//   videoGames.pop();
//   console.log(index,item);
// })

// Exercicio
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

var ganhou = ['1959','1962','1994','2002'];
ganhou.forEach(function(item) {
  console.log(`Ganhou a copa de ${item}`);
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if(frutas[i] === 'Pera') {
    break;
  } 
  
  
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var lastFruit = frutas[--frutas.length];
