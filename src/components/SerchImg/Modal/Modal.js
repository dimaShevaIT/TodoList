import React, { Component } from 'react';
import { createRef } from 'react';
import styles from './Modal.module.css';

export default class Modal extends Component {
    backdropRef = createRef();

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress = e => {
        if(e.code !== 'Escape') return;

        this.props.onClose();
    };

    handleBackdropClick = e => {
        const { current } = this.backdropRef;

        if (current && e.target !== current) return;

        this.props.onClose();
    };

    render() {
        const { largeImageURL, tags } = this.props; 
        return (
             <div className={styles.overlay} 
                ref={this.backdropRef} 
                onClick={this.handleBackdropClick}
            >
             <div className={styles.modal}
                    ref={this.backdropRef} 
                    onClick={this.handleBackdropClick}
            >
                 <img src={largeImageURL} alt={tags} />
             </div>
         </div>
        );
    };
};
