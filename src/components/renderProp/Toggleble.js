import React, {Component} from 'react';

export default class Toggleble extends Component {
    state = {
        on: false,
    };

    toggle = () => this.setState(prevState => ({ on: !prevState.on }));

    render() {
        return this.props.children({ on: this.state.on, onToggle: this.toggle });
    }
};