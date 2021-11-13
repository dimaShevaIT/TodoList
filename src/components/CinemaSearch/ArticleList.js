import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = ({ items = []}) => (
    <ul>
        {items.map(item => (
            <Link to={`/movies/${item.id}`}>{item.original_title}<br/></Link>
        ))}
    </ul>
);

export default ArticleList;