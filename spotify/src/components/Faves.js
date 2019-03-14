import React from 'react'
import axios from 'axios'
import axiosWithAuth from '../axiosAuth'

class Faves extends React.Component {
  state = {faves: []}
  componentDidMount() {
    axiosWithAuth().get('https://bw-spotify-backend.herokuapp.com/api/faves')
    .then(res => {
      this.setState({faves: res.data})
    })
    .catch(err => {
      console.log('failed to fetch faves', err)
    })
  }
  deleteFav = id => {
    axiosWithAuth().delete('https://bw-spotify-backend.herokuapp.com/api/faves', {songId: id})
    .then(res => {
      this.setState({faves: res.data})
    })
    .catch(err => {
      console.log('failed to delete fave', err)
    })
  }
  render() {
    return (
      <div className="faves">
        {this.state.faves.map(f => {
          console.log(f.id)
          return (
            <div className="fav">
              <p>{f.track_name} by {f.artist_name}</p>
              <button onClick={() => this.deleteFav(f.id)}>X</button>
            </div>
          )
        })}
      </div>
    )
  }
}
 
export default Faves;