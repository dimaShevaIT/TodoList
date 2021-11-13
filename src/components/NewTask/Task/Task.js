import React from 'react';
import styles from './Task.module.css';

const Task = ({task, ...props}) => {

    const ActionBtn = () => (
        <div className={styles.actionBtn}>{task.done ? <p onClick={props.deleteTask}>&#10007;</p> : <p onClick={props.doneTask}>&#10003;</p>}  
        </div>
    );

    const stylesTask = task.done ? styles.taskActive : styles.task;

    return (
        <div className={stylesTask}>
            <p>{task.title}</p>
            <ActionBtn/>
            
        </div>
    )
};

export default Task;