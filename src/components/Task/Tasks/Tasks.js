import React from 'react';
import styles from './Tasks.module.css';


const Tasks = ({ title, onDeleteTask }) => (
    <div className={styles.task}>
        <p className={styles.text}>{title}
        <button type="button" onClick={onDeleteTask}>Delete</button>
        </p>
    </div>
);



export default Tasks;