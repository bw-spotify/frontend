import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { fetchAllSongs, login, register, logout, ensureLoggedIn } from './actions'
import { Route, withRouter } from 'react-router-dom' // Redirect was imported but never used
// import LoginForm from './components/LoginForm'
// import RegisterForm from './components/RegisterForm'
// import ProtectedRoute from './components/ProtectedRoute'
// import Faves from './components/Faves'
import Song from './components/Song'
import Search from './components/Search'
import NavBar from './components/NavBar'

class App extends Component {
  componentWillMount() {
    // if (localStorage.getItem('userToken') !== null) {
    //   this.props.ensureLoggedIn()
    // }
  }
  render() {
    return (
      <div className="App">
        <NavBar loggedIn={this.props.loggedIn} logout={this.props.logout} />
        <Route exact path="/" component={Search} placeholder={this.props.placeholderText} />
        <Route path="/songs/:id" component={Song} />
        {/* <ProtectedRoute path="/faves" component={Faves} />
        <Route path="/login" render={() => ( this.props.loggedIn ? <Redirect to="/" /> : <LoginForm /> )} />
        <Route path="/register" render={() => ( this.props.loggedIn ? <Redirect to="/" /> : <RegisterForm /> )} /> */}
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

export default withRouter(connect(mapStateToProps, { fetchAllSongs, login, register, logout, ensureLoggedIn })(App))
