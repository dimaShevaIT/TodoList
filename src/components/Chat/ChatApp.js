import React, {Component} from 'react';
import CommentForm from './CommentForm/CommentForm';
import CommentList from './CommentList/CommentList';
import styles from './ChatApp.module.css';
import shortid from 'shortid';

export default class ChatApp extends Component {
    state = {
        comments: [],
    }

    componentDidMount() {
        const peresistedComments = localStorage.getItem('comments');
        if(peresistedComments) {
            this.setState({ comments: JSON.parse(peresistedComments) })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.comments !== this.state.comments) {
            localStorage.setItem('comments', JSON.stringify(this.state.comments))
        }
    }

    addComponent = text => {
        const comment = {
            id: shortid.generate(),
            text,
            createdAt: new Date().toISOString(),
        };

        this.setState(state => ({
            comments: [...state.comments, comment],
        }));
    };

    render() {
        return (
            <div className={styles.container}>
                <CommentForm onAddComment={this.addComponent} />

                <CommentList items={this.state.comments} />
            </div>
        );
    };
};