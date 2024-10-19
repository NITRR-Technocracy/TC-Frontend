import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import styles from './TechTeamCard.module.css'; // Correctly import the CSS module
import { BiLogoGithub ,BiLogoLinkedinSquare ,BiLogoGmail,BiLogoInstagram } from "react-icons/bi";
function TeamMemberCard(props) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 12,
        speed: 300,
        glare: true,
        'max-glare': 0.2,
      });
    }

    return () => {
      if (cardRef.current) {
        cardRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div className={styles['tech-team-card']} ref={cardRef}>
      <div className={styles['card-content']}>
        <img src={props.imgSrc} alt={props.name} className={styles['profile-photo']} />
        <h2>{props.name}</h2>
        <p>{props.desi}</p>
        <div className={styles['social-links']}>
          <a href={props.InstaId} target="_blank" rel="noopener noreferrer">
            <BiLogoInstagram className="styles.icon"/>
          </a>
          <a href={props.LinkedinId} target="_blank" rel="noopener noreferrer">
            <BiLogoLinkedinSquare className="styles.icon"/>
          </a>
          <a href={props.GithubId} target="_blank" rel="noopener noreferrer">
            <BiLogoGithub className="styles.icon"/>
          </a>
          <a href={`mailto:${props.email}`}>
            <BiLogoGmail className="styles.icon"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;
