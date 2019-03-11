import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { fetchAllSongs, login } from './actions'
import SongList from './components/SongList'
import LoginForm from './components/LoginForm'

class App extends Component {

  componentDidMount() {
    this.props.fetchAllSongs()
  }

  render() {
    return (
      <div className="App">
        {this.props.loggedIn ? (this.props.fetchingAllSongs ? <p>Loading</p> : <SongList songs={this.props.songs} />) : <LoginForm login={this.props.login} error={this.props.error ? true : false} />}
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

export default connect(mapStateToProps, { fetchAllSongs, login })(App)
