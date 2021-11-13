import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const activeStyle = {
    color: 'red',
  
};

const Nav = () => (
    <ul className={styles.nav}>
        <li className={styles.li}>
            <NavLink to="/" exact activeStyle={activeStyle}>Home</NavLink>
        </li>
        <li className={styles.li}>
            <NavLink to="/movies" exact activeStyle={activeStyle}>Movies</NavLink>
        </li>
        
    </ul>
);

export default Nav;