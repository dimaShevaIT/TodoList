import React, { Component } from 'react';
import shortid from 'shortid';
import styles from './ChatRealApp.module.css';
import MessageFeed from './MessageFeed/MessageFeed';
import Editor from './Editor/Editor';

export default class ChatRealApp extends Component {
    state = {
        messages: [],
    };

    addMessage = text => {
        const message = {
            id: shortid.generate(),
            text,
            createdAt: new Date().toISOString(),
        };

        this.setState(state => ({
            messages: [...state.messages, message],
        }));
    };

    render() {
        return (
            <div className={styles.chatStyles}>
                <Editor onAddMessage={this.addMessage} />
                <MessageFeed items={this.state.messages} />
            </div>
        );
    };
};