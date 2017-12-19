import axios from 'axios';

import {
  AUTH_USER,
  AUTHENTICATION_ERROR,
  FETCH_TASKS,
  UNAUTH_USER,
  POST_TASK,
  FETCH_PROJECTS
} from './types';

export function signinUser(values, history) {

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

export function getTasks(value) {
  let token = localStorage.getItem('token');
  let config = {
    headers: {
      withCredentials: true,
      'Authorization': 'Bearer ' + token
    }
  };
  return async (dispatch) => {
    axios.get('http://localhost:8080/api/project/' + value, config)
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

export function getProjects() {
  let token = localStorage.getItem('token');
  let config = {
    headers: {
      withCredentials: true,
      'Authorization': 'Bearer ' + token
    }
  };
  return async (dispatch) => {
    axios.get('http://localhost:8080/api/project', config)
      .then(response => {
        dispatch({
          type: FETCH_PROJECTS,
          payload: response
        });
      })
      .catch(e => {
        console.log(e);
      });
  };
}
