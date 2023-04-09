export default function outSideClick(element,eventos,callback) {
  const outside = 'data-outside';
  
  const html = document.documentElement;
  if(!element.hasAttribute(outside)) {
    eventos.forEach(userEvent => {
      // Pra tirar o efeito de bubble, coloca um timeout pra não carregar direto
      // se nao tiver o timeout ele executa direto, ou seja vai remover o element direto na entrada
      setTimeout(() => html.addEventListener(userEvent,handleOutSideClick))
    
    })
    element.setAttribute(outside,'');
    
  }
  
  function handleOutSideClick(event) {
    if(!element.contains(event.target)) { // verifica se o click nao foi no element, se nao foi, executa a função de remover class do element
      element.removeAttribute(outside)
      eventos.forEach(userEvent => {
        html.removeEventListener(userEvent,handleOutSideClick);
      })
      callback();
    }
    
  }
}