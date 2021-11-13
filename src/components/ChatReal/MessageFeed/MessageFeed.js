import React, {Component, createRef} from 'react';
import styles from './MessageFeed.module.css';

export default class MessageFeed extends Component {
    listRef = createRef();

    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevProps.items !== this.props.items) {
            const {scrollTop, scrollHeight, offsetHeight} = this.listRef.current;
            const distanceBottom = scrollHeight - (scrollTop + offsetHeight);

            return { shouldScroll: distanceBottom < 10 };
        } 
        
        return null;
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot && snapshot.shouldScroll) {
            const listRef = this.listRef.current;
            listRef.scrollTop = listRef.scrollHeight;
        };
    };

    render() {
        return (
            <ul ref={this.listRef} className={styles.listStyles}>
                {this.props.items.map(item => (
                    <li key={item.id}>
                        <p>{item.text}</p>
                        <p>
                            <b>Created at:</b> {new Date(item.createdAt).toLocaleString()}
                        </p>
                        <hr />
                    </li>
                ))}
            </ul>
        )
    }
}