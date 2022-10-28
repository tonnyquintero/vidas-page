import React, { useState } from "react";
import Modal from "./Modal";
//import doctor from '../assets/images/doctor222.png'
import asesoria from '../assets/images/asesoria.gif'
import calificacion from '../assets/images/calificacion.gif'
import certificado from '../assets/images/certificado.gif'
import correlacion from '../assets/images/correlacion.gif'
import noConformidad from '../assets/images/noConformidad.gif'
import styles from "../styles/Services.module.css";


const Services = () => {

  const [openModal, setOpenModal] = useState(false);

    const onClickButton = () => {
      if (openModal) {
          setOpenModal(false);
      } else {
          setOpenModal(true);
      }
  };

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
          <p className={styles.pService}> Se trabaja en base al Manual Único para la Calificación de la Pérdida de la Capacidad Laboral y Ocupacional. Decreto 1507 de 2014, En el que procedemos como primer paso la definición del daño estructural, para luego definir la repercusión BioPsicosocial. Sus etapas consisten en: Evaluación incial, análisis de la información, evaluación integral y entrega del informe y/o calificación</p>
          <div className={styles.buttonModalContainer}>
          <button className={styles.openModalButton} onClick={() => onClickButton()}>Procedimiento</button>

          {!!openModal && (
          <Modal selector="#modal" setOpenModal={setOpenModal} openModal={openModal}>
              <div className={styles.modalContainer}>
              <div className={styles.modalButton}>
              <button onClick={() => onClickButton()} className={styles.closeButton}>
                  X
              </button>
              </div>
              <div className={styles.modalContent}>
                <h3>Determinación del Origen de la Enfermedad: </h3>
                <h4>¿Qué es el proceso de calificación de origen?</h4>
                <p> Es el procedimiento por el cual se determina si la situación que conlleva a la enfermedad o el accidente ocurre por causa del trabajo (Origen Laboral) o si ocurre por causas que no está relacionada con la labor desempeñada y que se determina de (Origen Común), de acuerdo con lo establecido por la normatividad. BAJO LA RESOLUCIÓN  2569 DE 1999 <br />
                El origen debe estar definido al momento de calificar, puede darse de común o profesional (laboral) si la determinación del origen es  profesional se demuestra. 
                Ir al inicio ARTÍCULO 7o. CRITERIOS DIAGNÓSTICOS PARA CALIFICAR EL ORIGEN PROFESIONAL.
                La calificación del origen profesional de las enfermedades debe sustentarse en la historia clínica que soporte clínica y paraclínicamente el diagnóstico médico y en los antecedentes laborales, que permitan conocer la exposición a los factores de riesgo en las diversas ocupaciones u oficios, en los cuales se ha desempeñado el trabajador, como lo establece el Decreto 1832 de 1994. <br />
                ¿Como se determina el origen de una enfermedad laboral? <br />
                Conforme a lo establecido en el Decreto 1832 de 1994, la calificación de la enfermedad será de origen común cuando no exista relación de causa efecto entre los factores de riesgo presentes en el sitio de trabajo, actual o anteriores, con la enfermedad diagnosticada. <br />
                </p>
                <h3>Fecha de Estructuración:</h3>
                <p>Se entiende como la fecha en que una persona pierde un grado o porcentaje de su capacidad laboral u ocupacional, de cualquier origen, como consecuencia de una enfermedad o accidente, y que se determina con base en la evolución de las secuelas que han dejado éstos <br />
                Decreto 917 de 1999; artículo 3. FECHA DE ESTRUCTURACIÓN O DECLARATORIA DE LA PÉRDIDA DE LA CAPACIDAD LABORAL. Es la fecha en que se genera en el individuo una pérdida en su capacidad laboral en forma permanente y definitiva. Para cualquier contingencia, esta fecha debe documentarse con la historia clínica, los exámenes clínicos y de ayuda diagnóstica, y puede ser anterior o corresponder 
                a la fecha de calificación. En todo caso, mientras dicha persona reciba subsidio por incapacidad temporal, no habrá lugar a percibir las prestaciones derivadas de la invalidez.
                </p>
              </div>
              </div>
          </Modal>
          )}
          </div>
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
          <p className={styles.pService}>Basado en el derecho civil, y siempre de la mano de un abogado, este servicio busca investigar, determinar y emitir un perito médico que soporte la causalidad o los hechos que afectaron la salud de una persona a corto o largo plazo, dando la apertura de un proceso legal, tal como una mala práctica o negligencia médicos por ejemplo. </p>
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
          <p className={styles.pService}>Contamos con los mejores profesionales a tu servicio, para ofrecerte una guía basada en el conocimiento técnico y juridico en la interpretación de dictamenes médicos o culaquier situación de esta índole, dividido por etapas, buscamos tener un proceso ágil y efectivo direccionado a tu proposito.</p>
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
          <p className={styles.pService}>Es el procedimiento de valoración clínica multidisciplinaria simultánea, fundamentado en la Clasificación Internacional del Funcionamiento, de la Discapacidad y de la Salud –CIF-, que permite identificar las deficiencias corporales, incluyendo las psicológicas, las limitaciones en la actividad y las 
          restricciones en la participación que presenta una persona, cuyos resultados se expresan en el correspondiente certificado, y son parte integral del RLCPD. Bajo la Resolución 1239 de 2022.</p>
          <div className={styles.buttonModalContainer}>
          <button className={styles.openModalButton}><a className={styles.openModalButtonA} target='blank' href="https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%201239%20de%202022.pdf">Resolución 1239 de 2022</a></button>
          </div>
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
              <p className={styles.pService}>Una vez que recibes una calificación por parte de alguna entidad tal como la EPS, el ARL, Fondo de Pensiones, Junta Regional, etc. Puedes hacer una apelación de "no conformidad" Este servicio cumple con la resolución 1239 del 2022 emitida por la secretaría de salud.</p>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
