import React from 'react';
import PropTypes from 'prop-types';

const Items = ({items}) => (
    <ul>
        {items.map(item => 
            (<li key={item.id}>{item.name}</li>)
        )}
    </ul>
);

Items.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
};

export default Items;