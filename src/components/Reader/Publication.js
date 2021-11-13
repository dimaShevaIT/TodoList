import React from 'react';
import withReaderContex from './withReaderContex';

const Publication = ({ publication }) => (
    <article className="publication">
        <h2>{publication.title.slice(0, 20)}...</h2>
        <p>{publication.text.slice(0,300)}...</p>
    </article>
);

export default withReaderContex(Publication);