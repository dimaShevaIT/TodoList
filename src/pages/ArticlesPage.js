import React, { Component } from 'react';
import axios from 'axios';
import ArticleList from '../components/Route/ArticleList';
import CategorySelect from '../components/Route/CategorySelect';


const categories = [
    {
        value: 'health',
        label: 'Health',
    },
    {
        value: 'technology',
        label: 'Technology',
    },
    {
        value: 'sport',
        label: 'Sport',
    },
];


const BASE_URL = 'https://pixabay.com/api/?key=19959220-00887da0a085a7b15fc591a1a&per_page=10&q=';
const DEFAULT_QUERY = 'flowers&image_type=photo';

export default class ArticlesPage extends Component {
    state = {
        items: [],
    };

    componentDidMount() {
        axios
        .get(BASE_URL+DEFAULT_QUERY)
        .then(({data}) => this.setState({items: data.hits}))
        .catch(console.log)
        .finally(() => this.setState({ isLoading: false }));
    }

    render() {
        const { items } = this.state;
        return (
            <div>
                <CategorySelect options={categories} />
                <h1>Articles Page</h1>
                <ArticleList items={items} />
               
            </div>
        );
    };
};