import React from 'react';
import './AlertScreen.css';

const AlertScreen = ({ message, onClose, showAlert, type }) => {
    if (!showAlert) {
        return null;
    }

    const getTypeStyles = (type) => {
        switch (type) {
            case 'success':
                return { heading: 'Success!', color: '#28a745' };
            case 'error':
            default:
                return { heading: 'Alert!', color: '#fc5050' };
        }
    };

    const { heading, color } = getTypeStyles(type);

    return (
        <div className="alert-overlay">
            <div className="alert-popup">
                <div className="popup-heading" style={{ color }}>{heading}</div>
                <div className="alert-message">{message}</div>
                <button className="alert-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default AlertScreen;
