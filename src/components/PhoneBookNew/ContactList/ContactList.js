import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ items, onDeleteContact }) => 
    items.length > 0 && (
        <ul className={styles.ul}>
            {items.map(item => (
                <li key={item.id}>
                    <Contact {...item} onDeleteContact={() => onDeleteContact(item.id)} />
                </li>
            ))}
        </ul>
    );

ContactList.propTypes = {
    items: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}


export default ContactList;