import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_USER } from '.';

const URL = 'http://localhost:3001';

export const signup = (user, history) => async dispatch => {
  const response = await axios.post('/api/users/signup', user)
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.error
      });
    });
  history.push('/login');
}

export const login = (user) => async dispatch => {
  let response = await axios.post(`${URL}/api/users/login`, user)
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
  if (response) {
    const { token } = response.data;
    localStorage.setItem('jwtToken', token);
    setAuthToken(token);
    const decodedToken = jwt_decode(token);
    dispatch(setCurrentUser(decodedToken));
  }
}

export const setCurrentUser = (decodedToken) => {
  return {
    type: SET_USER,
    payload: decodedToken,
  }
}

export const logoutUser = history => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  history.push('/login');
}

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}
