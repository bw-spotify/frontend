export function getSongs() {
    return [
      { track_name: 'Juice WRLD - Robbery' },
      { track_name: 'Post Malone - Better Now' },
      { track_name: "Eminem - Not Alike (feat. Royce Da 5'9)" },
      { track_name: 'Juice WRLD - Wasted (feat. Lil Uzi Vert)' },
      { track_name: 'Juice WRLD - Fine China' },
      { track_name: 'Post Malone - White Iverson' },
    ];
  }
  
export function matchSongs(state, value) {
    return (
      state.track_name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
}