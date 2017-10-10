import axios from 'axios';
import { AUTH_USER } from './types';
import { AUTHENTICATION_ERROR } from './types';

export function signinUser(values,history){
    return async (dispatch) => {

        try{
        axios.post('http://localhost:8585/auth',values)
        .then(response => {
            
          dispatch({ type: AUTH_USER});
          localStorage.setItem('token', response.data.token);
          history.push('/dashboard');      
            
          })
        }
          catch(error){
            dispatch({
                type: AUTHENTICATION_ERROR,
                payload: 'Invalid email or password'
              });
          
                       
            
          }
        };

}
