import React from 'react'

function Checkbox({options, value, setValue}) {
  console.log(value);
  function handleChange({target}){
    const {checked} = target;
    if(checked) setValue([...value, target.value]);
    else setValue(value.filter(value => value !== target.value));
  }
  return (
    <>
      {options.map((option, index) => (
        <label key={index}>
          <input 
          checked={value.includes(option)}
          type="checkbox"
          value={option}
          onChange={handleChange}
          ></input>
          {option}
        </label>
      ))}
    </>
  )
}

export default Checkbox
