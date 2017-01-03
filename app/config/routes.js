import React from 'react';
import {ReactRouter, Router, Route, hashHistory, IndexRoute} from 'react-router';
import  Main from '../components/Main';
import Home from '../components/Home';

let routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
        </Route>
    </Router>
)

export default routes;
