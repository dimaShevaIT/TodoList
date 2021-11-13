import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';


const Contact = ({ name, number, onDeleteContact }) => (
    <div className={styles.contact}>
        <p className={styles.text}>{name}:{number}
        <button type="button" onClick={onDeleteContact}>Delete</button>
        </p>
    </div>
);

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    
}

export default Contact;