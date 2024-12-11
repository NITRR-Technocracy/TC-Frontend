import React from 'react';
import styles from './PokemonTitle.module.css';

const PTitle = (props) => {
  return (
    <div className={styles.ptitle}>
      <h1 className={styles.pheading}>
        <span>{props.color}</span> {props.noncolor}
      </h1>
    </div>
  );
};

export default PTitle;
