import React, {Fragment} from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <Fragment>
        {options.map(option => (<button type="button" name={option} onClick={onLeaveFeedback}>{option}</button>))}
    </Fragment>
);

export default FeedbackOptions;