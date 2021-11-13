import React from 'react';
import pessProps from '../hoc/pessProps';

const ErrorNotification = ( {text} ) => (
    <h1>Whoops, something went wrong: {text}</h1>
);

export default pessProps({text: "hello"})(ErrorNotification);