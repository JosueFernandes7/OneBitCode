// // const animais = document.getElementById('animais');

// // const gridSection = document.getElementsByClassName('grid-section');

// // const primeirali = document.querySelector("li");

// // const link = document.querySelectorAll('a[href^= "#"]');
// const menu = document.querySelector('.menu');
// console.log(menu);
// // HTML COLLECTION E NODELIST
// const gridSectionHTML = document.getElementsByClassName('grid-section');
//  // retorna um htmlcollection - atualiza ao vivo
//  // retorna um node list estático
// const gridSectionNode = document.querySelectorAll('.grid-section');
// menu.classList.add('grid-section');

// console.log(gridSectionHTML.length); // 4 itens
// console.log(gridSectionNode.length); // 3 itens
// gridSectionNode.forEach(function(item) {
//   console.log(item)
// })
// // forma de percorer o html collection
// const gridArray = Array.from(gridSectionHTML);
// gridArray.forEach(function(item) {
//   console.log(item);
// })

//EXERCÍCIOS

// Retorne no console todas as imagens do site

    // const img = document.querySelectorAll('img[src^="img/"]'); 
    // img.forEach(function(item) {
    //   console.log(item);
    // })

  
// Retorne no console apenas as imagens que começaram com a palavra imagem

    // const imagem = document.querySelectorAll('img[src^="img/imagem"]'); 

    // imagem.forEach(function(item) {
    //   console.log(item);
    // })
// Selecione todos os links internos (onde o href começa com #)

    // const link = document.querySelectorAll('a[href^="#"]');
    // console.log(link);

// Selecione o primeiro h2 dentro de .animais-descricao

const h2 = document.querySelector('.animais-descricao h2');
console.log(h2);
//Selecione o último p do site
const para = document.querySelectorAll('p');
console.log(para[para.length-1]);
