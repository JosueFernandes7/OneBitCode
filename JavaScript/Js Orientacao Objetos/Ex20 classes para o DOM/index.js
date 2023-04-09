import { Component} from './Component.js'
import { Input} from './Input.js'
import { Form } from './Form.js'
import { Label } from './Label.js'

const title = new Component('h1','body', {textContent: "Olá, mundo!"});

title.render()
title.tag = 'h3';
const form = new Form('body')
const label = new Label('Nome',form,{htmlFor: 'nameInput',className: 'testandokkkk'});
const input = new Input(label,{ id: 'nameInput',name: 'name', });
form.render();
label.render();
form.addChildren(input)

// da pra acessar as propriedade pelo Object.getPrototypeOf(elemento)