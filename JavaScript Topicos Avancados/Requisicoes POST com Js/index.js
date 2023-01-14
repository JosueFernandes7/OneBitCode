// function renderArticle(articleData) {
//   const article = document.createElement('article');

//   article.classList.add('article');
//   article.id = `article-${articleData.id}`

//   const title = document.createElement('h3');
//   title.classList.add('article-title');
//   title.textContent = articleData.title;

//   const content = document.createElement('div')
//   content.classList.add('article-content');
//   content.innerHTML = articleData.content;

//   const author = document.createElement('div')
//   author.classList.add('article-author');
//   author.textContent = articleData.author;

//   article.append(...[title, author, content]);
//   document.querySelector('#articles').appendChild(article)
// }

// async function fetchArticles() {
//   // ja retorna o json direto
//   const article = await fetch('http://localhost:3000/articles').then(res => res.json());

//   article.forEach(article => renderArticle(article));


// }
// document.addEventListener('DOMContentLoaded', () => {
//   fetchArticles()
// })

// const form = document.querySelector('form')

// form.addEventListener('submit',async (e) => {
//   e.preventDefault();
//   const articleData = {
//     title: document.querySelector("#title").value,
//     author: document.querySelector("#author").value,
//     content: document.querySelector("#content").value,
//   }
//   form.addEventListener('click', async (ev) => {
//     ev.preventDefault();
//     const articleData = {
//       title: document.querySelector('#title').value,
//       author: document.querySelector('#author').value,
//       content: document.querySelector('#content').value
//     }
    
//     const response = await fetch('http://localhost:3000/articles', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(articleData)
//     })
//     const savedArticle = await response.json();
//     form.reset();
//     console.log(savedArticle);
//   })
  
// })


function createArticle(articleData) {
  const article = document.createElement('article');
  article.classList.add('article');
  article.id = `article-${articleData.id}`;

  const articleAuthor = document.createElement('div');
  articleAuthor.classList.add('article-author');
  articleAuthor.textContent = articleData.author;

  const articleTitle = document.createElement('h1')
  articleTitle.classList.add('article-title');
  articleTitle.textContent = articleData.title;

  const articleContent = document.createElement('div')
  articleContent.classList.add('article-content');
  articleContent.innerHTML = articleData.content;

  article.append(...[articleTitle,articleAuthor,articleContent]);
  document.querySelector('#articles').appendChild(article)
}

async function insertArticles() {
  const articlesData = await fetch('http://localhost:3000/articles').then(res => res.json())
  
  articlesData.forEach(article => createArticle(article))
}

insertArticles()

const form = document.querySelector('form');

form.addEventListener('submit',async (e) => {
  e.preventDefault();

  const articleData = {
          title: document.querySelector('#title').value,
          author: document.querySelector('#author').value,
          content: document.querySelector('#content').value
        }

  const response = await fetch("http://localhost:3000/articles",{
    method: 'POST',
    headers: {
      "content-type": 'application/json'
    },
    body: JSON.stringify(articleData)
  })

  const savedArticle = await response.json()

  console.log(savedArticle); //
  form.reset() // limpa o form
  createArticle(savedArticle) // criar o artigo

})