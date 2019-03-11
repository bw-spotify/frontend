import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { fetchAllSongs } from './actions'
import SongList from './components/SongList'
import LoginForm from './components/LoginForm'

class App extends Component {

  componentDidMount() {
    this.props.fetchAllSongs()
  }

  render() {
    return (
      <div className="App">
        <LoginForm />
        {/* <SongList songs={this.props.songs} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs,
    fetchingAllSongs: state.fetchingAllSongs,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchAllSongs })(App)
