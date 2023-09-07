import React from 'react';
import styles from './VIGButton.module.css'

const VIGButton = ({text}) => {
    const scrollToRegistration = () => {
        const registrationElement = document.getElementById('registration');
        if (registrationElement) {
            registrationElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className={styles.wrap}>
            <button className={styles.vigbutton}  onClick={scrollToRegistration}>
            {text}
            </button>
        </div>
    )
}

export default VIGButton;