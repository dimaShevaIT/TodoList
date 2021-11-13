import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';


export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const res = this.props.items.map(el => el.name);
        if (res.includes(this.state.name)) {
            alert('This contact already exists');
        } else {
            this.props.onAddContact({...this.state});
        }
        
        this.setState({
            name: '',
            number: '',
        })
    }

    render() {
        const {name, number} = this.state;
        return(
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input
                    onChange={this.handleChange}
                    type="text"
                    value={name}
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
                <label>Number</label>
                <input
                    onChange={this.handleChange}
                    type="tel"
                    value={number}
                    name="number"
                    pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                    title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                    required
                />
                <button type="submit">Add contact</button>
            </form>
        );
    };
};