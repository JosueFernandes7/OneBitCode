import React from 'react'

const App = () => {
  const formFields = [
    {
      id: 'nome',
      label: 'Nome',
      type: 'text',
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
    },
    {
      id: 'senha',
      label: 'Senha',
      type: 'password',
    },
    {
      id: 'cep',
      label: 'Cep',
      type: 'text',
    },
    {
      id: 'rua',
      label: 'Rua',
      type: 'text',
    },
    {
      id: 'numero',
      label: 'Numero',
      type: 'text',
    },
    {
      id: 'bairro',
      label: 'Bairro',
      type: 'text',
    },
    {
      id: 'cidade',
      label: 'Cidade',
      type: 'text',
    },
    {
      id: 'estado',
      label: 'Estado',
      type: 'text',
    },
  ]
  const [form, setForm] = React.useState(
    formFields.reduce((acc, { id }) => {
      return { ...acc, [id]: '' }
    }, {})
  )

  const [response, setResponse] = React.useState(null)

  const useFetch = async (event) => {
    event.preventDefault()
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // form é o objeto com os dados do formulário
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response)
      console.log(response);
    })
  }
  function handleChange({ target }) {
    const { id, value } = target
    console.log(id, value)
    // setForm(...form, [id]: value);
    setForm({ ...form, [id]: value })
  }
  return (
    <form onSubmit={useFetch}>
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            id={id}
            value={form.id}
            onChange={handleChange}
          ></input>
        </div>
      ))}
      <button>Enviar</button>
      {response && response.ok && <p>Usuário Criado!!</p>}
    </form>
  )
}

export default App
