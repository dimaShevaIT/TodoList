import React from 'react';
import styles from './Button.module.css';

const Button = ({handleClick}) => (
    <button type="button" className={styles.button} onClick={handleClick}>
        Load more
            {window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
            })}
    </button> 
    
);

export default Button;