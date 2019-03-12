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
            <p className="trackInfo">Song Name: {this.props.trackInfo}</p>
            <div className="trackID">{ this.props.songsArray.map((song, i) => this.props.trackInfo === song.track_name ? (<p key={i}>{song.track_id}</p>) : (null)) }</div>
            <div className="trackID">{ this.props.songsArray.map((song, i) => this.props.trackInfo === song.track_name ? (<p key={i}>{song.track_id}</p>) : (null)) }</div>
        </div>
      );
    }
  }

export default Song;