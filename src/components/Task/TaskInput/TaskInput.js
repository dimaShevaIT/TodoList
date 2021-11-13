import React, {Component} from 'react';
import styles from './TaskInput.module.css';


export default class TaskInput extends Component {
    state = {
        title: '',
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const res = this.props.items.map(el => el.title);
        if (res.includes(this.state.title)) {
            alert('This Task already exists');
        } else {
            this.props.onAddTask({...this.state});
        }
        
        this.setState({
            title: '',
        })
    }

    render() {
        const {title} = this.state;
        return(
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <label>title</label>
                <input
                    onChange={this.handleChange}
                    type="text"
                    value={title}
                    name="title"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
                <button type="submit">Add Task</button>
            </form>
        );
    };
};