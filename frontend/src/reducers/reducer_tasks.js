import { FETCH_TASKS, POST_TASK } from '../action/types';

export default function (state = {}, action) {

  switch (action.type) {
    case FETCH_TASKS:
      return [...action.payload.data];
    case POST_TASK:
      return state;


    default:
      return state;
  }
}
