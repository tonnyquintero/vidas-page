import React from 'react'
import LogoSeñas from '../assets/images/logo-vidas-señas.png'
import styles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <a href="/"><img className={styles.imgLogo} src={LogoSeñas} alt="logo" /></a>
        <nav className={styles.navVidas}>
        <a href="/">Servicios</a>
        <a href="/">Contacto</a>
        <a href="/">Ubicación</a>
        <a href="/">Cotización</a>
        <a href="/">Conócenos</a>
      </nav>
    </div>
  )
}

export default Nav