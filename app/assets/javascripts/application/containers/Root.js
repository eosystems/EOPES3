import React, { Component } from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import estimateIndex from './estimate/estimateIndex';
import configureStore from '../store/configureStore';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistroyWithStore } from 'react-router-redux';
import { createStore, combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={estimateIndex}>
          </Route>
        </Router>
      </Provider>
    );
  }
}
