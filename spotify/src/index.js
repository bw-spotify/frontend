import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { LOGIN_SUCCESS, REGISTER_SUCCESS } from './actions'

const addTokenToLocalStorage = store => next => action => {
  if(action.type === LOGIN_SUCCESS || action.type === REGISTER_SUCCESS) {
    localStorage.setItem('userToken', action.payload.token);
  }
  next(action);
};

const store = createStore(
  rootReducer,
  applyMiddleware(addTokenToLocalStorage, thunk, logger)
);

ReactDOM.render(

  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
