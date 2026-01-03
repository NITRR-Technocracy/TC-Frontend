import React from "react";
import styles from "./AboutFaqWrapper.module.scss";
import bg from "../../assets/images/About/about-faq-bg.png";

const AboutFaqWrapper = ({ children }) => {
  return (
    <section
      className={styles.wrapper}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className={styles.overlay} />
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default AboutFaqWrapper;
