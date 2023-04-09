export default function outSideClick(element,eventos,callback) {
  const outside = 'data-outside';
  
  const html = document.documentElement;
  if(!element.hasAttribute(outside)) {
    eventos.forEach(userEvent => {
      html.addEventListener(userEvent,handleOutSideClick);
    })
    element.setAttribute(outside,'');
    
  }
  
  function handleOutSideClick(event) {
    if(!element.contains(event.target)) { // verifica se o click nao foi no element, se nao foi, executa a função de remover class e vai fecha-lo
      element.removeAttribute(outside)
      eventos.forEach(userEvent => {
        html.removeEventListener(userEvent,handleOutSideClick);
      })
      callback();
    }
    
  }
}