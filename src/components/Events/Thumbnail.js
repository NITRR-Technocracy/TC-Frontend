import React from 'react';
import styles from '../../sections/EventSec.module.css';

const Thumbnail = ({props}) => {
  return (
    <div className={styles.item}>
        <img src={props.imgUrl} alt="Thumbnail" />
        <div className={styles.content}>
            <div className={styles.title}>{props.name}</div>
        </div>
   </div>
  )
}

export default Thumbnail