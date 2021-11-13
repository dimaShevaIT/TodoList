import React, { Component, Fragment } from 'react';
import styles from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';


export default class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false
    };

  
    openModal = () => this.setState({ isModalOpen: true });

    closeModal = () => this.setState({ isModalOpen: false });

 


    render() {
        const { isModalOpen } = this.state;
        const { id, webformatURL, alt, largeImageURL} = this.props;
        return (
            <Fragment>
            <li key={id} className={styles.imageGalleryItem}>
                <img src={webformatURL} alt={alt} className={styles.image} onClick={this.openModal} />
            </li>
            {isModalOpen && <Modal onClose={this.closeModal} largeImageURL={largeImageURL} tags={alt} />}
            </Fragment>
        )
    }
}



