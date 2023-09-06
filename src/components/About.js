import React, { useState, useEffect } from "react";
import styles from "./About.module.css";
import Title from "./Title";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function About() {
  const [counterOn, setCounterOn] = useState(false);
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
      <ScrollTrigger style={{width:"100%"}} onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
          <div className={styles.about_boxes}>
            <div className={styles.about_box}>
              <img
                className={styles.abox_icon}
                src="https://www.tryst-iitd.org/static/media/about-5.973f96e28be79bfad0f1c0b987f3ab85.svg"
                alt="icon"
              />
              <div className={styles.abox_num}> {counterOn && <CountUp start={9000} end={10000} duration={1.5} delay={0}/>} +</div>
              <div className={styles.abox_Title}>FOOTFALL</div>
            </div>
            <div className={styles.about_box}>
              <img
                className={styles.abox_icon}
                src="https://www.tryst-iitd.org/static/media/about-4.9b0a31e0bb61d4ed5a53c19e6379b710.svg"
                alt="icon"
              />
              <div className={styles.abox_num}> {counterOn && <CountUp start={0} end={50} duration={1.5} delay={0}/>} +</div>
              <div className={styles.abox_Title}>COLLEGES</div>
            </div>
            <div className={styles.about_box}>
              <img
                className={styles.abox_icon}
                src="https://www.tryst-iitd.org/static/media/about-3.d19bb113f00f387d3f16f4558b746bc7.svg"
                alt="icon"
              />
              <div className={styles.abox_num}> {counterOn && <CountUp start={0} end={30} duration={1.5} delay={0}/>} +</div>
              <div className={styles.abox_Title}>EVENTS</div>
            </div>
            <div className={styles.about_box}>
              <img
                className={styles.abox_icon}
                src="https://www.tryst-iitd.org/static/media/about-1.942f425aee9ada78dbb276060beebec2.svg"
                alt="icon"
              />
              <div className={styles.abox_num}> {counterOn && <CountUp start={0} end={6} duration={1.5} delay={0}/>} Lacs +</div>
              <div className={styles.abox_Title}>PRIZES</div>
            </div>
            <div className={styles.about_box}>
              <img
                className={styles.abox_icon}
                src="https://www.tryst-iitd.org/static/media/about-2.0662e7d746094da22acfb69f414a508b.svg"
                alt="icon"
              />
              <div className={styles.abox_num}> {counterOn && <CountUp start={0} end={200} duration={1.5} delay={0}/>} +</div>
              <div className={styles.abox_Title}>PARTICIPANTS</div>
            </div>
      </div>
      </ScrollTrigger>
    </div>
  );
}

export default About;
