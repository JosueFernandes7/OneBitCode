import React from 'react'

function Titulo({titulo,cor}) {
  return (
    <h1 style={{color: cor}}>{titulo}</h1>
  )
}

export default Titulo