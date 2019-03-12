import {
  LOGGING_IN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTERING,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  FETCHING_SONGS,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  LOGOUT
} from "../actions";

const initialState = {
  registering: false,
  loggingIn: false,
  loggedIn: false,
  songs: [],
  fetchingAllSongs: false,
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        loggedIn: false
      }
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
      case REGISTERING:
      return {
        ...state,
        registering: true
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        registering: false,
        error: null
      }
      case REGISTER_FAILURE:
      return {
        ...state,
        registering: false,
        error: action.payload
      }
    case FETCHING_SONGS:
      return {
        ...state,
        fetchingAllSongs: true
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        songs: action.payload,
        fetchingAllSongs: false,
      }
    case FETCH_FAILURE:
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