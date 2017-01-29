import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { routerReducer } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(
    thunk
  )
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
