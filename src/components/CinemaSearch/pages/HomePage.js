import React, { Component } from 'react';
import axios from 'axios';
import ArticleList from '../ArticleList';


const BASE_URL = "https://api.themoviedb.org/3/trending/movie/day";
const API_KEY = "?api_key=798fca9bb82ef1264026c9ada2e6b0c2";

export default class HomePage extends Component {
    state = {
        items: [],
    };

    componentDidMount() {
        axios
            .get(BASE_URL+API_KEY)
            .then(({data}) => this.setState({items: data.results}))
            .catch(console.log)
    };

    render() {
        const { items } = this.state;
        return (
            <ArticleList items={items}/>
        )
    }
};