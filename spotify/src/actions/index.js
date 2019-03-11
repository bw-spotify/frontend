import axios from 'axios';

export const LOGGING_IN = 'LOGGING_IN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const FETCH_ALL_SONGS = 'FETCH_ALL_SONGS';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const login = (user, pass) => dispatch => {
  console.log('logging in', user, pass)
  dispatch({
    type: LOGGING_IN
  })
  axios.post('http://localhost:3333/login', {username: user, password: pass})
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

export const fetchAllSongs = () => dispatch => {
  console.log('fetching all songs');
  dispatch({
    type: FETCH_ALL_SONGS
  });
  axios.get('http://localhost:3333/songs')
  .then(res => {
    dispatch({
      type: SUCCESS,
      payload: res.data
    });
  })
  .catch(err => {
    dispatch({
      type: FAILURE,
      payload: err
    });
  });
}