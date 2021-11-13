import React from 'react';
import Select from 'react-select';

const CategorySelect = ({ options, value, onChange }) => (
    <Select options={options} value={value} onChange={onChange}/>  
);

export default CategorySelect;