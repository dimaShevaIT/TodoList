import React, {Component} from 'react';



export default class Counter extends Component {


    state = {
        value: 10,
    };
    

    hendleIncrement = e => {    
            this.setState(state => ({value: state.value + this.props.step}));
    };

    hendleDecrement = e => {
        this.setState(state => ({value: state.value - this.props.step}));
    };
    render() {
        const {step} = this.props;
        const {value} = this.state;
        return (
            <div>
                <span style={{fontSize: 40, fontFamily: 'monospace'}}>{value}</span>
                <button onClick={this.hendleIncrement}>Increment by {step}</button>
                <button onClick={this.hendleDecrement}>Decrement by {step}</button>
            </div>
        );
    }
}

