import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactFilter.module.css';

const ContactFilter = ({ onContactFilter }) => (
        <label >
            Find contact by name
            <br />
            <input className={styles.input} type="input" onChange={onContactFilter} />
        </label>
  
);

ContactFilter.propTypes = {
    onContactFilter: PropTypes.func.isRequired,
}

export default ContactFilter;