class Button {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  set element(type) {
    return this._elementType = type;
  }
  get element() {
    const type = this._elementType || 'button';
    const buttonElement = document.createElement(type);
    buttonElement.innerText = this.text;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
}

const blueButton = new Button('Comprar', 'blue');

