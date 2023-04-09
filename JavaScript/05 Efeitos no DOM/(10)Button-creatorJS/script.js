const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
controles.addEventListener('change', handleChange);

const handleStyle = {
  element: btn,
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + 'px';
  },
  width(value) {
    this.element.style.width = value + 'px';
  },
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    console.log(this);
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'rem';
  },
}

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);
  saveValue(name,value);
  showCss();
}

function saveValue(name,value) {
  localStorage[name] = value;
}
function setValue() {
  const propriedades = Object.keys(localStorage);
  propriedades.forEach(propriedade => {
    handleStyle[propriedade](localStorage[propriedade])
    controles.elements[propriedade].value = localStorage[propriedade];
  })
  showCss()
}
setValue();

function showCss() {
  cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}

controles.clear.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.clear();
  showCss();
})