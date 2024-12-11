import React, { useRef } from 'react';
import linkedin from "../assets/svgs/linkedin.svg";
import insta from "../assets/svgs/insta.svg";
// import hoverSound from "../assets/audio/pika-pikachu-14757.mp3"
import styles from './OCCard.module.css'; 

function OCCard(props) {
  // const audioRef = useRef(null); 

  // const handleMouseEnter = () => {
  //   if (audioRef.current) {
  //     audioRef.current.play(); 
  //   }
  // };

  return (
    <div className={styles.card} >
      {/* <audio ref={audioRef} src={hoverSound} /> */}
      
      <div className={styles['card-inner']}>
        <div className={styles['card-front']}>
          <div className={styles['card-frame']}>
            <h2 className={styles['team-member-name']}>{props.name}</h2>
            <img src={props.img} alt={props.name} className={styles['team-member-pic']} />
            <p className={styles['team-member-role']}>{props.domain}</p>
          </div>
        </div>
        <div className={styles['card-back']}>
          <div className={styles['social-links']}>
            <a href={props.InstaId} className={styles['social-icon']} target="_blank" rel="noreferrer">
              <img src={insta} width={40} alt="LinkedIn" />
            </a>
            <a href={props.linkedinId} className={styles['social-icon']} target="_blank" rel="noreferrer">
              <img src={linkedin} width={40} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OCCard;


