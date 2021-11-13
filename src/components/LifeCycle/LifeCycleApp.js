import React, { Component } from 'react';
import CommentsForm from './CommentsForm';
import CommentsList from './CommentsList';
import shortid from 'shortid';
import { Container } from 'react-bootstrap';

export default class LifeCycleApp extends Component {
    state = {
        comments: [],
    };

    addComment = text => {
        const comment = {
        id: shortid.generate(),
        text,
        createdAt: new Date().toISOString(),
        };

        this.setState(state => ({
            comments: [...state.comments, comment],
        }));
    }
    componentDidMount() {
        const persistedCommnet = localStorage.getItem('comments');
        if(persistedCommnet) {
            this.setState({comments: JSON.parse(persistedCommnet)})
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.comments !== this.state.comments) {
            localStorage.setItem('comments', JSON.stringify(this.state.comments))
        }
    }


    render() {
        const {comments} = this.state;
        return (
            <Container>
                <CommentsForm onAddComment = {this.addComment} />
                <CommentsList items = {comments} />
            </Container>
        )
    }
};

