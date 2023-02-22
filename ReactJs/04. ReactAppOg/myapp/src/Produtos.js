import React from 'react'
import Titulo from './Titulo';
import Produto from './Produto';
function Produtos() {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ]
  return (
    <div >
      <Titulo titulo = "Produtos" cor="red"/>
      {produtos.map(produto => <Produto key={produto.nome} {...produto}></Produto>)}
    </div>
  )
}

export default Produtos;