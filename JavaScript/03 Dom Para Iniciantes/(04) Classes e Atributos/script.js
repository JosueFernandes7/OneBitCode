// // Adicione a classe ativo a todos os itens do menu
// const menu = document.querySelectorAll('.menu a');
// menu.forEach(item => {
//   item.classList.add('ativo');
// })

// // Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
// menu.forEach((item,index) => {
//   if(index !== 0) {
//       item.classList.remove('ativo');
//   }
// })
// // Verifique se as imagens possuem o atributo alt
// const imgs = document.querySelectorAll('img');
// imgs.forEach((item,index) => {
//   console.log("imagem"+index+" "+item.hasAttribute('alt'));
  
// })
// // Modifique o href do link externo no menu
// let link = document.querySelector('a[href^="http"]');
// link.setAttribute('href','https://www.facebook.com/')

let menu = document.querySelector('.menu a');
menu.getAttribute('src')
console.log(menu.getAttribute('href'));

