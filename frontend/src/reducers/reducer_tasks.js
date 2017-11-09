import {FETCH_TASKS} from '../action/types';

export default function (state = {}, action) {

  switch (action.type){

    case FETCH_TASKS:
      console.log([...action.payload.data]);
      return [ ...action.payload.data, ...state];
      default:
      return state;
  }

}
