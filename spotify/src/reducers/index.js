import { LOGGING_IN, LOGIN_SUCCESS, LOGIN_FAILURE, FETCH_ALL_SONGS, SUCCESS, FAILURE } from "../actions";

const initialState = {
  loggingIn: false,
  loggedIn: false,
  songs: [],
  fetchingAllSongs: false,
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return {
        ...state,
        loggingIn: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loggingIn: false,
        error: null
      }
      case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      }
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
        fetchingAllSongs: false,
        error: action.payload
      }
    default:
      return state;
  }
};

export default rootReducer;