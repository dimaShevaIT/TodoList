import React from 'react';
import withReaderContex from './withReaderContex';

const Counter = ({currentIdx, totalPublications}) => (
    <p>
    {currentIdx + 1}/{totalPublications}
    </p>
);

export default withReaderContex(Counter);