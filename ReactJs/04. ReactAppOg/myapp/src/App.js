import React from 'react'
import Input from './Input'
import Select from './Select';
const App = () => {
  const [nome,setNome] = React.useState('');
  const [email,setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('')
  return (
    <form>
      <Select options={['smartphone','tablet']} value={produto} setValue={setProduto}/>
      <Input label="Nome" id="nome" value={nome} setValue={setNome} required/>
      <Input label="Email" id="email" type="email" value={email} setValue={setEmail} />
      <button>Enviar</button>
    </form>
  )
}

export default App
