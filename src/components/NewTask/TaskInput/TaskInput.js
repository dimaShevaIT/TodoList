import React, {Component} from 'react';
import styles from './TaskInput.module.css';

export default class TaskInput extends Component {
    state = {
        input: '',
    };



    addTask = () => {
        const {input} = this.state;
        if(input) {
            this.props.addTask(input);
            this.setState({input: ''});
        }
    };

  

   inputChange = e => {
       this.setState( {input: e.target.value} );
   };

   handleEnter = e => {
    if(e.key === 'Enter') this.addTask();
};

    render() {
        const {input} = this.state;
        return(
            <div className={styles.taskInput}>
                <input onKeyPress={this.handleEnter} onChange={this.inputChange} value={input}></input>
                <button type="button" onClick={this.addTask}>Add</button>
            </div>
        );
    };
};