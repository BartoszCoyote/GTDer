import { FETCH_ALL_USER,DELETE_USER } from '../action/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_ALL_USER:
      return action.payload.data;
    case DELETE_USER:
    return state;
    default:
      return state;
  }
}
