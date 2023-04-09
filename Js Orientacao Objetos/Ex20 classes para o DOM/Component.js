export  class Component {
  #element = null
  constructor(tag, parent, options) {
    this.tag = tag
    this.parent = parent
    this.options = options
    this.build()
  }
  getElement() {
    return this.#element
  }
  build() {
    this.#element = document.createElement(this.tag)
    // this.options.forEach(element => {
    //   this.#element.classList.add(element)
    // });
    Object.assign(this.#element, this.options)
    return this
  }
  render() {
    // verifica se é um filho para colocar
    if (this.parent instanceof Component) {
      this.parent.getElement().append(this.#element)
    } else {
      document.querySelector(this.parent).append(this.#element)
    }
  }
}
