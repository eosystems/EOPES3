import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import estimate from './estimate';
import { reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    routing: routerReducer,
    estimate,
    form: formReducer
});

export default rootReducer;
