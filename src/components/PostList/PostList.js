import React from 'react';

const PostList = ({ items = [], onDeletePosts }) => (
    <ul>
        {items.map(item => (
            <li key={item.id}>
                <p>{item.text}</p>
                <button type="button" onClick={() => onDeletePosts(item.id)}>Delete</button>
                <p>Tag: {item.tag}</p>
            </li>
        ))}
    </ul>
);

export default PostList;