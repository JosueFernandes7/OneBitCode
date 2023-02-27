import React from 'react'
import { GlobalContext } from './GlobalContext'

function Imagem() {
  const user = React.useContext(GlobalContext);
  return (
    <img src={user.src} alt={user.alt}></img>
  )
}

export default Imagem