import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './TaskEditor.module.css';
import PrioritySelector from '../PrioritySelector/PrioritySlector';
import Priority from '../../utils/Priority';

const options = Object.values(Priority);

export default class TaskEditor extends Component {
    state = {
        text: '',
        priority: Priority.NORMAL,
    };

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onAddTask({...this.state});
        this.setState({
            text: '',
            priority: Priority.NORMAL, 
        })
    }

    render() {
        const {text,priority} = this.state;
        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <input className={styles.input} type="text" name="text" value={text} placeholder="Enter task content.." onChange={this.handleChange}/>
                <label className={styles.label}>
                    Select task priority:
                    <PrioritySelector options={options} value={priority} onChange={this.handleChange} />
                </label>
                <button type="submit">Create</button>
            </form>
        )
    }
};