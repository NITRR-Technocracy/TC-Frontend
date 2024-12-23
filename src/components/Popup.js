import React from 'react';
import styles from './Popup.module.css';

const Popup = ({ onClose, children }) => {
    return (
        <div className={styles.popup}>
            <div className={styles.overlay} onClick={onClose}></div>
            <div className={styles.popupContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Popup;
