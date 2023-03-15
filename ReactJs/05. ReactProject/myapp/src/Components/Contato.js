import React from 'react'
import styles from "./Contato.module.css";
import foto from '../img/contato.jpg'
import Head from './Head';
function Contato() {
  return (
    <section className={styles.contato + " " + "animeLeft"}>
      <Head title="Contato" description="Essa é a página de Contato"/>
      <img src={foto} alt="Maquina de Escrever"></img>
      <div>
        <h1>Entre em Contato.</h1>
        <ul className={styles.dados}>
          <li>Josue@email.com</li>
          <li>55 9999-9999</li>
          <li>Rua logo aqui, 567</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato