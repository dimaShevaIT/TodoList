import React, {Component} from 'react';
import TaskEditor from './TaskEditor/TaskEditor';
import TaskFilter from './TaskFilter/TaskFilter';
import TaskList from './TaskList/TaskList';
import shortid from 'shortid';


const contaiterStyles = {
    maxWidth: 1200,
    minWidth: 800,
    marginLeft: 'auto',
    marginRight: 'auto',
};


const filterTasks = (tasks, filter) => {
    return tasks.filter(task => task.text.toLowerCase().includes(filter.toLowerCase()));
}

export default class NotesApp extends Component {
    state = {
        tasks: [],
        filter: '',
    };

    componentDidMount() {
        const persistedTasks = localStorage.getItem('tasks');

        if(persistedTasks) {
            const tasks = JSON.parse(persistedTasks);
            this.setState({tasks});
        };
        
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.tasks !== this.state.tasks) {
            localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
        }
    }

    addTask = task => {
        const taskToAdd = {
            ...task,
            id: shortid.generate(),
            complited: false,
        };
        this.setState(state => ({
            tasks: [...state.tasks, taskToAdd],
        }));
    };

    deleteTask = id => {
        this.setState(state => ({
            tasks: state.tasks.filter(task => task.id !== id),
        }));
    };

    updateCompleted = id => {
        this.setState(state => ({
            tasks: state.tasks.map(task => (
                task.id === id ? {...task, completed: !task.completed} : task ),)
        }));
    }

    updatePriority = ( id, priority ) => {
        this.setState(state => ({
            tasks: state.tasks.map(task => 
                task.id === id ? { ...task, priority } : task,
                ),
        }));
    };

    changeFilter = e => {
        this.setState({filter: e.target.value});
    };

    render() {
        const { tasks, filter } = this.state;
        const filteredTasks = filterTasks(tasks, filter);
        return (
            <div style={contaiterStyles}>
                <TaskEditor onAddTask={this.addTask} />
                <hr />
                <TaskFilter value={filter} onChangeFilter={this.changeFilter}/>
                <TaskList items={filteredTasks} 
                onDeleteTask={this.deleteTask} 
                onUpdateCompleted={this.updateCompleted}
                onUpdatePriority={this.updatePriority}
                />
            </div>
        )
    }

}