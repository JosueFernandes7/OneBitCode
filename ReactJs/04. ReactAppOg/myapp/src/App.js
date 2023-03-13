import React from 'react'
import styled from 'styled-components'

const ProdutosContainer = styled.div`
  display: flex;
`
const Produto = styled.div`
  flex: 1;
`
const Titulo = styled.h1`
  font-size: 2rem;
  color: tomato;
`
const Paragrafo = styled.p`
  font-size: 1.5rem;
  color: green;
`

const Preco = styled.p`
  background: hsl();
  color: #fff;
`
const Button = styled.button`
  background: ${({ ativo }) => (ativo ? '#53d956' : '#000')};
  border: 1px solid black;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  `;
const App = () => {
  const [ativo,setAtivo] = React.useState(false);
  
  return (
    <div>
      <Button ativo={ativo} onClick={() => setAtivo(!ativo)}>Compre Aqui</Button>
      <ProdutosContainer>
        <Produto>
          <Titulo>Notebook</Titulo>
          <Paragrafo>Meu Texto é esse.</Paragrafo>
          <Preco cor="black">R$ 2100</Preco>
        </Produto>
        <Produto>
          <Titulo>Smartphone</Titulo>
          <Paragrafo>Meu Texto é esse.</Paragrafo>
          <Preco>R$ 1500</Preco>
        </Produto>
      </ProdutosContainer>
    </div>
  )
}

export default App
