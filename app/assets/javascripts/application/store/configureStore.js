import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import syncHistroyWithStore from 'react-router-redux';

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

const history = syncHistroyWithStore(browserHistory, store);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
