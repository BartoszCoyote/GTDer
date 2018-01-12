import { FETCH_USER ,UNAUTH_USER,FETCH_ME,UPDATE_USER} from '../action/types';

export default function (state = {}, action) {
  switch (action.type) {
   case FETCH_USER:
   return action.payload.data;
   case FETCH_ME:
   return action.payload.data;
   case UPDATE_USER:
   return state;
   case UNAUTH_USER:
      return { state, authenticated: false };
   
   default:
      return state;
  }
}
