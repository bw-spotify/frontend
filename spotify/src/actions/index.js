import axios from 'axios';

export const FETCH_ALL_SONGS = 'FETCH_ALL_SONGS';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

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