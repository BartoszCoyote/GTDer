import { combineReducers } from 'redux';
import { reducer as fromReducer } from 'redux-form';

import authReducer from './auth_reducer';
import taskReducer from './reducer_tasks';
import projectReducer from './reducer_projects';

const rootReducer = combineReducers({
  form: fromReducer,
  auth: authReducer,
  task: taskReducer,
  project: projectReducer

});

export default rootReducer;
