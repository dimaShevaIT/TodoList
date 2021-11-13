import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';
import styles from './TaskList.module.css';

const TaskList = ({ items, onDeleteTask, onUpdateCompleted, onUpDatePriority }) => 
    items.length > 0 && (
        <ul className={styles.list}>
            {items.map(item => (
                <li key={item.id}>
                    <Task 
                        {...item} 
                        onDeleteTask={()=> onDeleteTask(item.id)} 
                        onUpdateCompleted={() => onUpdateCompleted(item.id)}
                        onUpDatePriority={onUpDatePriority}
                        />
                </li>
            ))}
        </ul>
    );

TaskList.propTypes = {
    id: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};

export default TaskList;