import React from 'react'
import { GlobalContext } from './GlobalContext'
function Produto() {
  const {produto} = React.useContext(GlobalContext)

  if (produto == null) return null
  return (
    <div>
      {produto.map(({ id, nome, preco, fotos }) => (
          <ul key={id}>
            <li>{nome}</li>
          </ul>
        )
      )}
    </div>
  )
}

export default Produto
