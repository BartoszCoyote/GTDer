import { AUTH_USER, AUTHENTICATION_ERROR, UNAUTH_USER, REGISTER_USER } from '../action/types';

export default function (state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };
    case REGISTER_USER:
      return { ...state }
    default:
      return state;
  }
}
