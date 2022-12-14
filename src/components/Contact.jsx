import React, {useRef} from "react";
import emailjs from 'emailjs-com'
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import styles from "../styles/Contact.module.css";


const Contact = () => {
  
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yj6pdsc', 'template_q9vshyq', form.current, 'Wl-IzJ1QuHrMQ0XAc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id="contact">

      <div className={styles.mainContainerContact}>
      <h2 className={styles.mainTitle}>Contáctanos</h2>
        <div className={styles.containor}>
          <div className={styles["contact_options"]}>
            <article className={styles["contact_option"]}>
              <MdOutlineEmail className={styles["contact_option-icon"]} />
              <h4>Email</h4>
              <h5>alcervalorador@gmail.com</h5>
              <a
                className={styles["clasa"]}
                href="mailto:alcervalorador@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Enviar
              </a>
            </article>

            <article className={styles["contact_option"]}>
              <RiMessengerLine className={styles["contact_option-icon"]} />
              <h4>Messenger</h4>
              <h5>Sus médicos</h5>
              <a
                className={styles["clasa"]}
                href="https://m.me/susmedicos.12"
                target="_blank"
                rel="noreferrer"
              >
                Enviar
              </a>
            </article>

            <article className={styles["contact_option"]}>
              <BsWhatsapp className={styles["contact_option-icon"]} />
              <h4>Whatsapp</h4>
              <h5>+57 3116142463</h5>
              <a
                className={styles["clasa"]}
                href="https://api.whatsapp.com/send?phone=573113725399"
                target="_blank"
                rel="noreferrer"
              >
                Enviar
              </a>
            </article>
          </div>
          {/* <form className={styles["form"]} ref={form}
          onSubmit={sendEmail}>
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder='Nombre y Apellido'
              required
            />
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder='Correo Electrónico'
              required
            />
            <textarea
              className={styles.textarea}
              name="message"
              placeholder='Estado del Usuario'
              rows="2"
              required
            ></textarea>
            <textarea
              className={styles.textarea}
              name="message"
              placeholder='Necesidad del Usuario'
              rows="7"
              required
            ></textarea>
            <button type="submit" className={styles.contactButton}>
              Enviar
            </button>
          </form> */}

        <div className={styles.box2}>
        <form ref={form} onSubmit={sendEmail} className={styles.form2}>
            <h2>Envíanos tu mensaje</h2>
            <div className={styles.inputBox}>
                <input type="text" name="name" placeholder='Nombre y Apellido' required="required" />
                <i></i>
            </div>
            <div className={styles.inputBox}>
                <input type="email" name='email' placeholder='Correo Electrónico' required="required" />
                <i></i>
            </div>
          <textarea className={styles.inputBox} name="message" placeholder='Necesidad del Usuario' rows="7" required></textarea>
          <button type='submit' className={styles.btnPrimary1}>Enviar</button>
        </form>
    </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
