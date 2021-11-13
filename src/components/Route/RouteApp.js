import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import AboutPage from '../../pages/AboutPage';
import ArticlesPage from '../../pages/ArticlesPage';
import NotFound from '../../pages/NotFound';
import Nav from '../../pages/Nav';
import Article from '../../pages/Article';



const containerStyles = {
    maxWidth: 1170,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 'padding: 0 16px',
};

const RouteApp = () => (
        <div style={containerStyles}>
            <Nav />
                <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about"  component={AboutPage} />
                <Route path="/articles/:articleId" component={Article} />
                <Route path="/articles" component={ArticlesPage} />
                <Route component={NotFound} />
                </Switch>
        </div> 
  
    );

export default RouteApp;