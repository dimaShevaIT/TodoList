import React, { Component } from 'react';

export default class PhoneBookForm extends Component {
  state = {
    name: '',
    number: '',
  };


  handleChange = e => {
    const { name, value } = e.target;
    this.setState({[name]: value})
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.onAddContact({...this.state});

    this.setState({
      name: '',
      number: '',
    });
  }; 

  render() {
    const {name, number} = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>
          Name
          <br />
      <input
        onChange = {this.handleChange}
        value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      </label>
      <br />
      <label>
        Number
        <br />
        <input
          onChange = {this.handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <br />
      <button type="submit">Add Contact</button>
     </form>
     
    )
  }
}