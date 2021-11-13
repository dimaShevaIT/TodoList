import React from 'react';
import PropTypes from 'prop-types';

const Dropdown1 = ({isOpen = false}) => (
    <div className="container">
        <button className="button" type="button">
            &#9776;
        </button>
        {isOpen && (
            <div className="dropdown">
                <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                    <li>Option 4</li>
                </ul>
            </div>
        )}
    </div>
);
Dropdown1.propTypes = {
    isOpen: PropTypes.bool,
};
export default Dropdown1;
