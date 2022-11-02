import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';

import styles from '../styles/NavMobile.module.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className={styles.navbar}>

      {/* <div className={styles['loguito']}>
            <Image className='logo' src={Me} alt='Logo' />
          </div> */}
        
        <div className={styles.menuIcon} onClick={handleClick}>
          <i><GiHamburgerMenu /></i>
        </div>
        <ul className={click ? styles.navMenuActive : styles.navMenu}>
          <li className={styles.navItem}>
            <a href='#' className={styles.navLinks} onClick={closeMobileMenu}>
              Inicio
            </a>
          </li>
          <li
            className={styles.navItem}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <a
              href='#services'
              className={styles.navLinks}
              onClick={closeMobileMenu}
            >
              Servicios <i className={styles['fas fa-caret-down']} />
            </a>
          </li>
          <li
            className={styles.navItem}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <a
              target='blank'
              href='https://susmedicos.sunu.be/login'
              className={styles.navLinks}
              onClick={closeMobileMenu}
            >
              Acceso Plataforma <i className={styles['fas fa-caret-down']} />
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              target='blank'
              href='https://www.google.com/maps/dir//Calle+29+AA+%2350+-+09,+Medell%C3%ADn,+Antioquia/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8e4429b50c9873d9:0xccbf7631256b0d4f?sa=X&ved=2ahUKEwiK_srhzpnsAhXSwFkKHbIuAfkQ9RcwC3oECA8QBA'
              className={styles.navLinks}
              onClick={closeMobileMenu}
            >
              Ubicación
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href='#contact'
              className={styles.navLinks}
              onClick={closeMobileMenu}
            >
              Contáctanos
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;