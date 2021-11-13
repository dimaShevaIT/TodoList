import React, {Component} from 'react';
import axios from 'axios';
import ArticleList from './ArticleList/ArticleList';
import Loader from './Loader/Loader';
import ErrorNotification from './ErrorNotification/ErrorNotification';
import * as articleAPI from '../../services/article-api';
import SearchForm from './SearchForm/SearchForm';
import withFetch from '../hoc/withFetch';
import Toggleble from '../renderProp/Toggleble';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen, faTimes} from '@fortawesome/free-solid-svg-icons'



const mapper = articles => {
    return articles.map(({ objectID: id, url: link, ...props}) => ({
        id,
        link,
        ...props,
    }));
}

class FetchApp extends Component {
    state = {
        articles: [],
        isLoading: false,
        error: null,
    };

    componentDidMount() {
        this.fetchArticles();
    }

    fetchArticles = query => {
        this.setState({isLoading: true});
        articleAPI
    .fetchArticles(query)
    .then(({data}) => {
        this.setState({ articles: mapper(data.hits) });
    })
    .catch(console.log)
    .finally(() => {
        this.setState({isLoading: false})
    })
    }
    
    
    render() {
        const {data, isLoading, error} = this.props;
        let articles = [];
        if (data.hits) {
            articles = mapper(data.hits);
        } 
        return (
            <div>
                <SearchForm onSubmit={this.fetchArticles}/>
                {error && <ErrorNotification text={error.statusText} />}
                {isLoading && <Loader />}
                {articles.length > 0 && 
                <Toggleble>
                    {({on, onToggle}) => 
                        <div>
                        {<button onClick={onToggle}>{on ? <FontAwesomeIcon icon={faFolderOpen}/> : <FontAwesomeIcon icon={faTimes}/>}</button>}
                        {on && <ArticleList items={articles}/>}
                        </div>}
                </Toggleble> }
            </div>
        );
    }
};

export default withFetch(`https://hn.algolia.com/api/v1/search?query=css`)(FetchApp);