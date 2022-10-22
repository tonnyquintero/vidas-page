import React from 'react'
import Present from "../assets/images/vidasHero.png";
import bienvenido from "../assets/images/Bienvenidos.gif";
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
        <div className={styles.imgContainer}>
        <img className={styles.presentation} src={Present} alt="Presentacion" />
        <img className={styles.bienvenido} src={bienvenido} alt="bienvenida" />
      </div>
    </div>
  )
}

export default Header