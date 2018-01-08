import axios from 'axios';

import {
  AUTH_USER,
  FETCH_TASK,
  AUTHENTICATION_ERROR,
  REGISTER_USER,
  FETCH_TASKS,
  UNAUTH_USER,
  POST_TASK,
  FETCH_PROJECTS,
  FETCH_TASKS_TODAY,
  UPDATE_TASK,
  DELETE_TASK
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
        dispatch({ type: REGISTER_USER });
        localStorage.clear();
        history.push('/signin');
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


export function getTasksToday() {
  let token = localStorage.getItem('token');
  let config = {
    headers: {
      withCredentials: true,
      'Authorization': 'Bearer ' + token
    }
  };
  return async (dispatch) => {
    axios.get('http://localhost:8080/api/task/today', config)
      .then(response => {
        dispatch({
          type: FETCH_TASKS_TODAY,
          payload: response
        });
      })
      .catch(e => {
        console.log(e);
      });
  };
}

export function getTaskByID(value) {
  let token = localStorage.getItem('token');
  let config = {
    headers: {
      withCredentials: true,
      'Authorization': 'Bearer ' + token
    }
  };
  return async (dispatch) => {
    axios.get('http://localhost:8080/api/task/' + value, config)
      .then(response => {
        dispatch({
          type: FETCH_TASK,
          payload: response
        });
      })
      .catch(e => {
        console.log(e);
      });
  };
}


export function postNewTask(history, values) {
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

export function editTask(id, history, values) {
  let token = localStorage.getItem('token');
  console.log(history)
  return async (dispatch) => {
    axios({
      method: 'put',
      url: 'http://localhost:8080/api/task/' + id,
      data: values,
      headers: {
        withCredentials: true,
        'Authorization': 'Bearer ' + token
      }

    })
      .then(response => {
        dispatch({ type: UPDATE_TASK });
        window.location.reload();


      })
      .catch(e => {
        console.log(e);
      });
  };
}

export function deleteTask(id, history) {
  let token = localStorage.getItem('token');
  return async (dispatch) => {
    axios({
      method: 'delete',
      url: 'http://localhost:8080/api/task/' + id,
      headers: {
        withCredentials: true,
        'Authorization': 'Bearer ' + token
      }

    })
      .then(response => {
        dispatch({ type: DELETE_TASK });
        history.push('/dashboard');


      })
      .catch(e => {
        console.log(e);
      });
  };
}