import React from 'react';


const PrioritySelector = ({ options, value, onChange }) => (
 <select name="priority" value={value} onChange={onChange}>
    {options.map(option => (
       <option value={option}>{option}</option>
    ))}
 </select>
);

export default PrioritySelector;
