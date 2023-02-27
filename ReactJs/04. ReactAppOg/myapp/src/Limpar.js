import React from 'react'
import { GlobalContext } from './GlobalContext'

function Limpar() {
  const {limparDados} = React.useContext(GlobalContext);
  return <button onClick={limparDados}>Limpar</button>
}

export default Limpar