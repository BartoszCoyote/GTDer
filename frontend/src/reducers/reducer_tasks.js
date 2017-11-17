import {FETCH_TASKS} from '../action/types';

export default function (state = {}, action) {

  switch (action.type) {
    case FETCH_TASKS:
      return [...action.payload.data];
    default:
      return state;
  }
}
