import React, { useRef } from 'react';
import styles from './HeadCard.module.css';
import linkedin from "../assets/svgs/linkedin.svg";
import insta from "../assets/svgs/insta.svg";
import hoverSound from "../assets/audio/pika-pikachu-14757.mp3"; // Import the hover sound

function HeadCard({ name, img, domain, InstaId, linkedinId }) {
  // const audioRef = useRef(null);  Create a ref for the audio element

  // const handleMouseEnter = () => {
  //   if (audioRef.current) {
  //      Play only if audio is allowed to autoplay after user interaction
  //     const playPromise = audioRef.current.play();
      
  //     if (playPromise !== undefined) {
  //       playPromise.catch(error => {
  //         console.log("Autoplay prevented. User interaction required before playing audio.");
  //       });
  //     }
  //   }
  // };

  return (
    <div className={styles.card}>
      <div className={styles.boxshadow}></div>
      <div className={styles.main}>
        <div className={styles.top}></div>
        <div className={`${styles.side} ${styles.left}`}></div>
        <div className={`${styles.side} ${styles.right}`}></div>
        <img src={img || "/placeholder.svg"} alt={name} className={styles.profileImage} />
        <div className={styles.title}>{name}</div>
        <div className={styles.domain}>{domain}</div>
        <div className={styles["button-container"]}>
          <button className={styles.button} onClick={() => window.open(InstaId, "_blank")}>
            <svg
              className={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
          </button>
          <button className={styles.button} onClick={() => window.open(linkedinId, "_blank")}>
            <svg
              className={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeadCard;

