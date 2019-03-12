import axios from 'axios'
import axiosWithAuth from '../axiosAuth'

export const LOGGING_IN = 'LOGGING_IN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const REGISTERING = 'REGISTERING'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'
export const FETCHING_SONGS = 'FETCHING_SONGS'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FAILURE'
export const LOGOUT = 'LOGOUT'

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  })
}

export const login = (user, pass) => dispatch => {
  console.log('logging in', user, pass)
  dispatch({
    type: LOGGING_IN
  })
  axios.post('https://bw-spotify-backend.herokuapp.com/api/login', {username: user, password: pass})
  .then(res => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    })
  })
  .catch(err => {
    console.log(err)
    dispatch({
      type: LOGIN_FAILURE,
      payload: err
    })
  })
}

export const register = (user, pass) => dispatch => {
  console.log('registering', user, pass)
  dispatch({
    type: REGISTERING
  })
  axios.post('https://bw-spotify-backend.herokuapp.com/api/register', {username: user, password: pass})
  .then(res => {
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })
  })
  .catch(err => {
    console.log(err)
    dispatch({
      type: REGISTER_FAILURE,
      payload: err
    })
  })
}

export const fetchAllSongs = () => dispatch => {
  console.log('fetching all songs');
  dispatch({
    type: FETCHING_SONGS
  });
  axiosWithAuth().get('https://bw-spotify-backend.herokuapp.com/api/songs')
  .then(res => {
    dispatch({
      type: FETCH_SUCCESS,
      payload: res.data
    });
  })
  .catch(err => {
    dispatch({
      type: FETCH_FAILURE,
      payload: err
    });
  });
}