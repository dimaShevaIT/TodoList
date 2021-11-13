import React, { Component, Fragment } from 'react';
import shortid from 'shortid';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import ContactList from '../Phonebook/ContactList/ConstactList';
import Wrapper from './Wrapper/Wrapper';
import ContactFilter from './ContactFilter/ContactFilter';

const filterContacts = (contacts, filter) => {
  return contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase()));
};

export default class PhoneBookNewApp extends Component {
  state = {
    contacts: [
      // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };





  changeFilter = e => {
    const {value} = e.target;
    this.setState({filter: value});
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
  };


   componentDidMount() {
     const persistedContact = localStorage.getItem('contacts');
     if(persistedContact) {
       this.setState({ contacts: JSON.parse(persistedContact)});
     };
   };

   componentDidUpdate(prevProps, prevState) {
     const { contacts } = this.state;
     if(prevState.contacts !== contacts) {
       localStorage.setItem('contacts', JSON.stringify(contacts));
     };
   };

  render() {
    const { contacts, filter } = this.state;
    const filtredContact = filterContacts(contacts, filter);
    return (
      <Fragment>
      <Wrapper title="Phonebook"><PhoneBookForm onAddContact={this.addContact}/></Wrapper>
      <Wrapper title="Contacts"><ContactFilter onContactFilter={this.changeFilter} /></Wrapper>
      <ContactList items={filtredContact} onDeleteContact={this.deleteContact} />
      </Fragment>
    )
  }
};