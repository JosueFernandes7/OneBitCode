import React from 'react'



function Produto({produto}) {

  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if(produto !== null) {
      (async () => {
        const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`);
        const json = await response.json();
        setDados(json);
      })()
    }
  }, [produto]);
  
  if(dados === null) return null;
  return (
  <div>
      <h1>{dados.nome}</h1>
      <p>{dados.preco}</p>
  </div>
  )
}

export default Produto