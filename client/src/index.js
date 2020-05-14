import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Chat from "./components/Chat";

import {createStore, compose, applyMiddleware} from "redux";
import {devToolsEnhancer} from "redux-devtools-extension";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import initialReducer from './store/reducers/initialReducer'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export const store = createStore(
    initialReducer,
    compose(
        applyMiddleware(thunk),
        devToolsEnhancer()
    )
)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route path='/' exact component={Chat}/>
                </Switch>
            </App>
        </Router>
    </Provider>,

    document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();