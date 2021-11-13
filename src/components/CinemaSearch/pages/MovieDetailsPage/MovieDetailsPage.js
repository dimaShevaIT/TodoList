import React, { Component } from 'react';
import axios from 'axios';
import Article from '../../Article/Article';
import Cast from './Cast';


const getIdFromProps = props => props.match.params.movieId;
const BASE_URL = "https://api.themoviedb.org/3/movie/"
const API_KEY = "?api_key=798fca9bb82ef1264026c9ada2e6b0c2";

export default class MovieDetailsPage extends Component {
    state = {
        data: null,
    };
    
    componentDidMount () {
        const id = getIdFromProps(this.props);
        axios
            .get(BASE_URL+id+API_KEY)
            .then(({data}) => this.setState({data}))
            .catch(console.log)
    }


    render() {
        const { data } = this.state;
        const id = getIdFromProps(this.props);
        return ( 
            <div>        
                {data && <Article data={data} />}
                <hr />
                <p>Additional information</p> 
                <Cast  id={id}/>

                <hr />
            </div>
        ) 
    }
}