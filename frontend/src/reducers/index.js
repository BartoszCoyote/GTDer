import { combineReducers } from 'redux';
import { reducer as fromReducer } from 'redux-form';

import authReducer from './auth_reducer';
import taskReducer from './reducer_tasks';
import projectReducer from './reducer_projects';
import userReducer from './user_reducer';
import adminReducer from './admin_reducer'

const rootReducer = combineReducers({
  form: fromReducer,
  auth: authReducer,
  task: taskReducer,
  project: projectReducer,
  user: userReducer,
  admin: adminReducer


});

export default rootReducer;
