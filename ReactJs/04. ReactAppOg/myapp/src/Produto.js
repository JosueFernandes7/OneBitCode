import React from 'react'
import { NavLink, useParams, Outlet } from 'react-router-dom'

function Produto() {
  const params = useParams();

  return (
    <div>
      <h1>Produto : {params.id}</h1>
      <nav>
        <NavLink to="">Descricao</NavLink>
        <NavLink to="avaliacao">avaliacao</NavLink>
        <NavLink to="customizacao">customizacao</NavLink>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Produto