import axios from 'axios';
import { push } from 'react-router-redux';
import { history } from '../store/configureStore';



export function signinUser({username,password}){
    return function(dispatch){

        axios.post('http://localhost:8383/auth', { username, password})
        .then(function (response) {
          
          
          return dispatch(history.push('/'));
          
          })
          .catch(function (error) {
           return dispatch(push('/'));
          });
        };

}