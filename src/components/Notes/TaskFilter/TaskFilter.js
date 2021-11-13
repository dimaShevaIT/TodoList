import React from 'react';
import PropTypes from 'prop-types';
import styles from './TaskFilter.module.css';


const TaskFilter = ({value, onChangeFilter}) => (
    <input type="text" 
    value={value}
    onChange={onChangeFilter}
    className={styles.input} 
    placeholder="Type to filter tasks.." 
    />
);

export default TaskFilter;