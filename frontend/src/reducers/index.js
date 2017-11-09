import {combineReducers} from 'redux';
import {reducer as fromReducer} from 'redux-form';
import authReducer from './auth_reducer';
import taskReducer from './reducer_tasks';


const rootReducer = combineReducers({
    form: fromReducer,
    auth: authReducer,
    task: taskReducer

});


export default rootReducer;
