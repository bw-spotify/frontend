import React, { Component } from 'react';
import './Search.css';
import { Bar } from 'react-chartjs-2';
import axiosWithAuth from '../axiosAuth'
import Loader from 'react-loader-spinner'

class Song extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {},
            song: {},
            loading: true
        };
    }

    componentDidMount() {
      axiosWithAuth().get(`https://bw-spotify-backend.herokuapp.com/api/songs?id=${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          song: res.data,
          chartData: this.getChartData(res.data),
          loading: false
        })
      })
      .catch(err => {
        console.log('get songs failed')
      })
    }

    // componentWillReceiveProps() {
    //   this.getSong()
    // }

    getSong = id => {
      axiosWithAuth().get(`https://bw-spotify-backend.herokuapp.com/api/songs?id=${id}`)
      .then(res => {
        this.setState({
          song: res.data,
          chartData: this.getChartData(res.data),
          loading: false
        })
      })
      .catch(err => {
        console.log('get songs failed')
      })
    }

    getSongData(song) {
      let songNum = [
        song.acousticness,
        song.danceability,
        song.energy,
        song.instrumentalness,
        // song.key,
        song.liveness,
        // song.loudness,
        // song.mode,
        song.speechiness,
        // song.time_signature,
        // song.valence,
        // song.similars
      ]
      return songNum
    }

    getChartData(song) {
      return {
          labels: [
            'Acousticness',
            'Danceability',
            'Energy',
            'Instrumentalness',
            // 'Key',
            'Liveness',
            // 'Loudness',
            // 'Mode',
            'Speechiness',
            // 'Time Signature',
            // 'Valence'
          ],
          datasets: [
              {
                  label:'Number',
                  data: this.getSongData(song),
                  backgroundColor:[
                      'rgba(204, 0, 255, 0.3)',
                      'rgba(255, 102, 255, 0.3)',
                      'rgba(255, 99, 132, 0.3)',
                      'rgba(255, 159, 64, 0.3)',
                      'rgba(255, 206, 86, 0.3)',
                      'rgba(255, 255, 51, 0.3)',
                      // 'rgba(51, 204, 51, 0.3)',
                      // 'rgba(75, 192, 192, 0.3)',
                      // 'rgba(54, 162, 235, 0.3)',
                      // 'rgba(153, 102, 255, 0.3)',
                      // 'rgba(51, 0, 102, 0.3)',
                  ]
              }
          ]
      }
  }

  addFave = id => dispatch => {
    axiosWithAuth().post(`https://bw-spotify-backend.herokuapp.com/api/faves`, {songId: id})
    .then(res => {
      console.log('fav success!')
    })
    .catch(err => {
      console.log(err)
    })
  }

  changeSong = id => {
    this.setState({song: [], loading: true})
    this.props.history.push(`/songs/${id}`)
    this.getSong(id)
  }

  render() {
    const { song } = this.state;
    
    if(Object.entries(this.state.song).length !== 0 && !this.state.loading) {
      let convert = "";
      if (this.state.song.key === -1) {
        convert = "N/A"
      } else if (this.state.song.key === 0) {
        convert = "C"
      } else if(this.state.song.key === 1) {
        convert = "C# / Db"
      } else if (this.state.song.key === 2) {
        convert = "D"
      } else if (this.state.song.key === 3) {
        convert = "D# / Eb"
      } else if (this.state.song.key === 4) {
        convert = "E"
      } else if (this.state.song.key === 5) {
        convert = "F"
      } else if (this.state.song.key === 6) {
        convert = "F# / Gb"
      } else if (this.state.song.key === 7) {
        convert = "G"
      } else if (this.state.song.key === 8) {
        convert = "G# / Ab"
      } else if (this.state.song.key === 9) {
        convert = "A"
      } else if (this.state.song.key === 10) {
        convert = "A# / Bb"
      } else if (this.state.song.key === 11) {
        convert = "B"
      }
      return (
        <div>
          <div className="infoDisplay">
            <div className="musicChart">
              <Bar
                data={this.state.chartData}
                options={{
                    legend:{
                        display: false,
                    },
                    maintainAspectRatio: false,
                }}
              />
            </div>
            <div className="dataSong">
              <div className="dataList">
                <p className="trackInfo">{song.track_name}</p>
                <div className="trackID"><p className="dataType">Artist: </p><p className="nolimit"> {song.artist_name}</p></div>
                <div className="trackID"><p className="dataType">Acousticness: </p><p className="limit"> {song.acousticness}</p></div>
                <div className="trackID"><p className="dataType">Danceability: </p><p className="limit"> {song.danceability}</p></div>
                {/* <div className="trackID"><p className="dataType">Duration in ms: </p><p> {song.duration_ms}</p></div> */}
                <div className="trackID"><p className="dataType">Energy: </p><p className="limit"> {song.energy}</p></div>
                <div className="trackID"><p className="dataType">Instrumentalness: </p><p className="limit"> {song.instrumentalness}</p></div>
                <div className="trackID"><p className="dataType">Key: </p><p className="nolimit"> {convert}</p></div>
                <div className="trackID"><p className="dataType">Liveness: </p><p className="limit"> {song.liveness}</p></div>
                {/* <div className="trackID"><p className="dataType">Loudness: </p><p> {song.loudness}</p></div> */}
                {/* <div className="trackID"><p className="dataType">Mode: </p><p> {song.mode}</p></div> */}
                <div className="trackID"><p className="dataType">Speechiness: </p><p className="limit"> {song.speechiness}</p></div>
                {/* <div className="trackID"><p className="dataType">Tempo: </p><p> {song.tempo}</p></div> */}
                {/* <div className="trackID"><p className="dataType">Time Signature: </p><p> {song.time_signature}</p></div> */}
                {/* <div className="trackID"><p className="dataType">Valence: </p><p> {song.valence}</p></div> */}
                {/* <div className="trackID"><p className="dataType">Popularity: </p><p> {song.popularity}</p></div> */}
              </div>
              <div className="songSpace">
                <div>
                  <p className="simInfo">Similar Songs</p>
                </div>
                <div className="similar">
                  {this.state.song.similars.map(s => {
                    // return <Link key={s.id} to={`/songs/${s.id}`} onClick={() => this.setState({song: []})}><p>{s.track_name} by {s.artist_name}</p></Link>
                    return <p key={s.id} onClick={() => this.changeSong(s.id)}>{s.track_name}</p>
                  })}
                </div>
              </div>
            </div>
            <iframe title="song" src={`https://open.spotify.com/embed/track/${this.state.song.id}`} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
        </div>
        );
      }
      else {
        return(
          <div className="spinnerFlex">
              <Loader type="Audio" color="#1db954" height="100" width="100" />
          </div>
        )
      }
    }
  }

export default Song;