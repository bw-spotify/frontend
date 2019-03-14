import {
  ADD_FAVE,
  SEARCHING_SONGS,
  SEARCH_SUCCESS,
  CLEAR_ERRORS,
  LOGGING_IN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTERING,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  FETCHING_SONGS,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  LOGOUT,
  ALREADY_LOGGED_IN
} from "../actions";

const initialState = {
  registering: false,
  loggingIn: false,
  loggedIn: false,
  songs: [],
  searchedSongs: [],
  favs: [],
  searchingSongs: false,
  fetchingAllSongs: false,
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALREADY_LOGGED_IN:
      return {
        ...state,
        loggedIn: true
      }
    case SEARCH_SUCCESS:
      return {
        ...state,
        searchedSongs: action.payload,
        searchingSongs: false
      }
    case SEARCHING_SONGS:
      return {
        ...state,
        searchingSongs: true
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      }
    case LOGOUT:
      return {
        ...state,
        loggedIn: false
      }
    case LOGGING_IN:
      return {
        ...state,
        loggingIn: true,
        error: null
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
        registering: true,
        error: null
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