import React from 'react'

const App = () => {
  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(['Item 1']);

  const handleClick = () => {
    setContar((contar) => contar + 1)
    setItems([...items, `Item ${contar + 1}`])
  }


  return (
    <>
    {items.map(e => <li key={e}>{e}</li>)}
    <button onClick={handleClick}>{contar}
    </button>
    </>
  );
};


export default App
