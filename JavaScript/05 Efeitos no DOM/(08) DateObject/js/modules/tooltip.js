export default function initToolTip() {
  
}

const toolTips = document.querySelectorAll('[data-toolTip]')

toolTips.forEach(item => {
  item.addEventListener('mouseover', onMouseOver);
})

function onMouseOver(e) {
  const toolTipBox = criarToolTipBox(this);
  
  onMouseMove.toolTipBox = toolTipBox;
  onMouseLeave.toolTipBox = toolTipBox;
  onMouseLeave.element = this;

  this.addEventListener('mouseleave', onMouseLeave);
  this.addEventListener('mousemove', onMouseMove);
}

const onMouseLeave = {
  handleEvent() {
    this.toolTipBox.remove();
    this.element.removeEventListener('mouseleave', onMouseLeave);
    this.element.removeEventListener('mousemove', onMouseMove);
  }
} 

const onMouseMove = {
  handleEvent(e) {
    this.toolTipBox.style.top = `${e.pageY +20}px`; 
    this.toolTipBox.style.left = `${e.pageX +20}px`;
  }
} 



function criarToolTipBox(element) {
  const toolTipBox = document.createElement('div');
  const texto = element.getAttribute('aria-label')
  toolTipBox.classList.add('tooltip');
  toolTipBox.innerText = texto;
  document.body.appendChild(toolTipBox);
  return toolTipBox;
}