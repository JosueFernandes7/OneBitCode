import { Component } from './Component.js'

export class Form extends Component {
  constructor(parent, options) {
    super('form', parent, options)
  }
  addChildren(...children) {
    // if(element instanceof Component) {
    //   this.getElement().appendChild(element.getElement())
    // } 
    // else {
    //   this.getElement().appendChild(document.querySelector(element).getElement())
    // }
    children.forEach(child => {
       if (child instanceof Component) {
         this.getElement().appendChild(child.getElement())
       } else {
         this.getElement().appendChild(
           document.querySelector(child).getElement()
         )
       }
    })
  }
}
