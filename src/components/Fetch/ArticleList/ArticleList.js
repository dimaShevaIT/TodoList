import React from 'react';
import PropTypes from 'prop-types';
import ArticleListItem from '../../ArticleListItem/ArticleListItem';
import Toggleble from '../../renderProp/Toggleble';

const ArticleList = ({items}) => (
    <ul>
        {items.map(({id, link, title}) => (
            <li key={id}>
                <Toggleble>
                    {({on, onToggle}) => (
                    <div>
                    <button onClick={onToggle}>{on ? 'Hide' : 'Show'}</button>
                    {on && <ArticleListItem link={link} title={title} />}
                    </div>
                    )}
                </Toggleble>
            </li>
        ))}
    </ul>
);

ArticleList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};

export default ArticleList;