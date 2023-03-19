import React from 'react'
import styles from './Input.module.css'
function Input({name, label, value, onChange, type, error, onBlur}) {
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
            onChange={onChange}
            onBlur={onBlur}
        />
        {error && <p className={styles.error}>{error}</p>}
        
    </div>
  )
}

export default Input