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
  DELETE_TASK,
  FETCH_TASK7,
  FETCH_USER,
  POST_PROJECT,
  DELETE_PROJECT,
  FETCH_ME,
  UPDATE_USER,
  FETCH_ALL_TASKS
} from './types';

export function signinUser(values, history) {

  return async (dispatch) => {
    axios.post('http://localhost:8080/auth', values)
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        history.push('/dashboard');
        window.location.reload();


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

export function getTask7days() {
  let token = localStorage.getItem('token');
  let config = {
    headers: {
      withCredentials: true,
      'Authorization': 'Bearer ' + token
    }
  };
  return async (dispatch) => {
    axios.get('http://localhost:8080/api/task/7days', config)
      .then(response => {
        dispatch({
          type: FETCH_TASK7,
          payload: response
        });
      })
      .catch(e => {
        console.log(e);
      });
  };
}

export function whosLOgged() {
  let token = localStorage.getItem('token');
  let config = {
    headers: {
      withCredentials: true,
      'Authorization': 'Bearer ' + token
    }
  };
  return async (dispatch) => {
    axios.get('http://localhost:8080/api/user/who', config)
      .then(response => {
        dispatch({
          type: FETCH_USER,
          payload: response
        });
      })
      .catch(e => {
        console.log(e);
      });
  };
}

export function postNewProject(values) {
  let token = localStorage.getItem('token');
  return async (dispatch) => {
    axios({
      method: 'post',
      url: 'http://localhost:8080/api/project',
      data: values,
      headers: {
        withCredentials: true,
        'Authorization': 'Bearer ' + token
      }

    })
      .then(response => {
        dispatch({ type: POST_PROJECT });
        window.location.reload();


      })
      .catch(e => {
        console.log(e);
      });
  };
}


export function deleteProject(id) {
  let token = localStorage.getItem('token');
  return async (dispatch) => {
    axios({
      method: 'delete',
      url: 'http://localhost:8080/api/project/' + id,
      headers: {
        withCredentials: true,
        'Authorization': 'Bearer ' + token
      }

    })
      .then(response => {
        dispatch({ type: DELETE_PROJECT });
        window.location.reload();


      })
      .catch(e => {
        console.log(e);
      });
  };
}

export function getMe() {
  let token = localStorage.getItem('token');
  let config = {
    headers: {
      withCredentials: true,
      'Authorization': 'Bearer ' + token
    }
  };
  return async (dispatch) => {
    axios.get('http://localhost:8080/api/user/me', config)
      .then(response => {
        dispatch({
          type: FETCH_ME,
          payload: response
        });
      })
      .catch(e => {
        console.log(e);
      });
  };
}


export function editUser(id, history, values) {
  let token = localStorage.getItem('token');
  console.log(history)
  return async (dispatch) => {
    axios({
      method: 'put',
      url: 'http://localhost:8080/api/user/' + id,
      data: values,
      headers: {
        withCredentials: true,
        'Authorization': 'Bearer ' + token
      }

    })
      .then(response => {
        dispatch({ type: UPDATE_USER });
        history.goBack();


      })
      .catch(e => {
        console.log(e);
      });
  };
}


export function getAllTasks() {
  let token = localStorage.getItem('token');
  let config = {
    headers: {
      withCredentials: true,
      'Authorization': 'Bearer ' + token
    }
  };
  return async (dispatch) => {
    axios.get('http://localhost:8080/api/task', config)
      .then(response => {
        dispatch({
          type: FETCH_ALL_TASKS,
          payload: response
          
        })
        ;
      })
      .catch(e => {
        console.log(e);
      });
  };
}
