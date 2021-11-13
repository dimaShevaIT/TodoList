import React from 'react';
import PropTypes from 'prop-types';
import styles from './Task.module.css';
import PrioritySelector from '../PrioritySelector/PrioritySelector.js';


const Task = ({ id, text, priority, completed, onDeleteTask, onUpdateCompleted, onUpDatePriority }) => (
    <div className={`${styles.task} ${styles[`${priority}Priority`]}`} >
        <p className={styles.text}>{text}</p>

        <hr />
        <div className={styles.action}>
            <button type="button" onClick={onDeleteTask}>Delete</button>
            <PrioritySelector value={priority} onChange={e => onUpDatePriority(id, e.target.value)}/>
            {/* <select name="priority" value={priority} onChange={e => onUpDatePriority(id, e.target.value)}>
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="high">High</option>
            </select> */}

            <lebel>
                Completed:
                <input type="checkbox" checked={completed} name="completed" onChange={onUpdateCompleted}/>
            </lebel>
        </div>     
    </div>
);

Task.propTypes = {
    text: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onDeleteTask: PropTypes.func.isRequired,
    onUpdateCompleted: PropTypes.func.isRequired,
    upDatePriority: PropTypes.func,
};

export default Task;