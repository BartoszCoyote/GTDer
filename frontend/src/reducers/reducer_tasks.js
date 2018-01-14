import { FETCH_ALL_TASKS,FETCH_TASKS, POST_TASK, FETCH_TASK, FETCH_TASKS_TODAY, UPDATE_TASK, DELETE_TASK,FETCH_TASK7,POST_PROJECT,DELETE_PROJECT } from '../action/types';

export default function (state = {}, action) {

  switch (action.type) {
    case FETCH_TASKS_TODAY:
      return [...action.payload.data];

    case FETCH_TASKS:
      return [...action.payload.data];
    case FETCH_TASK7:
    return [...action.payload.data];

    case FETCH_TASK:
      return action.payload.data;
    
    case POST_TASK:
      return state;
    case FETCH_ALL_TASKS:
    return action.payload.data
    case UPDATE_TASK:
      return state;
    case DELETE_TASK:
      return state;
    case POST_PROJECT:
    return state;
    case DELETE_PROJECT:
    return state;


    default:
      return state;
  }
}
