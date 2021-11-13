import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';

const Contact = ({name, number, onDeleteContact}) => (
    <div calssName={styles.contact}>
        <p className={styles.text}>{name}:{number}</p>
        <button type="button" onClick={onDeleteContact}>Delete contact</button>
    </div>
);

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}

export default Contact;