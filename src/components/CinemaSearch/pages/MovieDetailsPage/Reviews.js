import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3/movie/"
const API_KEY = "/reviews?api_key=798fca9bb82ef1264026c9ada2e6b0c2";


export default class Reviews extends Component {
    state = {
        data: [],
        isOpen: false,
    };

    componentDidMount () {
        const id = this.props.id;
        axios
            .get(BASE_URL+id+API_KEY)
            .then(({data}) => this.setState({data: data.results}))
            .catch(console.log)
    };

    handleClick = () => {
        this.setState({ isOpen: true });
    }

    render() {
        const { data, isOpen } = this.state;
        console.log(data.content);
        return(
            <h1>Hello World</h1>
            // <div >
            //     <ul className={styles.ul}>
            //         <li className={styles.li}>
            //             <NavLink to={`/movies/${this.props.id}`} onClick={this.handleClick} >Casts</NavLink>
            //         </li>
            //         <li className={styles.li}>
            //             <NavLink to={`/movies/${this.props.id}`} >Reviews</NavLink>
            //         </li>
            //     </ul>
            //     <ul>
            //     {isOpen && data.map(item => (
            //         <li key={item.id}>
            //             <img src={`https://image.tmdb.org/t/p/w200${item.profile_path}`} alt={item.name} />
            //             <p>{item.name}</p>
            //             <p>Character: {item.character}</p>
            //         </li>
            //     ))}
            // </ul>
            // </div>
            
        )
    }
}
