import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { changeStep } from '../../../redux/timer/timerActions';
import * as timerSelector from '../../../redux/timer/timerSelector';

const options = [
    {value: 5, label: 5},
    {value: 10, label: 10},
    {value: 15, label: 15},
];

const finOptions = value => options.find(opt => opt.value === value);

const StepSelector = ({ value, onChange}) => (
    <Select options={options} value={finOptions(value)} onChange={onChange} />
);

const mapStateToProps = state => ({
    value: timerSelector.getStep(state),
});

const mapDispatchToProps = dispatch => ({
    onChange: step => dispatch(changeStep(step.value)),
})


export default connect(mapStateToProps, mapDispatchToProps)(StepSelector);