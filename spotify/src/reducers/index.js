import { FETCH_ALL_SONGS, SUCCESS, FAILURE } from "../actions";

const initialState = {
  songs: [],
  fetchingAllSongs: false,
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_SONGS:
      return {
        ...state,
        fetchingAllSongs: true
      }
    case SUCCESS:
      return {
        ...state,
        songs: action.payload,
        fetchingAllSongs: false,
      }
    case FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};

export default rootReducer;