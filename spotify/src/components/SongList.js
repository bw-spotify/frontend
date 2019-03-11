import React, { Component } from 'react';

class SongList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="songList">
        {this.props.songs.map(s => {
          return <p key={s.track_id}>{s.artist_name}: {s.track_name}</p>;
        })}
      </div>
    )
  }
}

export default SongList;