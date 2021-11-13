import React, {Component} from 'react';
import shortid from 'shortid';
import TaskInput from './TaskInput/TaskInput';
import TaskList from './TaskList/TaskList'


export default class TaskApp extends Component {
        state = {
            task: [
                {id: 'id-1', title: 'Enter text', done: false},
                {id: 'id-2', title: 'Hermione Kline', done: true},
                {id: 'id-3', title: 'Eden Clements', done: false},
                {id: 'id-4', title: 'Annie Copeland', done: false},
              ],
          };


    addTask = task => {
        const taskToAdd = {
            ...task,
            id: shortid.generate(),
        };

        this.setState(state => ({
            task: [...state.task, taskToAdd],
        }));
    };

    deleteTask = id => {
        this.setState(state => ({
            task: state.task.filter(task => task.id !== id),
        }));
    }

    render() {
        const {task} = this.state;
        return (
            <div>
                <h1>Active Tasks: {task.length} </h1>
                <TaskList items={task} onDeleteTask={this.deleteTask} />
                <TaskInput onAddTask={this.addTask} items={task}/>
            </div>
        );
    };

};