import React, { Component, Fragment } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import axios from 'axios';
import Loader from './Loader/Loader';
import Button from './Button/Button';
// import Searchbar from './Searchbar/Searchbar';



const BASE_URL = 'https://pixabay.com/api/?key=19959220-00887da0a085a7b15fc591a1a&per_page=10&q=';
const DEFAULT_QUERY = 'flowers&image_type=photo';
const PAGE = '&page=';
let counter = 0;
let counter1 = 0;


export default class SerchImgApp extends Component {
    state = {
        articles: [],
        isLoading: false,
        query: '',
    };

    componentDidMount() {
        this.setState({isLoading: true});

        axios
            .get(BASE_URL+DEFAULT_QUERY)
            .then(({data}) => this.setState({articles: data.hits}))
            .catch(console.log)
            .finally(() => this.setState({ isLoading: false }));
    }

    handleQueryChange = e => {
        const { value } = e.target;
        this.setState({query: value})
    };

    handleFormSubmit = e => {
        e.preventDefault();
        const { query } = this.state;

        axios
            .get(BASE_URL+query)
            .then(({data}) => this.setState({articles: [...this.state.articles, ...data.hits]}))
            .catch(console.log)
            .finally(() => this.setState({ isLoading: false }));

        
    };

    handleButtonClick = e => {
        const { query } = this.state;
        counter += 10;
        counter1 +=10;
        if(query === '') {
            axios
                .get(BASE_URL+DEFAULT_QUERY+PAGE+counter)
                .then(({data}) => this.setState({articles: [...this.state.articles, ...data.hits]}))
                .catch(console.log)
                .finally(() => this.setState({ isLoading: false }));
        } else {
            axios
                .get(BASE_URL+query+PAGE+counter1)
                .then(({data}) => this.setState({articles: [...this.state.articles, ...data.hits]}))
                .catch(console.log)
                .finally(() => this.setState({ isLoading: false }));
        }
    }

    render() {
        const { articles, isLoading, query } = this.state;
        return (
            <Fragment>
                {isLoading ? <Loader /> :
                <Searchbar 
                    value={query} 
                    onChange={this.handleQueryChange}
                    onSubmit={this.handleFormSubmit}
                />
            }
                <ImageGallery items={articles}/>
                <Button handleClick={this.handleButtonClick}/>
            </Fragment>
        );
    };
};