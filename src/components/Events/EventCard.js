import { Link } from 'react-router-dom';
import styles from '../../sections/EventSec.module.css';

import React from 'react'

const EventCard = ({props}) => {
  return (
    <div className={styles.item}>
        <img src={props.imgUrl} alt="Slide" />
        <div className={styles.content}>
            <div className={styles.author}>Technocracy</div>
            <div className={styles.title}>{props.name}</div>
            <div className={styles.des}>
               {props.des}
            </div>
            <div className={styles.topic}><span>Date:</span> <span>{props.date}</span></div>
            <div className={styles.topic}><span>Time: </span> <span>{props.time}</span></div>
            <div className={styles.topic}><span>Venue:</span> <span>{props.venue}</span></div>
            <div className={styles.topic}><span>Deadline:</span> <span>{props.deadline}</span></div>
            <div className={styles.buttons}>
                <button><Link style={{textDecoration: 'none'}} to={props.link}>SEE MORE</Link></button>
                <button><Link style={{color:'white', textDecoration:'none'}} to={props.link}>REGISTER</Link></button>
            </div>
        </div>
    </div>
  )
}

export default EventCard