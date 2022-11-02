import React from 'react'
import logoBlanco from '../assets/images/logo-blanco.png'
import styles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <a href="https://www.sus-medicos.com/"><img className={styles.imgLogo} src={logoBlanco} alt="logo" /></a>
        <nav className={styles.navVidas}>
        <a href="#services">Servicios</a>
        <a href="#contact">Contacto</a>
        <a target='blank' href='https://www.google.com/maps/dir//Calle+29+AA+%2350+-+09,+Medell%C3%ADn,+Antioquia/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8e4429b50c9873d9:0xccbf7631256b0d4f?sa=X&ved=2ahUKEwiK_srhzpnsAhXSwFkKHbIuAfkQ9RcwC3oECA8QBA'>Ubicación</a>
        <a href="#contact">Cotización</a>
        <a href="#about">Conócenos</a>
      </nav>
    </div>
  )
}

export default Nav