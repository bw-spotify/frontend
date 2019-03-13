import React, { Component } from 'react';
import './Search.css';
import { Bar } from 'react-chartjs-2';

class Song extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {},
            song: {},
        };
    }

    componentDidUpdate(){
      if (this.props.song !== this.state.song) {
        console.log('component did update', this.props.song)
        this.setState({song: this.props.song, chartData: this.getChartData(this.props.song)})
      }
    }

    getSongData(song) {
      let songNum = [
        song.acousticness,
        song.danceability,
        song.energy,
        song.instrumentalness,
        song.key,
        song.liveness,
        song.loudness,
        song.mode,
        song.speechiness,
        song.time_signature,
        song.valence
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
            'Loudness',
            'Mode',
            'Speechiness',
            'Time Signature',
            'Valence'
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
                      'rgba(75, 192, 192, 0.3)',
                      'rgba(54, 162, 235, 0.3)',
                      'rgba(153, 102, 255, 0.3)',
                      'rgba(51, 0, 102, 0.3)',
                  ]
              }
          ]
      }
  }

  render() {
    // const song = this.props.song; same as below
    const { song } = this.props;

    return (
        <div>
          <div className="dataSong">
            <p className="trackInfo">{song.track_name}</p>
            <div className="trackID"><p className="dataType">Artist: </p><p> {song.artist_name}</p></div>
            <div className="trackID"><p>Track ID: {song.id}</p></div>
            <div className="trackID"><p>Acousticness: {song.acousticness}</p></div>
            <div className="trackID"><p>Danceability: {song.danceability}</p></div>
            <div className="trackID"><p>Duration in ms: {song.duration_ms}</p></div>
            <div className="trackID"><p>Energy: {song.energy}</p></div>
            <div className="trackID"><p>Instrumentalness: {song.instrumentalness}</p></div>
            <div className="trackID"><p>Key: {song.key}</p></div>
            <div className="trackID"><p>Liveness: {song.liveness}</p></div>
            <div className="trackID"><p>Loudness: {song.loudness}</p></div>
            <div className="trackID"><p>Mode: {song.mode}</p></div>
            <div className="trackID"><p>Speechiness: {song.speechiness}</p></div>
            <div className="trackID"><p>Tempo: {song.tempo}</p></div>
            <div className="trackID"><p>Time Signature: {song.time_signature}</p></div>
            <div className="trackID"><p>Valence: {song.valence}</p></div>
            <div className="trackID"><p>Popularity: {song.popularity}</p></div>
          </div>
          <div className="musicChart">
            <Bar
              data={this.state.chartData}
              options={{
                  legend:{
                      display: false,
                  }
              }}
            />
          </div>
        </div>
      );
    }
  }

export default Song;