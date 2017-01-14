import React        from 'react';
import Main         from '../components/Main';
import Home         from '../components/Home';
import Flow         from '../components/Flow';
import {ReactRouter,
        Router,
        Route,
        hashHistory,
        IndexRoute} from 'react-router';

let routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='/flow' component={Flow} />
        </Route>
    </Router>
)

export default routes;
