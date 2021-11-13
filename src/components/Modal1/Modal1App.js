import React, { Component } from 'react';
import Modal1 from './Modal1';

export default class ModalApp extends Component {
    state = { isModalOpen: false};

    openModal = () => this.setState({ isModalOpen: true });

    closeModal = () => this.setState({ isModalOpen: false });

    render() {
        return (
            <div>
            <button onClick={this.openModal}>Open</button>
            {this.state.isModalOpen && (
                <Modal1 onClose={this.closeModal} >
                <h1>Modal Content</h1>
                <p>
                dasdlkflajkfljakslfjlkasjdkljaskdljaslkd
                </p>
                <button onClick={this.closeModal}>Close Modal</button>
                </Modal1>
            )}
            </div>
        );
    }
}