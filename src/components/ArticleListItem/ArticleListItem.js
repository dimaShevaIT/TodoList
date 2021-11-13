import React from 'react';
// import withToggle from '../hoc/withToggle';


const ArticleListItem = ( {link, title} ) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
        {title}
    </a>
);

export default ArticleListItem;
