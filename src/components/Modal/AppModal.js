import React, { Component } from 'react';
import Modal from './Modal';

export default class ModalApp extends Component {
    state = { isModalOpen: false};

    openModal = () => this.setState({ isModalOpen: true });

    closeModal = () => this.setState({ isModalOpen: false });

    render() {
        return (
            <div>
            <button onClick={this.openModal}>Open</button>
            {this.state.isModalOpen && (
                <Modal onClose={this.closeModal} >
                <h1>Modal Content</h1>
                <p>
                dasdlkflajkfljakslfjlkasjdkljaskdljaslkd
                </p>
                <button onClick={this.closeModal}>Close Modal</button>
                </Modal>
            )}
            </div>
        );
    }
}