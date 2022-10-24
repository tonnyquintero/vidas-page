import React from 'react'
import Present from "../assets/images/vidasHero.png";
import logoSeña from '../assets/images/logo-vidas-señas.png'
import proceso from '../assets/images/proceso vidas.png'
import bienvenido from "../assets/images/Bienvenidos.gif";
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={styles.headerContai}>
        <div className={styles.imgContainer}>
        <img className={styles.presentation} src={proceso} alt="Presentacion" />
        <img className={styles.presentation} src={Present} alt="Presentacion" />
        <div className={styles.headerContaino}>
        <img className={styles.bienvenidoLogo} src={logoSeña} alt="logo" />
        <img className={styles.bienvenido} src={bienvenido} alt="bienvenida" />
        </div>
      </div>
    </div>
  )
}

export default Header