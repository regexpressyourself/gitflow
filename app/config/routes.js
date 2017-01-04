import React from 'react';
import {ReactRouter, Router, Route, hashHistory, IndexRoute} from 'react-router';
import  Main from '../components/Main';
import Home from '../components/Home';
import Start from '../components/Start';
import First from '../components/First';

let routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='/first' component={First}/>
            <Route path='/start' component={Start}/>
        </Route>
    </Router>
)

export default routes;
