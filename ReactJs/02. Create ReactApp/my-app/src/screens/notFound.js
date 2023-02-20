import React from 'react'
import { Link } from 'react-router-dom'
const NotFoundScreen = () => {
  return (
    <div>
      <h1>Página Não Encontrada</h1>
      <Link to="/"> Voltar a Listagem </Link>
    </div>
  )
}

export default NotFoundScreen
