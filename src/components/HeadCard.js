import React, { useRef } from 'react';
import styles from './HeadCard.module.css';
import linkedin from "../assets/svgs/linkedin.svg";
import insta from "../assets/svgs/insta.svg";
import hoverSound from "../assets/audio/pika-pikachu-14757.mp3"; // Import the hover sound

function HeadCard(props) {
  const audioRef = useRef(null); // Create a ref for the audio element

  const handleMouseEnter = () => {
    if (audioRef.current) {
      // Play only if audio is allowed to autoplay after user interaction
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay prevented. User interaction required before playing audio.");
        });
      }
    }
  };

  return (
    <div className={styles.parentcard} onMouseEnter={handleMouseEnter}>
      {/* Hidden audio element */}
      <audio ref={audioRef} src={hoverSound} />

      <div className={styles.card}>
        <img className={styles.image} src={props.img} alt={props.name} />
        <div className={styles.content}>
          <p className={styles.name}>{props.name}</p>
          <p className={styles.position}>{props.domain}</p>
          <div className={styles.social}>
            <p>
              <a className={styles.linkedin} href={props.linkedinId} target="_blank" rel="noreferrer">
                <img src={linkedin} width={40} alt="LinkedIn" />
              </a>
            </p>
            <p>
              <a className={styles.insta} href={props.InstaId} target="_blank" rel="noreferrer">
                <img src={insta} width={40} alt="Instagram" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadCard;

