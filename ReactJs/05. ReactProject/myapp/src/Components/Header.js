import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
function Header() {
  return (
    <div>
      <nav className={styles.header}>
        <ul>
          <li>
            <NavLink className={styles.link } to="/" end >Produtos</NavLink>
          </li>
          <li>
            <NavLink className={styles.link } to="contato">Contato</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
