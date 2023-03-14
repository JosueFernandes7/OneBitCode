import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Login from './Login'
import NaoEncontrada from './NaoEncontrada'
import Sobre from './Sobre'
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="sobre" element={<Sobre/>}/>
        <Route path="*" element={<NaoEncontrada/>}/>
      </Routes>

    </BrowserRouter>
    )
}

export default App