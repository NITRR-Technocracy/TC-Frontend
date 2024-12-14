import React from "react";
import styles from "./About.module.css";
import Title from "./Title";
import FireAnimation from "./FlameAnimation";
import prizeIcon from "../assets/images/HomePage/trophy.png";
import eventsIcon from "../assets/images/HomePage/events.png";
import participantsIcon from "../assets/images/HomePage/participants.png";
import collegesIcon from "../assets/images/HomePage/colleges.png";
import mantis from "../assets/images/HomePage/mantis-about.png";
import CountUp from "react-countup";

function About() {
  return (
    <div className={styles.about_container}>
      <div className={styles.about_cont_in}>
        {/* <div className="FlameAni-cont" style={{ position: "absolute", width: "100%", height: "100%" }}> */}
        {/* <FireAnimation /> */}
        {/* </div> */}
        {/* <Title color={"ABOUT"} noncolor={"US"} /> */}
        {/* <h1 className={styles.about_title}>ABOUT</h1> */}
        <div className={styles.about_title}>
          <span style={{ "--i": 0 }}>A</span>
          <span style={{ "--i": 1 }}>B</span>
          <span style={{ "--i": 2 }}>O</span>
          <span style={{ "--i": 3 }}>U</span>
          <span style={{ "--i": 4 }}>
            T <img src={mantis} alt="" />
          </span>
        </div>
        <div className={styles.about_des_out}>
          <div className={styles.about_des_in}>
            <p>
              Team Technocracy is the official technical committee of NIT
              Raipur, dedicated to fostering innovation, technical skills, and a
              passion for technology among students. We organize various
              technical events under the Aavartan fest, workshops, and projects
              throughout the year.
            </p>
          </div>
        </div>
        <div className={styles.about_boxes} data-aos="fade-up">
          <div className={styles.about_box}>
            <img className={styles.abox_icon} src={eventsIcon} alt="icon" />
            {/* <div className={styles.abox_num}> 10,000 +</div> */}
            <CountUp
              start={0}
              end={10000}
              suffix="+"
              delay={0}
              enableScrollSpy="true"
              scrollSpyOnce='true'
            >
              {({ countUpRef }) => (
                <div className={styles.abox_num}>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
            <div className={styles.abox_Title}>FOOTFALL</div>
          </div>
          <div className={styles.about_box}>
            <img className={styles.abox_icon} src={collegesIcon} alt="icon" />
            {/* <div className={styles.abox_num}> 50 +</div> */}
            <CountUp
              start={0}
              end={50}
              suffix="+"
              delay={0}
              enableScrollSpy="true"
              scrollSpyOnce="true"
            >
              {({ countUpRef }) => (
                <div className={styles.abox_num}>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
            <div className={styles.abox_Title}>COLLEGES</div>
          </div>
          <div className={styles.about_box}>
            <img className={styles.abox_icon} src={eventsIcon} alt="icon" />
            {/* <div className={styles.abox_num}> 30 +</div> */}
            <CountUp
              start={0}
              end={30}
              suffix="+"
              delay={0}
              enableScrollSpy="true"
              scrollSpyOnce="true"
            >
              {({ countUpRef }) => (
                <div className={styles.abox_num}>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
            <div className={styles.abox_Title}>EVENTS</div>
          </div>
          <div className={styles.about_box}>
            <img className={styles.abox_icon} src={prizeIcon} alt="icon" />
            {/* <div className={styles.abox_num}> 6 Lacs +</div> */}
            <CountUp
              start={0}
              end={6}
              suffix=" Lacs+"
              delay={0}
              enableScrollSpy="true"
              scrollSpyOnce="true"
            >
              {({ countUpRef }) => (
                <div className={styles.abox_num}>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
            <div className={styles.abox_Title}>PRIZES</div>
          </div>
          <div className={styles.about_box}>
            <img
              className={styles.abox_icon}
              src={participantsIcon}
              alt="icon"
            />
            {/* <div className={styles.abox_num}> 200 +</div> */}
            <CountUp
              start={0}
              end={200}
              suffix="+"
              delay={0}
              enableScrollSpy="true"
              scrollSpyOnce="true"
            >
              {({ countUpRef }) => (
                <div className={styles.abox_num}>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
            <div className={styles.abox_Title}>PARTICIPANTS</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
