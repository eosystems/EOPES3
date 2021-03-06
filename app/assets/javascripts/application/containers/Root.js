import React, { Component } from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from '../components/App';
import estimateIndex from './estimate/estimateIndex';
import EstimateProductEdit from './estimate/EstimateProductEdit';

const store = configureStore();
console.log(store.getState());

const history = syncHistoryWithStore(browserHistory, store);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={estimateIndex}></IndexRoute>
            <Route path="client/estimates/edit" component={EstimateProductEdit} />
          </Route>
        </Router>
      </Provider>
    );
  }
}
