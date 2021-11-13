import React, { Component } from 'react';
import styles from './TaskNewApp.module.css';
import TaskEditor from './TaskEditor/TaskEditor';
import TaskFilter from './TaskFilter/TaskFilter';
import TaskList from './TaskList/TaskList';
import shortid from 'shortid';


const filterTasks = (tasks, filter) => {
    return tasks.filter(task => task.text.toLowerCase().includes(filter.toLowerCase()));
}


export default class TaskNewApp extends Component {
    state = {
        tasks: [],
        filter: '',
    };

    addTask = task => {
       const addTask = {
           ...task,
           id: shortid.generate(),
           completed: false,
       }
       
       this.setState(state => ({
        tasks: [...state.tasks, addTask],
       }));
    };

    deleteTask = id => {
        this.setState(state => ({
            tasks: state.tasks.filter(task => task.id !== id),
        }));
    };


    upDateCompleted = id => {
        this.setState(state => ({
            tasks: state.tasks.map(task => {
                return task.id === id ? {...task, completed : !task.completed} : task;
            }),
        }));
    };


    upDatePriority = (id, priority) => {
        this.setState(state => ({
            tasks: state.tasks.map(task => task.id === id ? {...task, priority} : task),
        }));
    };

    changeFilter = e => {
        this.setState({filter: e.target.value});
    }

    render() {
        const { tasks, filter } = this.state;
        const filtredTasks = filterTasks(tasks, filter);
        
        return (
            <div className={styles.containerStyles}>
            <TaskEditor onAddTask={this.addTask} />
            <hr />
            <TaskFilter value={filter} onChangeFilter={this.changeFilter} />
            <TaskList 
                items={filtredTasks} 
                onDeleteTask={this.deleteTask} 
                onUpdateCompleted={this.upDateCompleted}
                onUpDatePriority={this.upDatePriority}
                />
            </div>

        );
    }
};