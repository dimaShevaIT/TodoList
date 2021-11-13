import React from 'react';
import styles from './CommentList.module.css';

const CommentList = ({ items = [] }) => 
    items.length > 0 && (
        <ul className={styles.ul}>
            {items.map(item => (
                <li key={item.id} className={styles.li}>
                    <p>{item.text}</p>
                    <p>
                        <b>Post at:</b> {new Date(item.createdAt).toLocaleString()}
                    </p>
                </li>
            ))}
        </ul>
    );

export default CommentList;