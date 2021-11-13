import React from 'react';

const CommentsList = ({ items = [] }) => 
items.length > 0 && (
    <ul>
        {items.map(item =>
            <li key={item.id}>
                <p>{item.text}</p>
                <p>
                    <b>Posted At: {new Date(item.createdAt).toLocaleString()}</b>
                </p>
            </li>
        )}
    </ul>
);

export default CommentsList;