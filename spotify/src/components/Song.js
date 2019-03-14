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
        };
    }

    componentDidMount(){
      axiosWithAuth().get(`https://bw-spotify-backend.herokuapp.com/api/songs?id=${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          song: res.data,
          chartData: this.getChartData(res.data)
        })
      })
      .catch(err => {
        console.log('failed')
      })
    }

    getSongData(song) {
      let songNum = [
        song.acousticness,
        song.danceability,
        song.energy,
        song.instrumentalness,
        song.key,
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
            'Key',
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
                      'rgba(51, 204, 51, 0.3)',
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
      // dispatch({
      //   type: ADD_FAVE,
      //   payload: res.data
      // })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    const { song } = this.state;

    let simSong = [];
    if(this.state.song.similars) {
        this.state.song.similars.forEach((s, i) => {
        simSong.push(<p key={i}>{s.track_name}</p>)
      })
    }
    if(Object.entries(this.state.song).length !== 0) {
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
                <div className="trackID"><p className="dataType">Artist: </p><p> {song.artist_name}</p></div>
                <div className="trackID"><p className="dataType">Acousticness: </p><p className="limit"> {song.acousticness}</p></div>
                <div className="trackID"><p className="dataType">Danceability: </p><p className="limit"> {song.danceability}</p></div>
                {/* <div className="trackID"><p className="dataType">Duration in ms: </p><p> {song.duration_ms}</p></div> */}
                <div className="trackID"><p className="dataType">Energy: </p><p className="limit"> {song.energy}</p></div>
                <div className="trackID"><p className="dataType">Instrumentalness: </p><p className="limit"> {song.instrumentalness}</p></div>
                <div className="trackID"><p className="dataType">Key: </p><p> {song.key}</p></div>
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
                  {simSong}
                </div>
              </div>
            </div>
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