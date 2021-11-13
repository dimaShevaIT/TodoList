import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Dropdown extends Component {
    static defaultProps = {
        isOpen: false,
    };
    static propTypes = {
        isOpen: PropTypes.bool,
    };

    render() {
        return (
            <div className="container">
                <button type="button" className="button" onClick={e=> {
                    console.log('dsad');
                    console.log(e.target);
                }}>
                    &#9776;
                </button>
                    <div className="dropdown">
                        <ul className="menu">
                            <li>Option 1</li>
                            <li>Option 2</li>
                            <li>Option 3</li>
                            <li>Option 4</li>
                        </ul>
                    </div>
            </div>
        );
    }
}

