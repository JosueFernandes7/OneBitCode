import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Sobre from './Sobre'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="sobre" element={<Sobre/>}/>
        <Route path="*" element={<div>404</div>}/>
      </Routes>

    </BrowserRouter>
    )
}

export default App