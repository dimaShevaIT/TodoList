import React, {Component} from 'react';
import styles from './NewTaskApp.module.css';
import Task from './Task/Task';
import TaskInput from './TaskInput/TaskInput';
import shortid from 'shortid';

export default class NewTaskApp extends Component {
    state = {
        tasks: [ {id: 0, title: 'Create react app', done: false},
                {id: 1, title: 'Create js app', done: true},
                {id: 2, title: 'Create html app', done: false}
              ],  
    }

    doneTask = id => {
        const index = this.state.tasks.map(task => task.id).indexOf(id);
        this.setState(state => {
            let {tasks} = state;
            tasks[index].done = true;
            return tasks;
        });
    };

    addTask = task => {
        this.setState(state => {
            let {tasks} = state;
            tasks.push({
                id: tasks.length !== 0 ? task.length : 0,
                title: task,
                done: false,
            });
            return tasks;
        });
    };

    deleteTask = id => {
        const index = this.state.tasks.map(task => task.id).indexOf(id);
        this.setState(state => {
            let {tasks} = state;
            delete tasks[index];
            return tasks;
        });
    };


    render () {
        const {tasks} = this.state;
        const activeTasks = tasks.filter(task => !task.done);
        const doneTasks = tasks.filter(task => task.done);
        return (
            <div className={styles.app}>
                <h1 className={styles.top}>Active tasts: {activeTasks.length}</h1>
                {[...activeTasks, ...doneTasks].map(task => (
                    <Task 
                        doneTask={() => this.doneTask(task.id)}
                        deleteTask={() => this.deleteTask(task.id)} 
                        task={task} 
                        key={task.id}
                    />
                ))}
                 <TaskInput addTask={this.addTask} items={tasks}/>
            </div>
        )
    }
}