import React, {Fragment} from 'react';

const Section = (props) => (
    <Fragment>
    <h2>{props.title}</h2>
    {props.children}
    </Fragment>
);

export default Section;