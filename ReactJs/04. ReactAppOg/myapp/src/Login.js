import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  
  function handleLogin() {
    console.log("Usuario Logado");
    navigate('/')
  }
  return <button style={{margin: "20px 0"}}onClick={handleLogin}>Logar</button>
  
}

export default Login