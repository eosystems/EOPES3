import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import estimate from './estimate';

const rootReducer = combineReducers({
    routing: routerReducer,
    estimate
});

export default rootReducer;
