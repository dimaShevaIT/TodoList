import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Tasks/Tasks';
import styles from './TaskList.module.css';

const TaskList = ({ items, onDeleteTask }) => 
items.length > 0 && (
    <ul className={styles.list}>
        {items.map(item => (
            <li key={item.id}>
                <Task {...item} onDeleteTask={()=> onDeleteTask(item.id)} />
            </li>
        ))}
    </ul>
);

TaskList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};

Task.propTypes = {
    title: PropTypes.string.isRequired,
}

export default TaskList;