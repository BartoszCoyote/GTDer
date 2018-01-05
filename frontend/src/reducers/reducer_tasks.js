import { FETCH_TASKS, POST_TASK, FETCH_TASK, FETCH_TASKS_TODAY } from '../action/types';

export default function (state = {}, action) {

  switch (action.type) {
    case FETCH_TASKS_TODAY:
      return [...action.payload.data];

    case FETCH_TASKS:
      return [...action.payload.data];
    case FETCH_TASK:
      return action.payload.data;

    case POST_TASK:
      return state;


    default:
      return state;
  }
}
