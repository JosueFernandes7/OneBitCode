import React from 'react';

const Radio = ({options, value, setValue}) => {
  console.log(options);
  return (
    <>
    {options.map((op, index) => (
      <label key={index}>
        <input 
        type="radio"
        checked={value === op}
        value={op}
        onChange={({target}) =>setValue(target.value)}
        >
        </input>
        {op}
      </label>
    ))}
    {/* {options.map((option, index) =>( 
    )} */}
    </>
  )
}

export default Radio;