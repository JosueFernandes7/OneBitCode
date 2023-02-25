import React from 'react'


function App() {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();
  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao("Item Adicionado ao carrinho");
    console.log(timeoutRef.current);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null)
    },2000);
    console.log(timeoutRef.current);
    console.log(timeoutRef);
    
    // console.log(a);
  }
  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </div>
  )

  
  return (
    <div>
    </div>

  )
}

export default App
