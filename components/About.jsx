import React from "react";
import styles from "../styles/About.module.css";
import Present from "../public/Bienvenidos a VIDAS.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { useTranslation } from "react-i18next";

const About = () => {
  const [t, i18n] = useTranslation("globals");

  return (
    <div className={styles.about_content}>
      <nav className={styles.navVidas}>
        <a href="">Servicios</a>
        <a href="">Contacto</a>
        <a href="">Ubicación</a>
        <a href="">Conócenos</a>
      </nav>
      <img className={styles.presentation} src={Present} alt="Presentacion" />
      
      <div className={styles.about_cards}>
        <article className={styles.about_card}>
          <FaAward className={styles.about_icon} />
          <h5>Proyecto VIDAS</h5>
          <small>VIDAS realiza sus procedimientos con  estricta ética profesional. Nuestro grupo de profesionales expertos es el que necesita el ESTADO y la sociedad para ayudar a dirimir los conflictos médicos legales, buscando en todos nuestros casos, la verdad objetiva.</small>
        </article>
        <article className={styles.about_card}>
          <FiUsers className={styles.about_icon} />
          <h5>Misión</h5>
          <small>VIDAS existe con la misión primordial de ayudar al cliente a dirimir los conflictos médico legales, por reclamación de derechos ante la pérdida de la salud, objetivando la presencia de secuelas y el grado de afectación biopsicosocial del paciente, respetando el principio de reparación integral.</small>
        </article>
        <article className={styles.about_card}>
          <VscFolderLibrary className={styles.about_icon} />
          <h5>Visión</h5>
          <small>VIDAS será en el año 2025 una compañía referente a nivel nacional en valoración integral del daño a la salud, brindando soluciones objetivas de alta calidad a nuestros clientes y usuarios, con el respaldo y la experiencia de un equipo multi e interdisciplinario de especialistas aportando al mejoramiento de las condiciones de vida y bienestar social de las personas.</small>
        </article>
      </div>
      <p>{t("about.description")}</p>
      <a href="#contact" className={styles["about_button"]}>
        {t("about.letsTalk")}
      </a>
    </div>
  );
};

export default About;
