import React, {Component} from 'react';

export default class CounterNew extends Component {
    static defaultProps = {
            step: 1,
        }

    state = {
        value: 10,
    };

    handleIncrement = e => {
        this.setState(state => ({value: state.value + this.props.step}));
    }

    handleDecrement = e => {
        this.setState(state => ({value: state.value - this.props.step}));
    }

    render () {
        const {step} = this.props;
        const {value} = this.state;
        return (
            <div>
                <span style={{fontSize: 40, fontFamily: 'monospace'}}>{value}</span>
                <button type="button" onClick={this.handleIncrement}>Increment by {step}</button>
                <button type="button" onClick={this.handleDecrement}>Decrement by {step}</button>
            </div>
        )
    }
}