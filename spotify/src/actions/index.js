import axios from 'axios'
import axiosWithAuth from '../axiosAuth'

export const ALREADY_LOGGED_IN = 'ALREADY_LOGGED_IN'
export const ADD_FAVE = 'ADD_FAVE'
export const SEARCHING_SONGS = 'CLEAR_ERRORS'
export const SEARCH_SUCCESS = 'LOGGING_IN'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'
export const LOGGING_IN = 'LOGGING_IN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const REGISTERING = 'REGISTERING'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'
export const PASSWORD_MISMATCH = 'PASSWORD_MISMATCH'
export const FETCHING_SONGS = 'FETCHING_SONGS'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FAILURE'
export const LOGOUT = 'LOGOUT'

  export const passwordMismatch = () => dispatch => {
    dispatch({
      type: PASSWORD_MISMATCH
    })
  }

export const ensureLoggedIn = () => dispatch => {
  dispatch({
    type: ALREADY_LOGGED_IN
  })
}

export const clearErrors = () => dispatch => {
  dispatch({
    type: CLEAR_ERRORS
  })
}

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  })
}

export const login = (user, pass) => dispatch => {
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
    console.log('error', err)
    dispatch({
      type: LOGIN_FAILURE,
      payload: err
    })
  })
}

export const register = (user, pass) => dispatch => {
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
    console.log('err', err)
    dispatch({
      type: REGISTER_FAILURE,
      payload: err
    })
  })
}

export const fetchAllSongs = () => dispatch => {
  dispatch({
    type: FETCHING_SONGS
  });
  axiosWithAuth().get('https://bw-spotify-backend.herokuapp.com/api/songs')
  .then(res => {
    console.log("res data here: ", res.data)
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

export const searchSongs = snippet => dispatch => {
  dispatch({
    type: SEARCHING_SONGS
  });
  axiosWithAuth().get(`https://bw-spotify-backend.herokuapp.com/api/songs/search?q=${snippet}&page=1&limit=200`)
  .then(res => {
    dispatch({
      type: SEARCH_SUCCESS,
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