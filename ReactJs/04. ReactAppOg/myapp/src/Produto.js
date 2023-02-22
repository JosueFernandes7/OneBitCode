import React from 'react'

function Produto({nome,propriedades}) {
  return (
    <div style={{margin: '1rem 0', padding: '1rem', border: '1px solid'}}>
      <p>{nome}</p>
      <ul>
        {propriedades.map(prop => <li key={prop}>{prop}</li>)}
      </ul>
    </div>
  )
}

export default Produto