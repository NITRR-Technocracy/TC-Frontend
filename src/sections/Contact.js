// import Title from '../components/Title';
import PTitle from '../components/PokemonTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import styles from "./contact.module.css"

const Contact = () => {
  const color="CONTACT";
  const noncolor="US";
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section id="contact">
      <div className={styles.ContactContainer}>
        <PTitle id ="title"color={color} noncolor={noncolor}/>
      
        <div className="fn_cs_contact_form">
          <form
            action="/"
            method="post"
            className={styles.contact_form}
            id="contact_form"
            autoComplete="off"
          >
            <div className={styles.input_list}>
              <ul>
                <li data-aos="fade-down">
                  <input id={styles.name} type="text" placeholder="Your Name *" />
                </li>
                <li data-aos="fade-down">
                  <input id={styles.email} type="text" placeholder="Your Email *" />
                </li>
                <li data-aos="fade-down">
                  <input
                    id={styles.tel}
                    type="text"
                    placeholder="Your Phone (optional)"
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id={styles.subject}
                    type="text"
                    placeholder="Topic (optional)"
                  />
                </li>
                <li className="full" data-aos="fade-down">
                  <textarea
                    id={styles.message}
                    placeholder="Your Message *"
                    defaultValue={""}
                  />
                </li>
                <li className="full" data-aos="fade-down">
                  <div className="mw300">
                    <a
                      id={styles.send_message}
                      href="/"
                      className="metaportal_fn_button full"
                    >
                      <span className={styles.message_button}>Send Message</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="returnmessage"
              data-success="Your message has been received, We will contact you soon."
            />
            <div data-aos="fade-down" className="empty_notice">
              <span>! Please Fill Required Fields !</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
