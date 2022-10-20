import React from 'react'
import styles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <div className={styles.navContainer}>
        <nav className={styles.navVidas}>
        <a href="/">Servicios</a>
        <a href="/">Contacto</a>
        <a href="/">Ubicación</a>
        <a href="/">Conócenos</a>
      </nav>
    </div>
  )
}

export default Nav