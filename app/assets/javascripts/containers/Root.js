import React, { Component } from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import EstimateApp from './EstimateApp';
import configureStore from '../store/configureStore';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <EstimateApp />
      </Provider>
    );
  }
}
