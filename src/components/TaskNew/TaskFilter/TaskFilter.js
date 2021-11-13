import React from 'react';
import PropTypes from 'prop-types';
import styles from './TaskFilter.module.css';

const TaskFilter = ({ value, onChangeFilter}) => (
    <input type="text" onChange={value} className={styles.input} placeholder="typeto filter task..." onChange={onChangeFilter} />
);

TaskFilter.propTypes = {
    onChangeFilter: PropTypes.func.isRequired,
};

export default TaskFilter;