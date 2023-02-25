import React from 'react'
import Produto from './Produto'


function App() {
  const [produto,setProduto] = React.useState(null)
  
  React.useEffect(() => {
    // pega o que tem no localStorage se existir e coloca no hook produto
    const produtoLocal = window.localStorage.getItem('produto');
    if(produtoLocal) setProduto(produtoLocal)
  }, [])

  React.useEffect(() => {
    if(produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto])

  function handleClick({target}){
    setProduto(target.innerText)
  }
  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button  onClick={handleClick} style={{margin: '1rem'}}>notebook</button>
      <button onClick={handleClick} >smartphone</button>
      <Produto produto = {produto}/>
    </div>

  )
}

export default App
