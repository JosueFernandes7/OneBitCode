import React from 'react'
import Input from './Form/Input'
import Select from './Form/Select';
import Radio from './Form/Radio';
const App = () => {
  const [nome,setNome] = React.useState('');
  const [email,setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('')
  const [cor, setCor] = React.useState('vermelho');
  return (
    <form>
      <Radio options={['azul','vermelho']} value={cor} setValue = {setCor}/>
      <Select options={['smartphone','tablet']} value={produto} setValue={setProduto}/>
      <Input label="Nome" id="nome" value={nome} setValue={setNome} required/>
      <Input label="Email" id="email" type="email" value={email} setValue={setEmail} />
      <button>Enviar</button>
    </form>
  )
}

export default App
