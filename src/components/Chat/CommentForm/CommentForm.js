import React, {Component} from 'react';
import styles from './CommentForm.module.css';

export default class CommentForm extends Component {
    state = {
        text: '',
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onAddComment(
          this.state.text !== '' ? this.state.text : alert('Enter text')
            
        );

        this.setState({ text: '' });

    };

     handleChange = e => {
         this.setState({
             text: e.target.value,
         });
     };
     
     render() {
         return (
            <form className={styles.form} >
                <input className={styles.input} type="input" onChange={this.handleChange} placeholder="Add to Coments" 
                />
                <button type="submit" onClick={this.handleSubmit}>Post</button>
            </form>
         );
     }
}