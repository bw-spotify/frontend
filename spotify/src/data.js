export function getSongs() {
    return [
      { track_name: 'Juice WRLD - Robbery', track_id: "2RM4jf1Xa9zPgMGRDiht8O"},
      { track_name: 'Post Malone - Better Now', track_id: "1tHDG53xJNGsItRA3vfVgs" },
      { track_name: "Eminem - Not Alike (feat. Royce Da 5'9)", track_id: "6Wosx2euFPMT14UXiWudMy" },
      { track_name: 'Juice WRLD - Wasted (feat. Lil Uzi Vert)', track_id: "3J2Jpw61sO7l6Hc7qdYV91" },
      { track_name: 'Juice WRLD - Fine China', track_id: "2jbYvQCyPgX3CdmAzeVeuS" },
      { track_name: 'Post Malone - White Iverson', track_id: "26Y1lX7ZOpw9Ql3gGAlqLK" },
    ];
  }
  
export function matchSongs(state, value) {
    return (
      state.track_name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
}