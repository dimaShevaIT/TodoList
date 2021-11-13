import React, { Component } from 'react';

export default class CommentsForm extends Component {
    state = {
        text: '',
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onAddComment(
          this.state.text !== '' ? this.state.text : alert('Enter text')
            
        );

    };

    handleChange = e => {
        const { value } = e.target; 
        this.setState({text: value});

    };


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="input" onChange={this.handleChange} placeholder="Add to Coments" 
                />
                <button type="submit">Post</button>
            </form>
        )
    }
};