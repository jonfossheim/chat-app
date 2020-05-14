import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import WelcomeScreen from "./pages/WelcomeScreen";
import Room from "./pages/Room";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <Router>
        <App>
            <Switch>
                <Route path='/' exact component={WelcomeScreen}/>
                <Route path='/room' component={Room}/>
            </Switch>
        </App>
    </Router>,

    document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();