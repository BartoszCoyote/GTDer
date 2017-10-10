import { combineReducers } from 'redux';
import { reducer as fromReducer } from 'redux-form';
import authReducer from './auth_reducer';

 
const rootReducer = combineReducers({
    form: fromReducer,
    auth: authReducer
});


export default rootReducer;