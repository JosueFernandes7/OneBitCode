const links = document.querySelectorAll('a');

function handleClick(event) {
  event.preventDefault();
  const url = event.target.href;
  fetchPage(url);
  window.history.pushState(null,null,url)
}

async function fetchPage(url) {
  document.querySelector('.content').innerHTML = "Carregando..."
  const pageResponse = await fetch(url);
  const pageText = await pageResponse.text();
  replaceContent(pageText);
}

function replaceContent(newText) {
  const newHtml = document.createElement('div');
  newHtml.innerHTML = newText;

  const oldContent = document.querySelector('.content');
  const newContent = newHtml.querySelector('.content');
  oldContent.innerHTML = newContent.innerHTML;

  const titulo = newHtml.querySelector('title').innerText;
  document.title = titulo;
}

window.addEventListener('popstate', () => {
  const paginaUrl = window.location.href;
  fetchPage(paginaUrl)
})

links.forEach(link => {
  link.addEventListener('click', handleClick)
})