import { FETCH_USER ,UNAUTH_USER} from '../action/types';

export default function (state = {}, action) {
  switch (action.type) {
   case FETCH_USER:
   return action.payload.data;
   
   default:
      return state;
  }
}