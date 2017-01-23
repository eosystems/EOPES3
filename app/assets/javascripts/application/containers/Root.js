import React, { Component } from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import estimateIndex from './estimate/estimateIndex';
import configureStore from '../store/configureStore';
import { Router, Route, browserHistory } from 'react-router';
import { createStore, combineReducers } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux';

const store = configureStore();

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
