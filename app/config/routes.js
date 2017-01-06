import React        from 'react';
import {ReactRouter,
        Router,
        Route,
        hashHistory,
        IndexRoute} from 'react-router';
import Main         from '../components/Main';
import Home         from '../components/Home';
import Start        from '../components/Start';
import First        from '../components/First';
import Flow         from '../components/Flow';
import Init         from '../components/Init';

let routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='/first' component={First}/>
            <Route component={Flow}>
                <Route path='/flow/start' component={Start}/>
                <Route path='/flow/init' component={Init}/>
            </Route>
        </Route>
    </Router>
)

export default routes;
