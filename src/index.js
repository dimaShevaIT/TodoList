import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.render( <Provider store={store}><BrowserRouter><Route component={App} /></BrowserRouter></Provider> , document.getElementById('root'));




