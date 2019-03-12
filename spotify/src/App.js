import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { fetchAllSongs, login, register } from './actions'
import { Route, Redirect, withRouter } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import ProtectedRoute from './components/ProtectedRoute'
import Search from './components/Search'

class App extends Component {

  render() {
    return (
      <div className="App">
        <ProtectedRoute exact path="/" component={Search} />} />
        <Route path="/login" render={() => ( this.props.loggedIn ? <Redirect to="/"/> : <LoginForm login={this.props.login} /> )} />
        <Route path="/register" render={() => ( this.props.loggedIn ? <Redirect to="/"/> : <RegisterForm register={this.props.register} /> )} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggingIn: state.loggingIn,
    loggedIn: state.loggedIn,
    songs: state.songs,
    fetchingAllSongs: state.fetchingAllSongs,
    error: state.error
  }
}

export default withRouter(connect(mapStateToProps, { fetchAllSongs, login, register })(App))
