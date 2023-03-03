import React from 'react'

function Select({ options, value, setValue }) {
  return (
    <select value={value} onChange={({target}) => setValue(target.value)}>
      <option value="" disabled>Selecione</option>
      {options.map((option, index) => (
        <option
          style={{ textTransform: 'capitalize' }}
          key={index}
          value={option}
        >
          {option}
        </option>
      ))}
    </select>
  )
}

export default Select
