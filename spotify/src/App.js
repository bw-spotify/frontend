import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { fetchAllSongs, login, register, logout } from './actions'
import { Route, Redirect, withRouter } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import ProtectedRoute from './components/ProtectedRoute'
import Search from './components/Search'
import NavBar from './components/NavBar'

class App extends Component {

  render() {
    console.log(this.props.error)
    return (
      <div className="App">
        <NavBar loggedIn={this.props.loggedIn} logout={this.props.logout} />
        <ProtectedRoute exact path="/" component={Search} />} />
        <Route path="/login" render={() => ( this.props.loggedIn ? <Redirect to="/"/> : <LoginForm /> )} />
        <Route path="/register" render={() => ( this.props.loggedIn ? <Redirect to="/"/> : <RegisterForm /> )} />
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

export default withRouter(connect(mapStateToProps, { fetchAllSongs, login, register, logout })(App))
