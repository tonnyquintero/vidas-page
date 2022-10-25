import React from "react";
//import doctor from '../assets/images/doctor222.png'
import asesoria from '../assets/images/asesoria.gif'
import calificacion from '../assets/images/calificacion.gif'
import certificado from '../assets/images/certificado.gif'
import correlacion from '../assets/images/correlacion.gif'
import noConformidad from '../assets/images/noConformidad.gif'
import styles from "../styles/Services.module.css";


const Services = () => {

  return (
    <section id="services">
      <div className={styles.titles}>
      <h5 className={styles.h5}>Lo que Podemos ofrecerte</h5>
      <h2>Nuestros servicios</h2>
      </div>
      <div className={styles["services_container"]}>
        <article className={styles["service"]}>
        <div className={styles.docContainer}>
        <img className={styles.imgDoctor} src={calificacion} alt="doctor" />
        </div>
          <div className={styles["service_head"]}>
            <h3>Calificación de la perdida de capacidad Laboral</h3>
          </div>

          <ul className={styles.service_list}>
          <p> Se trabaja en base al Manual Único para la Calificación de la Pérdida de la Capacidad Laboral y Ocupacional. Decreto 1507 de 2014, En el que procedemos como primer paso la definición del daño estructural, para luego definir la repercusión BioPsicosocial. Sus etapas consisten en: Evaluación incial, análisis de la información, evaluación integral y entrega del informe y/o calificación</p>
          </ul>
        </article>

        <article className={styles["service"]}>
        <div className={styles.docContainer}>
          <img className={styles.imgDoctor} src={correlacion} alt="doctor" />
        </div>
          <div className={styles["service_head"]}>
            <h3>Correlación Médico Legal</h3>
          </div>

          <ul className={styles["service_list"]}>
          <p>Basado en el derecho civil, y siempre de la mano de un abogado, este servicio busca investigar, determinar y emitir un perito médico que soporte la causalidad o los hechos que afectaron la salud de una persona a corto o largo plazo, dando la apertura de un proceso legal, tal como una mala práctica o negligencia médicos por ejemplo. </p>
          </ul>
        </article>

        <article className={styles["service"]}>
        <div className={styles.docContainer}>
          <img className={styles.imgDoctor} src={asesoria} alt="doctor" />
        </div>
          <div className={styles["service_head"]}>
            <h3>Asesoría Médico-Legal</h3>
          </div>

          <ul className={styles["service_list"]}>
          <p>Contamos con los mejores profesionales a tu servicio, para ofrecerte una guía basada en el conocimiento técnico y juridico en la interpretación de dictamenes médicos o culaquier situación de esta índole, dividido por etapas, buscamos tener un proceso ágil y efectivo direccionado a tu proposito.</p>
          </ul>
        </article>

        <article className={styles["service"]}>
        <div className={styles.docContainer}>
          <img className={styles.imgDoctor} src={certificado} alt="doctor" />
        </div>
          <div className={styles["service_head"]}>
            <h3>Certificado de discapacidad</h3>
          </div>

          <ul className={styles["service_list"]}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor expedita optio voluptatibus odio in neque voluptatum nisi ad. Ut dicta libero illum ab optio ratione veniam nostrum quae neque natus!s</p>
          </ul>
        </article>

        <article className={styles["service"]}>
        <div className={styles.docContainer}>
          <img className={styles.imgDoctor} src={noConformidad} alt="doctor" />
        </div>
          <div className={styles["service_head"]}>
            <h3>Servicio de Apelación o "No Conformidad"</h3>
          </div>

          <ul className={styles["service_list"]}>
              <p>Una vez que recibes una calificación por parte de alguna entidad tal como la EPS, el ARL, Fondo de Pensiones, Junta Regional, etc. Puedes hacer una apelación de "no conformidad" Este servicio cumple con la resolución 1239 del 2022 emitida por la secretaría de salud.</p>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
