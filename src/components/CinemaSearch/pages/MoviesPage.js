import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Searchbar from '../SerchForm/Searchbar';
import Loader from '../Loader/Loader';
import ArticleList from '../ArticleList';

const BASE_URL = "https://api.themoviedb.org/3/search/movie"
const API_KEY = "?api_key=798fca9bb82ef1264026c9ada2e6b0c2&query=";

export default class MovisPage extends Component {
    
        state = {
            articles: [],
            isLoading: false,
            query: '',
        };
    




    handleQueryChange = e => {
        const { value } = e.target;
        this.setState({query: value})
    };

    handleFormSubmit = e => {
        e.preventDefault();
        const { query } = this.state;

        axios
            .get(BASE_URL+API_KEY+query)
            .then(({data}) => this.setState({articles: data.results}))
            .catch(console.log)
            .finally(() => this.setState({ isLoading: false }));  
    };

    render() {
        const { isLoading, query, articles } = this.state;
        return (
            <Fragment>
                {isLoading ? <Loader /> :
                <Searchbar 
                    value={query} 
                    onChange={this.handleQueryChange}
                    onSubmit={this.handleFormSubmit}
                />
            }
            <ArticleList items={articles} />
            </Fragment>
        );
    };
}