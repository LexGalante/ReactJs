import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux';
import reduxStore from './store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {LayoutScreen} from './screens/layout/LayoutScreen';
import {HomeScreen} from './screens/layout/HomeScreen';

ReactDOM.render(
    <Provider store={reduxStore()}>
        <BrowserRouter>
            <Route component={LayoutScreen}/>
            <Switch>
                <Route path="/" exact={true} component={HomeScreen} />
            </Switch>
        </BrowserRouter>        
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
