import React, { Component } from 'react';
import './Search.css';
import { getSongs} from '../data';

let songsArray = getSongs();

class Song extends Component {

  render() {
    return (
        <div>
            <p className="trackInfo">{this.props.trackInfo}</p>
            <div className="trackID">{ songsArray.map((song, i) => this.props.trackInfo === song.track_name ? (<p key={i}>{song.track_id}</p>) : (null)) }</div>
        </div>
      );
    }
  }

export default Song;