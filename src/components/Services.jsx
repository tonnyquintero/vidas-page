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
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor expedita optio voluptatibus odio in neque voluptatum nisi ad. Ut dicta libero illum ab optio ratione veniam nostrum quae neque natus!s</p>
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
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor expedita optio voluptatibus odio in neque voluptatum nisi ad. Ut dicta libero illum ab optio ratione veniam nostrum quae neque natus!s</p>
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
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor expedita optio voluptatibus odio in neque voluptatum nisi ad. Ut dicta libero illum ab optio ratione veniam nostrum quae neque natus!s</p>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor expedita optio voluptatibus odio in neque voluptatum nisi ad. Ut dicta libero illum ab optio ratione veniam nostrum quae neque natus!s</p>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
