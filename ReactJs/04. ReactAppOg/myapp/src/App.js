import React from 'react'
import Produto from './Produto'
import { GlobalStorage } from './GlobalContext'
import Limpar from './Limpar'
function App() {
  return (
  <GlobalStorage> 
    <Limpar/>
    <Produto/>
  </GlobalStorage>)

}

export default App
