import React from 'react';
import styles from './Timer.module.css';

const Timer = ({ step, value, onIncrement, onDecrement }) => (
    <div className={styles.container}>
        <button type="button" className={styles.button} onClick={() => onDecrement(step)}>
            &#8722;
        </button>
        <div className={styles.value}>{value}</div>
        <button type="button" className={styles.button} onClick={() => onIncrement(step)}>
            &#43;
        </button>
    </div>
);

export default Timer;