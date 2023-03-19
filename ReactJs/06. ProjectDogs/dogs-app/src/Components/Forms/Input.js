import React from 'react'
import styles from './Input.module.css'
function Input({name, label, value, setValue, type}) {
  return (
    <div className={styles.wrapper}>
        <label htmlFor={name} className={styles.label}>
            {label}
        </label>
        <input 
            className={styles.input} 
            name={name}
            id={name} 
            type={type} 
            value={value} 
            onChange={(({target}) => setValue(target.value))}
        />
        <p className={styles.error}>Error</p>
    </div>
  )
}

export default Input