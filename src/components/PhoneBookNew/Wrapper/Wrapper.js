import React, { Fragment } from 'react';

const Wrapper = (props) => (
    <Fragment>
        <h2>{props.title}</h2>
        {props.children}
    </Fragment>
);

export default Wrapper;