import React from 'react'
import axiosWithAuth from '../axiosAuth'

class Faves extends React.Component {
  constructor() {
    super()
    this.state = {
      faves: []
    }
  }
  componentDidMount() {
    this.getFaves()
  }
  // componentDidUpdate() {
  //   this.getFaves()
  // }
  getFaves = () => {
    axiosWithAuth().get('https://bw-spotify-backend.herokuapp.com/api/faves')
    .then(res => {
      console.log('fetched faves', res.data)
      this.setState({faves: res.data})
    })
    .catch(err => {
      console.log('failed to fetch faves', err)
    })
  }
  deleteFav = id => {
    axiosWithAuth().delete('https://bw-spotify-backend.herokuapp.com/api/faves', {data: {songId: id}})
    .then(res => {
      console.log('delete worked')
      this.getFaves()
    })
    .catch(err => {
      console.log('failed to delete fave', err)
    })
  }
  render() {
    if(this.state.faves.length > 0) {
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
    else {
      return (
        <div className="faves">
          No favorites to display yet :/
        </div>
      )
    }
  }
}
 
export default Faves;