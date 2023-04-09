function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements);
  
  function hide() {
    elements.forEach(element => {
      element.style.display = 'none';
    })
    return this;
  }

  function show() {
    elements.forEach(element => {
      element.style.display = 'initial';
    })
    return this;
  }

  function on(event,callback) {
    elements.forEach(element => {
      element.addEventListener(event,callback);
    })
    return this;
  }
  function addClass(newClass) {
    elements.forEach(element => {
      element.classList.add(newClass);
    })
    return this;
  }
  return {
    selectedElements,
    elements,
    hide,
    show,
    on,
    addClass,
  }
}
const btns = $$('button');
function handleClick() {
  btns.addClass('ativo');
}

btns.on('click',handleClick);