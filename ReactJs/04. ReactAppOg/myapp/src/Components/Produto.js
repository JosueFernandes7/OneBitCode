import React from 'react'
import styles from './Produto.module.css'
function Produto() {
  console.log(styles.titulo);
  function handleClick({target}){
    target.classList.toggle(styles.comprar);
  }
  return (
    <div>
      <h1 className={styles.titulo}>NoteBook</h1>
      <p className={styles.preco}>Preço</p>
      <button onClick={handleClick}>Comprar</button>
    </div>
  )
}

export default Produto