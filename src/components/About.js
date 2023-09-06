import React, { useState } from "react";
import styles from "./About.module.css";
import Title from "./Title";

function About() {
  return (
    <div className={styles.about_container}>
      <Title color={"ABOUT"} noncolor={"US"} />
      <div className="fn_cs_join">
        <div className="join_in">
          <p>
            Team Technocracy is the official technical committee of NIT Raipur,
            dedicated to fostering innovation, technical skills, and a passion
            for technology among students. We organize various technical events
            under the Aavartan fest, workshops, and projects throughout the
            year.
          </p>
        </div>
      </div>

          <div className={styles.about_boxes}>
            <div className={styles.about_box}>
              <img
                className={styles.abox_icon}
                src="https://www.tryst-iitd.org/static/media/about-5.973f96e28be79bfad0f1c0b987f3ab85.svg"
                alt="icon"
              />
              <div className={styles.abox_num}>10,000 +</div>
              <div className={styles.abox_Title}>FOOTFALL</div>
            </div>
            <div className={styles.about_box}>
              <img
                className={styles.abox_icon}
                src="https://www.tryst-iitd.org/static/media/about-4.9b0a31e0bb61d4ed5a53c19e6379b710.svg"
                alt="icon"
              />
              <div className={styles.abox_num}>50 +</div>
              <div className={styles.abox_Title}>COLLEGES</div>
            </div>
            <div className={styles.about_box}>
              <img
                className={styles.abox_icon}
                src="https://www.tryst-iitd.org/static/media/about-3.d19bb113f00f387d3f16f4558b746bc7.svg"
                alt="icon"
              />
              <div className={styles.abox_num}>30 +</div>
              <div className={styles.abox_Title}>EVENTS</div>
            </div>
            <div className={styles.about_box}>
              <img
                className={styles.abox_icon}
                src="https://www.tryst-iitd.org/static/media/about-1.942f425aee9ada78dbb276060beebec2.svg"
                alt="icon"
              />
              <div className={styles.abox_num}>6 Lacs +</div>
              <div className={styles.abox_Title}>PRIZES</div>
            </div>
            <div className={styles.about_box}>
              <img
                className={styles.abox_icon}
                src="https://www.tryst-iitd.org/static/media/about-2.0662e7d746094da22acfb69f414a508b.svg"
                alt="icon"
              />
              <div className={styles.abox_num}>200 +</div>
              <div className={styles.abox_Title}>PARTICIPANTS</div>
            </div>
      </div>
    </div>
  );
}

export default About;
