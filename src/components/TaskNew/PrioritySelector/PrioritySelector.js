import React from 'react';
import Priority from '../../utils/Priority';

const PrioritySelector = ({ options, priority, onChange}) => (
            // {options.map(option => <option value={option}>{option}</option>)}
            <select name="priority" value={priority} onChange={onChange} >
                <option value="low">low</option>
                <option value="normal">normal</option>
                <option value="high">high</option>
            </select>
);

export default PrioritySelector;
