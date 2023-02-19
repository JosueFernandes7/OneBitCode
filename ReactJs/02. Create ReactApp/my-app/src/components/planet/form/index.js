import React, { Fragment, useState } from 'react'

const initialState = {
  name: '',
}
const Form = (props) => {
  const [fields, setFields] = useState(initialState)
  const handleFieldsChange = (e) => {
    setFields({
      ...fields, // cria uma copia do fields
      [e.currentTarget.name]: e.currentTarget.value,
    }) // atualiza a propriedade
  }
  const handleSubmitChange = (event) => {
    props.addSatelite(fields)
    event.preventDefault();
    setFields(initialState)

  }

  return (
    <Fragment>
      <form onSubmit={handleSubmitChange}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            name="name"
            value = {fields.name}
            onChange={handleFieldsChange}
          />
        </div>
        <br />
        <input type="submit" />
      </form>
    </Fragment>
  )
}

export default Form
