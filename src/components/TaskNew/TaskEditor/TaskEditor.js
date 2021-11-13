import React, { Component } from 'react';
import styles from './TaskEditor.module.css';
import PrioritySelector from '../PrioritySelector/PrioritySelector.js';
import Priority from '../../utils/Priority';

const options = Object.values(Priority);

export default class TaskEditor extends Component {
    state = {
        text: '',
        priority: Priority.NORMAL,
    };

    handleChange = e => {
        const {name, value, type, checked} = e.target;
        this.setState({ [name] : type ==='checkbox' ? checked : value });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onAddTask({ ...this.state });

        this.setState({
            text: '',
            priority: Priority.NORMAL,
        });
    };

    render() {
        const {text, priority} = this.state;
        return (
            <form className={styles.form} onSubmit={this.handleSubmit} >
            <input 
                className={styles.input} 
                type="text" 
                name="text" 
                value={text} 
                onChange={this.handleChange} 
                placeholder="Enter task content..." />
            <br />
            
            <label>
            Choose priority
                    <PrioritySelector options={options} value={priority} onChange={this.handleChange} />
                    {/* <select name="priority" value={priority} onChange={this.handleChange} >
                        <option value="low">low</option>
                        <option value="normal">normal</option>
                        <option value="high">high</option>
                    </select> */}
            </label>
            <br />
            <button type="submit">Add task</button>
            </form>
        )
    }
}