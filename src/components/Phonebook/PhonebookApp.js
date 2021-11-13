import React, {Component} from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ConstactList';
import ContactFilter from './ContactFilter/ContactFilter';

const filterContacts = (contacts, filter) => {
    return contacts.filter(contact => 
        contact.name.toLowerCase().includes(filter.toLowerCase()));
};
    

export default class PhonebookApp extends Component {
        state = {
            contacts: [
                {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
                {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
                {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
                {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
              ],
            filter: ''
          };
    
    changeFilter = e => {
        this.setState({filter: e.target.value});
        console.log(e.target.value);
    };


    addContact = contact => {
        const contactToAdd = {
            ...contact,
            id: shortid.generate(),
        };

        this.setState(state => ({
            contacts: [...state.contacts, contactToAdd],
        }));
    };

    deleteContact = id => {
        this.setState(state => ({
            contacts: state.contacts.filter(contact => contact.id !== id),
        }));
    }

    render() {
        const {contacts, filter} = this.state;
        const filtredContact = filterContacts(contacts, filter);
        return (
            <div>
                <h1>Phonebook</h1>
                <ContactForm onAddContact={this.addContact} items={contacts}/>
                <ContactFilter onContactFilter={this.changeFilter}/>
                <ContactList items={filtredContact} onDeleteContact={this.deleteContact} />
            </div>
        );
    };

};