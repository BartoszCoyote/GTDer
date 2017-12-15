import axios from 'axios';

import {
  AUTH_USER,
  AUTHENTICATION_ERROR,
  FETCH_TASKS,
  UNAUTH_USER,
  POST_TASK
} from './types';

export function signinUser(values, history) {
  console.log("logowanie")
  console.log(history)

  return async (dispatch) => {
    axios.post('http://localhost:8080/auth', values)
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        history.push('/dashboard');
      })
      .catch(() => {
        dispatch({
          type: AUTHENTICATION_ERROR,
          payload: 'Invalid email or password'
        });
      });
  };
}

export function signupUser(values, history) {

  return async (dispatch) => {
    axios.post('http://localhost:8080/api/user', values)
      .then(response => {
        dispatch({ type: AUTH_USER });
        history.push('/dashboard');
      })
      .catch(() => {
        dispatch({
          type: AUTHENTICATION_ERROR,
          payload: 'Invalid email or password'
        });
      });
  };
}

export function signoutUser() {
  localStorage.clear();
  return {
    type: UNAUTH_USER
  };
}

export function getTasks() {
  let token = localStorage.getItem('token');
  let config = {
    headers: {
      withCredentials: true,
      'Authorization': 'Bearer ' + token
    }
  };
  console.log(config);
  return async (dispatch) => {
    axios.get('http://localhost:8080/api/task', config)
      .then(response => {
        dispatch({
          type: FETCH_TASKS,
          payload: response
        });
      })
      .catch(e => {
        console.log(e);
      });
  };
}


export function postNewTask(values, history) {
  console.log("logowanie")
  console.log(history)

  let token = localStorage.getItem('token');
  console.log(history)
  return async (dispatch) => {
    axios({
      method: 'post',
      url: 'http://localhost:8080/api/task',
      data: values,
      headers: {
        withCredentials: true,
        'Authorization': 'Bearer ' + token
      }

    })
      .then(response => {
        dispatch({ type: POST_TASK });
        history.push('/dashboard');


      })
      .catch(e => {
        console.log(e);
      });
  };
}