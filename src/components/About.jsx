import React from "react";
import styles from "../styles/About.module.css";
import mision from '../assets/images/objetivo.png'
import libro from '../assets/images/libro.png'
import vision from '../assets/images/visionary.png'


const About = () => {
  

  return (
    <>
    <section id="about">
    <div className={styles.about_content}>
      <h1>Acerca de Nosótros</h1>
      <div className={styles.about_cards}>
        <article className={styles.about_card}>
        <img src={libro} alt='foto de perfil' className={styles.about_iconi} />
          <h5>Proyecto VIDAS</h5>
          <small>VIDAS realiza sus procedimientos con  estricta ética profesional. Nuestro grupo de profesionales expertos es el que necesita el ESTADO y la sociedad para ayudar a dirimir los conflictos médicos legales, buscando en todos nuestros casos, la verdad objetiva.</small>
        </article>
        <article className={styles.about_card}>
          <img src={mision} alt='mision' className={styles.about_iconi} />
          <h5>Misión</h5>
          <small>VIDAS existe con la misión primordial de ayudar al cliente a dirimir los conflictos médico legales, por reclamación de derechos ante la pérdida de la salud, objetivando la presencia de secuelas y el grado de afectación biopsicosocial del paciente, respetando el principio de reparación integral.</small>
        </article>
        <article className={styles.about_card}>
          <img src={vision} alt='vision' className={styles.about_iconi} />
          <h5>Visión</h5>
          <small>VIDAS será en el año 2025 una compañía referente a nivel nacional en valoración integral del daño a la salud, brindando soluciones objetivas de alta calidad a nuestros clientes y usuarios, con el respaldo y la experiencia de un equipo multi e interdisciplinario de especialistas aportando al mejoramiento de las condiciones de vida y bienestar social de las personas.</small>
        </article>
      </div>
      <a href="#contact" className={styles.aboutButton}>
        Pide tu Cita
      </a>
    </div>
    </section>
    </>
  );
};

export default About;
