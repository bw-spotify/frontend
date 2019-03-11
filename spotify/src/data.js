export function getSongs() {
    return [
      { artist_name: 'Juice WRLD', track_name: 'Robbery' },
      { artist_name: 'Post Malone', track_name: 'Better Now' },
      { artist_name: 'Eminem', track_name: "Not Alike (feat. Royce Da 5'9" },
    ];
  }
  
export function matchSongs(state, value) {
    return (
      state.track_name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
      state.artist_name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
}