import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ items }) => (
    <ul className={styles.imageGallery}>
        {items.map(({ id, webformatURL, largeImageURL, tags}) => (
            <ImageGalleryItem id={id} webformatURL={webformatURL} alt={tags} largeImageURL={largeImageURL}/>
        ))}
    </ul>
);
export default ImageGallery;
