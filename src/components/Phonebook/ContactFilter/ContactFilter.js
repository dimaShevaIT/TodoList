import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactFilter.module.css';


const ContactFilter = ({onContactFilter}) => (
    <div>
        <label>Find contacts by name</label>
        <input type="input" onChange={onContactFilter} />
    </div>
);

export default ContactFilter;