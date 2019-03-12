import React, { Component } from 'react';
import './Search.css';

class Song extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '' 
          };
    }

  render() {
    return (
        <div>
            <p className="trackInfo">{this.props.trackInfo}</p>
            <div className="trackID">{ this.props.songsArray.map((song, i) => this.props.trackInfo === song.track_name ? (<p key={i}>Artist: {song.artist_name}</p>) : (null)) }</div>
            <div className="trackID">{ this.props.songsArray.map((song, i) => this.props.trackInfo === song.track_name ? (<p key={i}>Track ID: {song.track_id}</p>) : (null)) }</div>
            <div className="trackID">{ this.props.songsArray.map((song, i) => this.props.trackInfo === song.track_name ? (<p key={i}>Acousticness: {song.acousticness}</p>) : (null)) }</div>
            <div className="trackID">{ this.props.songsArray.map((song, i) => this.props.trackInfo === song.track_name ? (<p key={i}>Danceability: {song.danceability}</p>) : (null)) }</div>
            <div className="trackID">{ this.props.songsArray.map((song, i) => this.props.trackInfo === song.track_name ? (<p key={i}>Duration in ms: {song.duration_ms}</p>) : (null)) }</div>
            <div className="trackID">{ this.props.songsArray.map((song, i) => this.props.trackInfo === song.track_name ? (<p key={i}>Energy: {song.energy}</p>) : (null)) }</div>
            <div className="trackID">{ this.props.songsArray.map((song, i) => this.props.trackInfo === song.track_name ? (<p key={i}>Instrumentalness: {song.instrumentalness}</p>) : (null)) }</div>
            <div className="trackID">{ this.props.songsArray.map((song, i) => this.props.trackInfo === song.track_name ? (<p key={i}>Key: {song.key}</p>) : (null)) }</div>
            <div className="trackID">{ this.props.songsArray.map((song, i) => this.props.trackInfo === song.track_name ? (<p key={i}>Liveness: {song.liveness}</p>) : (null)) }</div>
            <div className="trackID">{ this.props.songsArray.map((song, i) => this.props.trackInfo === song.track_name ? (<p key={i}>Loudness: {song.loudness}</p>) : (null)) }</div>
            <div className="trackID">{ this.props.songsArray.map((song, i) => this.props.trackInfo === song.track_name ? (<p key={i}>Mode: {song.mode}</p>) : (null)) }</div>
            <div className="trackID">{ this.props.songsArray.map((song, i) => this.props.trackInfo === song.track_name ? (<p key={i}>Speechiness: {song.speechiness}</p>) : (null)) }</div>
            <div className="trackID">{ this.props.songsArray.map((song, i) => this.props.trackInfo === song.track_name ? (<p key={i}>Tempo: {song.tempo}</p>) : (null)) }</div>
            <div className="trackID">{ this.props.songsArray.map((song, i) => this.props.trackInfo === song.track_name ? (<p key={i}>Time Signature: {song.time_signature}</p>) : (null)) }</div>
            <div className="trackID">{ this.props.songsArray.map((song, i) => this.props.trackInfo === song.track_name ? (<p key={i}>Valence: {song.valence}</p>) : (null)) }</div>
            <div className="trackID">{ this.props.songsArray.map((song, i) => this.props.trackInfo === song.track_name ? (<p key={i}>Popularity: {song.popularity}</p>) : (null)) }</div>
        </div>
      );
    }
  }

export default Song;