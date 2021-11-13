import React from 'react';
import PropTypes from 'prop-types';

const Button  = ({onHandleToggle}) => (
    <button type="button" className="button" onClick={onHandleToggle}>
        &#9776;
    </button>
);

Button.propTypes = {
    onHandleToggle: PropTypes.func.isRequired,
}

export default Button;