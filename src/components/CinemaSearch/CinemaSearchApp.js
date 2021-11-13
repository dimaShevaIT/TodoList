import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './pages/Nav';
import HomePage from './pages/HomePage';
import MovisPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';


const CinemaSearchApp = () => (
    <div>
        <Nav/>
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
            <Route path="/movies" component={MovisPage} />  
        </Switch>
    </div>
);

export default CinemaSearchApp;