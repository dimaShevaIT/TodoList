import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

export default class DropdownNew extends Component {
    static defaultProps = {
        isOpen: false,
    };
    static propTypes = {
        isOpen: PropTypes.bool,
    };
    
    state = {
        isOpen: true,
    };


    handleToggle = e => {
        this.setState(prevState => ({isOpen: !prevState.isOpen}));
    };

    render() {
        const {isOpen} = this.state;
        return (
            <div className="container">
                <Button onHandleToggle={this.handleToggle} />
                {isOpen && (
                    <div className="dropdown">
                    <ul className="menu">
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                        <li>Option 4</li>
                    </ul>
                </div>
                )}    
            </div>
        );
    };
};