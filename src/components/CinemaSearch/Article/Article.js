import React from 'react';
import styles from './Article.module.css';
import { NavLink } from 'react-router-dom';

const Article = ({data}) => (
    <div>
         <NavLink to="/" exact >Go back</NavLink>
        
        <article className={styles.article}>
        
        <div className={styles.img}>
            <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt={data.title} />
        </div>
        <div className={styles.content}>
            <h1>{data.title}</h1>
            <span>Users score: {data.vote_average}</span>
            <h5>Overview</h5>
            <p>{data.overview}</p>
            <h5>Genres</h5>   
            {data.genres.map(el => (
                <span className={styles.genres}>{el.name}</span>
            ))}     
        </div>
        </article>
    </div>   
);

export default Article;