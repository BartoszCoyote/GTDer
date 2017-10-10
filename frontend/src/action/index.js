import axios from 'axios';
import { AUTH_USER } from './types';
import { AUTHENTICATION_ERROR } from './types';
import { UNAUTH_USER } from './types';
 
export function signinUser(values,history){
    return async (dispatch) => {

        
        axios.post('http://localhost:8585/auth',values)
        .then(response => {
          dispatch({ type: AUTH_USER});
          localStorage.setItem('token', response.data.token);
          history.push('/dashboard');      
            
          })
         .catch(() => {
          dispatch({
            type: AUTHENTICATION_ERROR,
            payload: 'Invalid email or password'
          });
         });
        }
      }

export function signoutUser(){
  localStorage.clear();
  return{
    type: UNAUTH_USER 
  };

}